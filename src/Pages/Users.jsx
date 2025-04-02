import React, { useState, useEffect } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Edit, Trash2, X } from "lucide-react";
import { motion } from "framer-motion";

const Users = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [isEditMode, setIsEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({
    userId : null,
    username: "",
    email: "",
    is_Active: "", // Will be 1 for Active, 0 for Inactive
  });
  const itemsPerPage = 10;

  // Fetch users function
  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/display_user_api.php",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      if (data.status === "success") {
        setUsers(data.users);
      } else {
        throw new Error(data.message || "No users found");
      }
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
      console.error("Error:", err);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchUsers();
  }, []);

  // Function to toggle user status
  const handleStatusToggle = async (userId, currentStatus) => {
    if(!window.confirm("Are you sure you want Change Status this user?")) return;
    const newStatus = currentStatus === 1 ? 0 : 1;
    try {
      const response = await fetch(
        "http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/user_active_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            uid: userId,
            Is_Active: newStatus,
          }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        setUsers((prevUsers) =>
          prevUsers.map((user) =>
            user.User_Id === userId ? { ...user, Is_Active: newStatus } : user
          )
        );
      } else {
        throw new Error(data.message || "Failed to update Status");
      }
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update user status. Please try again.");
    }
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleAddUser = async () => {
    try {
      const isActiveValue = formData.is_Active === "1" ? 1 : 0;
      const response = await fetch(
        "http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/display_user_api.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: formData.username,
            email: formData.email,
            is_Active: isActiveValue,
          }),
        }
      );

      const data = await response.json();
      if (data.status === "success") {
        setIsModalOpen(false);
        setFormData({ username: "", email: "", is_Active: "" });
        await fetchUsers(); // Refresh the user list
      } else {
        throw new Error(data.message || "Failed to add user");
      }
    } catch (err) {
      alert(`Failed to add user: ${err.message}`);
    }
  };

  //delete the user

  const handleDeleteUser = async (userid) => {
    if(!window.confirm("Are you sure you want to delete this user?")) return;

    try {
        const response = await fetch("http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/display_user_api.php" ,{
            method : "DELETE",
            headers: {
                "Content-Type" : "application/json",
            },
            body: JSON.stringify({
                User_Id : userid,
            }),
        });

        const data = await response.json();
        if(data.status === "success"){
            setUsers((prevUsers) => prevUsers.filter((user) => user.User_Id != userid));
        } else {
            throw new Error(data.message || "Failed to delete user");
        }
    } catch (err) {
        alert(`Failed to delete user : ${err.message}`);
    }
  }

  //Update the User 

  const handleEditUser = (user) => {
    setFormData({
        userId : user.User_Id,
        username : user.Username,
        email : user.Email,
        is_Active : user.Is_Active.toString(),
    });
    setIsEditMode(true);
    setIsModalOpen(true);
  };

  //handle update User

  const handleUpdateUser = async () => {
    if(!window.confirm("Are you sure you want to Update this user?")) return;
    try{
        const isActiveValue = formData.is_Active === "1" ? 1 : 0;
        const response = await fetch("http://192.168.1.7/DBACCOUNT/dbaccounting-(quantity)/API/display_user_api.php",{
            method : "PUT",
            headers : { "Content-Type" : "application/json" },
            body: JSON.stringify({
                userId : formData.userId,
                username: formData.username,
                email : formData.email,
                is_Active: isActiveValue,
            }),
        });

        const data = await response.json();
        if(data.status === "success") {
            setIsModalOpen(false);
            setIsEditMode(false);
            setFormData({userId : null, username : "", email : "", is_Active : ""});
            await fetchUsers();
        } else throw new Error (data.message || "Failed to update users");
    } catch (err) {
        alert(`Failed to update user : ${err.message}`);
    }
  };


  const filteredData = users.filter((item) =>
    item.Username.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  if (loading) {
    return <div className="text-center text-2xl">Loading users...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div>
      <div className="card">
        <div>
          {/* Search Bar */}
          <div className="flex justify-between flex-wrap items-center mb-5 mt-2">
            <div className="relative mb-3">
              <input
                type="text"
                placeholder="Search Users"
                className="pl-10 pr-4 py-2 border-1 rounded-lg"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
            </div>
            <div className="flex items-center justify-between gap-5">
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-[rgba(66,80,134,1)] px-5 py-2 rounded-lg text-white hover:bg-blue-900"
              >
                Add User
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto mt-5">
            <table className="w-full h-auto">
              <thead className="z-10 top-0">
                <tr className="bg-gray-100 uppercase text-lg border-b-2 border-gray-400">
                  <th className="py-2 px-4 text-left">User Id</th>
                  <th className="py-2 px-4 text-left">User Role</th>
                  <th className="py-2 px-4 text-left">Username</th>
                  <th className="py-2 px-4 text-left">Email</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Action</th>
                </tr>
              </thead>
              <tbody className="z-0">
                {displayedData.map((item) => (
                  <tr
                    key={item.User_Id}
                    className="border-b-1 border-b-gray-400 hover:bg-gray-200"
                  >
                    <td className="py-3 px-4">{item.User_Id}</td>
                    <td className="py-3 px-4">{item.User_Role}</td>
                    <td className="py-3 px-4">{item.Username}</td>
                    <td className="py-3 px-4">{item.Email}</td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() =>
                          handleStatusToggle(item.User_Id, item.Is_Active)
                        }
                        className={`px-2 py-1 rounded-full text-white ${
                          item.Is_Active == 1 ? "bg-green-500" : "bg-red-500"
                        }`}
                      >
                        {item.Is_Active == 1 ? "Active" : "Inactive"}
                      </button>
                    </td>
                    <td className="py-3 px-4">{item.Date_time}</td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2 text-blue-900 cursor-pointer">
                        <button>
                          <Edit onClick={() => handleEditUser(item)}/>
                        </button>
                        <button onClick={() =>handleDeleteUser(item.User_Id)}>
                          <Trash2 className="text-red-500" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add User Modal */}
          {isModalOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center z-[9999] p-4"
            >
              <div className="card p-4 sm:p-6 rounded-md shadow-lg w-full max-w-md sm:max-w-lg h-auto relative border border-gray-300 bg-white">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-2 right-2 text-gray-600 hover:text-red-500"
                >
                  <X size={20} />
                </button>
                <h2 className="text-lg sm:text-xl font-semibold mb-4">
                  {isEditMode ? "Edit User" : "Add New User"}
                </h2>

                {/* Form Fields */}
                <input
                  required
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="User Name"
                  className="w-full border p-2 rounded-md mb-3 text-sm sm:text-base"
                />
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email"
                  className="w-full border p-2 rounded-md mb-3 text-sm sm:text-base"
                />
                <select
                  required
                  name="is_Active"
                  value={formData.is_Active}
                  onChange={handleInputChange}
                  className="w-full border-2 p-2 border-gray-300 rounded-md mb-3 text-sm sm:text-base"
                >
                  <option value="" disabled>
                    Select Status
                  </option>
                  <option value="1">Active</option>
                  <option value="0">Inactive</option>
                </select>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row justify-end gap-3">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="w-full sm:w-auto px-4 py-2 border rounded-md hover:bg-gray-200 text-sm sm:text-base"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={isEditMode ? handleUpdateUser : handleAddUser }
                    className="w-full sm:w-auto px-4 py-2 bg-[rgba(66,80,134,1)] text-white rounded-md hover:bg-blue-900 text-sm sm:text-base"
                  >
                    {isEditMode ? "Update User" : "Add User"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Pagination */}
          <div className="flex justify-between items-center mt-5">
            <p className="text-lg text-gray-600">
              Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
              {Math.min(currentPage * itemsPerPage, filteredData.length)} of{" "}
              {filteredData.length} entries
            </p>
            <div className="flex items-center gap-2">
              <button
                className="p-2 bg-gray-200 rounded-full"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              >
                <ChevronLeftIcon className="w-4 h-4" />
              </button>
              <button className="w-10 h-10 bg-blue-900 text-white rounded-full">
                {currentPage}
              </button>
              <button
                className="p-2 bg-gray-200 rounded-full"
                disabled={currentPage === totalPages}
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              >
                <ChevronRightIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
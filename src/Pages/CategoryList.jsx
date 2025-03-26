import React, { useState } from "react";
import { motion } from "framer-motion";
import productsData from "../Data/productsData.js";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import { Edit, Eye, Upload, PlusCircle, X, Trash2 } from "lucide-react";

const CategoryList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    code: "",
    products: "",
    earning: "",
    img: "📦", // Default product icon
  });

  const handleAddProduct = () => {
    if (
      !newProduct.name ||
      !newProduct.code ||
      !newProduct.products ||
      !newProduct.earning
    ) {
      alert("Please fill all fields!");
      return;
    }
    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setIsModalOpen(false);
    setNewProduct({ name: "", code: "", products: "", earning: "", img: "📦" });
  };

  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const [products, setProducts] = useState(productsData);

  const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  // Toggle Select All
  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]); // Deselect all
    } else {
      setSelectedRows(products.map((item) => item.id)); // Select all
    }
    setSelectAll(!selectAll);
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = products.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesSearch;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <div>
        <div className=" card">
          <div className="">
            {/* Search Bar */}
            <div className="flex justify-between flex-wrap items-center mb-5 mt-2">
              <div className="relative mb-3">
                <input
                  type="text"
                  placeholder="Search Category"
                  className="pl-10 pr-4 py-2 border-1 rounded-lg"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
              </div>
              <div className="flex items-center justify-between gap-5">
                <div>
                  <button
                    className=" bg-[rgba(66,80,134,1)] px-5 py-2 rounded-lg text-white  hover:bg-blue-900"
                    onClick={() => setIsModalOpen(true)}
                  >
                    Add Category
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-5">
              <table className="w-full h-auto">
                <thead className=" z-10 top-0">
                  <tr className="bg-gray-100 uppercase text-lg border-b-2 border-gray-400">
                    <th className="py-2 px-4 text-left">
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="w-5 h-5 cursor-pointer"
                      />
                    </th>
                    <th className="py-2 px-4 text-left">CATEGORIES</th>
                    <th className="py-2 px-4 text-left">Category Code</th>
                    <th className="py-2 px-4 text-left">TOTAL PRODUCTS</th>
                    <th className="py-2 px-4 text-left">TOTAL EARNING</th>
                    <th className="py-2 px-4 text-left">ACTIONS</th>
                  </tr>
                </thead>
                <tbody className=" z-0">
                  {displayedData.map((item) => (
                    <tr
                      key={item.id}
                      className="border-b-1 border-b-gray-400 hover:bg-gray-200"
                    >
                      <td className="py-3 px-4">
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(item.id)}
                          onChange={() => handleRowSelect(item.id)}
                          className="w-5 h-5 cursor-pointer"
                        />
                      </td>
                      <td className="py-3 px-4 flex items-center gap-1">
                        <div>{item.img}</div>
                        <div>{item.name}</div>
                      </td>
                      <td className="py-3 px-4">{item.code}</td>
                      <td className="py-3 px-4">{item.products}</td>
                      <td className="py-3 px-4">{item.earning}</td>
                      <td className="py-3 px-4">
                        <div className=" flex gap-2 text-blue-900 cursor-pointer">
                          <Edit/>
                          <button onClick={() => handleDelete(item.id)}>
                            <Trash2 className=" text-red-500" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }} // Start animation
                animate={{ opacity: 1, scale: 1 }} // Animate to normal state
                exit={{ opacity: 0, scale: 0.8 }} // Exit animation
                transition={{ duration: 0.3 }} // Duration of animation
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
                    Add New Product
                  </h2>

                  {/* Form Fields */}
                  <select
                    value={newProduct.name}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, name: e.target.value })
                    }
                    className="w-full border-2 p-2 border-gray-300 rounded-md mb-3 text-sm sm:text-base"
                  >
                    <option value="" disabled>
                      Select a Category
                    </option>
                    <option value="Travel">Travel</option>
                    <option value="Smart Phone">Smart Phone</option>
                    <option value="Shoes">Shoes</option>
                    <option value="Jewellery">Jewellery</option>
                    <option value="Home Decor">Home Decor</option>
                    <option value="Grocery">Grocery</option>
                  </select>
                  <input
                    type="text"
                    placeholder="Category Code"
                    value={newProduct.code}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, code: e.target.value })
                    }
                    className="w-full border p-2 rounded-md mb-3 text-sm sm:text-base"
                  />
                  <input
                    type="number"
                    placeholder="Total Products"
                    value={newProduct.products}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, products: e.target.value })
                    }
                    className="w-full border p-2 rounded-md mb-3 text-sm sm:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Total Earning"
                    value={newProduct.earning}
                    onChange={(e) =>
                      setNewProduct({ ...newProduct, earning: e.target.value })
                    }
                    className="w-full border p-2 rounded-md mb-3 text-sm sm:text-base"
                  />

                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row justify-end gap-3">
                    <button
                      onClick={() => setIsModalOpen(false)}
                      className="w-full sm:w-auto px-4 py-2 border rounded-md hover:bg-gray-200 text-sm sm:text-base"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={handleAddProduct}
                      className="w-full sm:w-auto px-4 py-2 bg-[rgba(66,80,134,1)] text-white rounded-md hover:bg-blue-900 text-sm sm:text-base"
                    >
                      Add Product
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
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(prev - 1, 1))
                  }
                >
                  <ChevronLeftIcon className="w-4 h-4" />
                </button>
                <button className=" w-10 h-10 bg-blue-900 text-white rounded-full">
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
    </>
  );
};

export default CategoryList;

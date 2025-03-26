import { Gift, Laptop, ShoppingBasket, Upload, Wallet } from "lucide-react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";
import CustomSelect from "../Components/SelectCustom.jsx";
import dataTable from "../Data/dataTable.js";
import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx"; // For Excel export

const ProductList = () => {
  const [selectedRows, setSelectedRows] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedRows([]);
    } else {
      setSelectedRows(dataTable.map((item) => item.id));
    }
    setSelectAll(!selectAll);
  };

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredData = dataTable.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesStatus =
      selectedStatus === "" || item.status === selectedStatus;
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes("") ||
      (!selectedCategories.includes("") &&
        selectedCategories.includes(item.category));
    return matchesSearch && matchesStatus && matchesCategory;
  });

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const Status = [
    { value: "", label: "All" },
    { value: "Inactive", label: "Inactive" },
    { value: "Scheduled", label: "Scheduled" },
    { value: "Publish", label: "Publish" },
  ];
  const Category = [
    { value: "", label: "All" },
    { value: "Shoes", label: "Shoes" },
    { value: "Household", label: "Household" },
    { value: "Electronics", label: "Electronics" },
    { value: "Accessories", label: "Accessories" },
  ];
  const Stoks = [];

  // Function to export table as PDF
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.setFont("helvetica", "normal"); 
    doc.setFontSize(10); // 
    doc.setTextColor(66, 80, 134); 
    const today = new Date().toLocaleDateString();
    doc.text(`Generated on: ${today}`, 54, 10);
    doc.text("Product List", 14, 10); // Title
    autoTable(doc ,{
      head: [
        [
          "Product",
          "Category",
          "Brand",
          "Stock",
          "SKU",
          "Price",
          "Qty",
          "Status",
        ],
      ],
      body: filteredData.map((item) => [
        item.name,
        item.category,
        item.brand,
        item.stock,
        item.sku,
        item.price,
        item.qty,
        item.status,
      ]),
      startY: 14,
    });
    doc.save("product_list.pdf");
  };

  // Function to export table as Excel
  const exportToExcel = () => {
    const worksheetData = filteredData.map((item) => ({
      Product: item.name,
      Category: item.category,
      Brand: item.brand,
      Stock: item.stock,
      SKU: item.sku,
      Price: item.price,
      Qty: item.qty,
      Status: item.status,
    }));
    const worksheet = XLSX.utils.json_to_sheet(worksheetData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "product_list.xlsx");
  };

  return (
    <>
      {/* 1st row */}
      <div className="grid grid-cols-12 gap-5">
        {/* In-Store Sales */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="card h-[120px] p-0 relative">
            <div className="flex justify-between items-center bg-[rgba(74,61,203,0.2)] rounded-t-md py-1 px-2">
              <p className="text-xl font-[500] ms-3">In-Store Sales</p>
              <ShoppingBasket
                size={48}
                className="text-white bg-[rgba(74,61,203,1)] p-2 rounded-full absolute right-3 top-2"
              />
            </div>
            <div>
              <p className="text-2xl text-gray-600 flex ms-7 mt-2">$5345.45</p>
              <div className="flex gap-6 ms-7 mt-2 items-center">
                <p className="text-md text-gray-400">5k Orders</p>
                <p className="flex items-center text-sm bg-green-200 text-green-600 rounded-xl px-2">
                  +5.7%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Website Sales */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="card h-[120px] p-0 relative">
            <div className="flex justify-between items-center bg-[rgba(97,218,251,0.2)] rounded-t-md py-1 px-2">
              <p className="text-xl font-[500] ms-3">Website Sales</p>
              <Laptop
                size={48}
                className="text-white absolute bg-blue-400 p-2 rounded-full right-3 top-2"
              />
            </div>
            <div>
              <p className="text-2xl text-gray-600 flex ms-7 mt-2">
                $674,347.12
              </p>
              <div className="flex gap-6 ms-7 mt-2 items-center">
                <p className="text-md text-gray-400">21k Orders</p>
                <p className="flex items-center text-sm bg-green-200 text-green-600 rounded-xl px-2">
                  +12.7%
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Discount */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="card h-[120px] p-0 relative">
            <div className="flex justify-between items-center bg-[rgba(254,87,77,0.2)] rounded-t-md py-1 px-2">
              <p className="text-xl font-[500] ms-3">Discount</p>
              <Gift
                size={48}
                className="text-white absolute right-3 top-2 bg-red-400 p-2 rounded-full"
              />
            </div>
            <div>
              <p className="text-2xl text-gray-600 flex ms-7 mt-2">
                $14,235.12
              </p>
              <div className="flex gap-6 ms-7 mt-2 items-center">
                <p className="text-md text-gray-400">6k Orders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Affiliate */}
        <div className="col-span-12 sm:col-span-6 lg:col-span-3">
          <div className="card h-[120px] p-0 relative">
            <div className="flex justify-between items-center bg-[rgba(40,199,111,0.2)] rounded-t-md py-1 px-2">
              <p className="text-xl font-[500] ms-3">Affiliate</p>
              <Wallet
                size={48}
                className="text-white absolute top-2 right-3 bg-green-500 p-2 rounded-full"
              />
            </div>
            <div>
              <p className="text-2xl text-gray-600 flex ms-7 mt-2">$8,345.23</p>
              <div className="flex gap-6 ms-7 mt-2 items-center">
                <p className="text-md text-gray-400">150 Orders</p>
                <p className="flex items-center text-sm bg-red-200 text-red-600 rounded-xl px-2">
                  -3.7%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd row */}
      <div className="w-auto overflow-x-scroll mt-4">
        <div className="card h-auto px-7 border-2 border-gray-400">
          <div>
            <p className="text-2xl font-[500]">Filter</p>
          </div>
          <div className="grid grid-cols-12 mt-3 gap-5">
            <div className="sm:col-span-4 col-span-6">
              <CustomSelect
                options={Status}
                placeholder="Status"
                onChange={(value) => setSelectedStatus(value)}
              />
            </div>
            <div className="sm:col-span-4 col-span-6">
              <CustomSelect
                options={Category}
                placeholder="Category"
                onChange={(values) => setSelectedCategories(values)}
                isMulti
              />
            </div>
            <div className="col-span-4">
              <CustomSelect options={Stoks} placeholder="Stoks" disabled />
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="">
                {/* Search Bar and Export Buttons */}
                <div className="flex justify-between flex-wrap items-center mb-4 mt-5">
                  <div className="relative mb-3">
                    <input
                      type="text"
                      placeholder="Search Project"
                      className="pl-10 pr-4 py-2 border-1 rounded-lg"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
                  </div>
                  <div className="flex items-center flex-wrap justify-between gap-5">
                    <button
                      onClick={exportToPDF}
                      className="flex items-center bg-red-200 px-5 py-2 rounded-lg text-gray-800 hover:bg-red-300 transition-all"
                    >
                      <Upload className="me-2" />
                      Export PDF
                    </button>
                    <button
                      onClick={exportToExcel}
                      className="flex items-center bg-green-200 px-5 py-2 rounded-lg text-gray-800 hover:bg-green-300 transition-all"
                    >
                      <Upload className="me-2" />
                      Export Excel
                    </button>
                    <button className="bg-[rgba(66,80,134,1)] hover:bg-blue-900 px-5 py-2 rounded-lg text-white transition-all">
                      + Add Product
                    </button>
                  </div>
                </div>

                {/* Table */}
                <div className="w-full overflow-x-auto mt-5">
                  <table className="w-full h-auto">
                    <thead className="z-10 top-0">
                      <tr className="bg-gray-100 uppercase text-lg border-b-2 border-gray-400">
                        <th className="py-2 px-4 text-left">
                          <input
                            type="checkbox"
                            checked={selectAll}
                            onChange={handleSelectAll}
                            className="w-5 h-5 cursor-pointer"
                          />
                        </th>
                        <th className="py-2 px-4 text-left">Product</th>
                        <th className="py-2 px-4 text-left">Category</th>
                        <th className="py-2 px-4 text-left">Brand</th>
                        <th className="py-2 px-4 text-left">Stock</th>
                        <th className="py-2 px-4 text-left">SKU</th>
                        <th className="py-2 px-4 text-left">Price</th>
                        <th className="py-2 px-4 text-left">Qty</th>
                        <th className="py-2 px-4 text-left">Status</th>
                      </tr>
                    </thead>
                    <tbody className="z-0">
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
                          <td className="py-3 px-4 flex items-center gap-2">
                            {item.name}
                          </td>
                          <td className="py-3 px-4">{item.category}</td>
                          <td className="py-3 px-4">{item.brand}</td>
                          <td className="py-3 px-4">{item.stock}</td>
                          <td className="py-3 px-4">{item.sku}</td>
                          <td className="py-3 px-4">{item.price}</td>
                          <td className="py-3 px-4">{item.qty}</td>
                          <td className="py-3 px-4">
                            <span
                              className={`px-3 py-1 rounded-xl text-sm font-medium ${
                                item.status === "Inactive"
                                  ? "bg-red-100 text-red-600"
                                  : item.status === "Scheduled"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-green-100 text-green-600"
                              }`}
                            >
                              {item.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Pagination */}
                <div className="flex justify-between items-center mt-5">
                  <p className="text-lg text-gray-600">
                    Showing {currentPage * itemsPerPage - itemsPerPage + 1} to{" "}
                    {Math.min(currentPage * itemsPerPage, filteredData.length)}{" "}
                    of {filteredData.length} entries
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
        </div>
      </div>
    </>
  );
};

export default ProductList;
import React from "react";
import bg2 from "../assets/img/bg2.png";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip as RechartsTooltip,
  Legend,
} from "chart.js";
import {
  ArrowDown,
  ArrowUp,
  Receipt,
  ChartNoAxesCombined,
  ShoppingCart,
  TrendingDown,
  BadgeDollarSign,
  Search,
  TrendingUp,
  WalletMinimal,
  CirclePlus,
  DollarSign,
  RefreshCcw,
  Download,
  History,
  Share2,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const CRM = () => {

  const activities = [
    {
      id: 1,
      title: "12 Invoices have been paid",
      description: "Invoices have been paid to the company",
      time: "12 min ago",
      iconColor: "bg-purple-500",
      attachment: "invoices.pdf",
    },
    {
      id: 2,
      title: "Client Meeting",
      description: "Project meeting with John @10:15am",
      time: "45 min ago",
      iconColor: "bg-green-500",
      person: {
        name: "Lester McCarthy (Client)",
        role: "CEO of PixInvent",
        avatar: "https://randomuser.me/api/portraits/men/10.jpg",
      },
    },
    {
      id: 3,
      title: "Create a new project for client",
      description: "6 team members in a project",
      time: "2 Day Ago",
      iconColor: "bg-blue-500",
      teamAvatars: [
        "https://randomuser.me/api/portraits/women/20.jpg",
        "https://randomuser.me/api/portraits/men/15.jpg",
        "https://randomuser.me/api/portraits/women/25.jpg",
      ],
    },
  ];

  const transactions = [
    {
      cardType: "Visa",
      cardIcon: "https://img.icons8.com/color/48/000000/visa.png",
      cardNumber: "*4230",
      cardCategory: "Credit",
      date: "17 Mar 2022",
      status: "Verified",
      statusColor: "bg-green-200 text-green-700",
      trend: "+$1,678",
    },
    {
      cardType: "MasterCard",
      cardIcon: "https://img.icons8.com/color/48/000000/mastercard.png",
      cardNumber: "*5578",
      cardCategory: "Credit",
      date: "12 Feb 2022",
      status: "Rejected",
      statusColor: "bg-red-200 text-red-700",
      trend: "-$839",
    },
    {
      cardType: "American Express",
      cardIcon: "https://img.icons8.com/color/48/000000/amex.png",
      cardNumber: "*4567",
      cardCategory: "ATM",
      date: "28 Feb 2022",
      status: "Verified",
      statusColor: "bg-green-200 text-green-700",
      trend: "+$435",
    },
    {
      cardType: "Visa",
      cardIcon: "https://img.icons8.com/color/48/000000/visa.png",
      cardNumber: "*5699",
      cardCategory: "Credit",
      date: "8 Jan 2022",
      status: "Pending",
      statusColor: "bg-gray-300 text-gray-700",
      trend: "+$2,345",
    },
    {
      cardType: "MasterCard",
      cardIcon: "https://img.icons8.com/color/48/000000/mastercard.png",
      cardNumber: "*5699",
      cardCategory: "Credit",
      date: "8 Jan 2022",
      status: "Rejected",
      statusColor: "bg-red-200 text-red-700",
      trend: "-$234",
    },
  ];

  const Countries = [
    {
      code: "us",
      price: "$450",
      country: "USA",
      percentage: "45%",
    },
    {
      code: "cn",
      price: "$250",
      country: "China",
      percentage: "25%",
    },
    {
      code: "in",
      price: "$150",
      country: "India",
      percentage: "15%",
    },
    {
      code: "br",
      price: "$50",
      country: "Brazil",
      percentage: "5%",
    },
    {
      code: "ru",
      price: "$50",
      country: "Russia",
      percentage: "5%",
    },
    {
      code: "jp",
      price: "$50",
      country: "Japan",
      percentage: "5%",
    },
    {
      code: "au",
      price: "$50",
      country: "Australia",
      percentage: "5%",
    },
  ];

  const technologies = [
    {
      name: "Laravel",
      category: "eCommerce",
      color: "bg-red-500",
      percentage: 65,
      icon: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
    },
    {
      name: "Figma",
      category: "App UI Kit",
      color: "bg-purple-600",
      percentage: 86,
      icon: "https://img.icons8.com/color/48/000000/figma.png",
    },
    {
      name: "VueJs",
      category: "Calendar App",
      color: "bg-green-500",
      percentage: 90,
      icon: "https://img.icons8.com/color/48/000000/vue-js.png",
    },
    {
      name: "React",
      category: "Dashboard",
      color: "bg-blue-400",
      percentage: 37,
      icon: "https://img.icons8.com/color/48/000000/react-native.png",
    },
    {
      name: "Bootstrap",
      category: "Website",
      color: "bg-purple-500",
      percentage: 22,
      icon: "https://img.icons8.com/color/48/000000/bootstrap.png",
    },
    {
      name: "Sketch",
      category: "Website Design",
      color: "bg-orange-500",
      percentage: 29,
      icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Sketch_Logo.svg",
    },
  ];

  const dataChart = [
    { name: "Jan", Revenue: 40 },
    { name: "Feb", Revenue: 55 },
    { name: "Mar", Revenue: 30 },
    { name: "Apr", Revenue: 70 },
    { name: "May", Revenue: 50 },
    { name: "Jun", Revenue: 60 },
    { name: "Jul", Revenue: 20 },
    { name: "Aug", Revenue: 80 },
    { name: "Sep", Revenue: 90 },
    { name: "Oct", Revenue: 120 },
    { name: "Nov", Revenue: 150 },
    { name: "Dec", Revenue: 190 },
  ];

  ChartJS.register(RadialLinearScale, ArcElement, RechartsTooltip, Legend);

  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Sales",
        data: [12000, 15000, 18000, 21000, 24000, 27000], // Sales data
        backgroundColor: "rgba(74, 61, 203, 0.8)", // Blue for Sales
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Visits",
        data: [25000, 30000, 35000, 40000, 45000, 50000], // Visits data
        backgroundColor: "rgba(13, 165, 184, 0.6)", // Red for Visits
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: false,
    },
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-3">
        <div className=" lg:col-span-2 sm:col-span-4 [@media(max-width:479px)]:col-span-12 col-span-6">
          <div className="card h-[260px]">
            <div>
              <h1 className="text-2xl font-[500]">Order</h1>
              <p className="text-xl text-gray-600">Last Week</p>
            </div>
            <div className="flex justify-center items-end gap-3 mt-2 h-32">
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "85%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "60%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "45%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "75%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "95%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "90%" }}
                ></div>
              </div>
              <div className="w-3 bg-gray-200 rounded-full relative h-30 flex items-end">
                <div
                  className="bg-blue-900 w-full rounded-full transition-all duration-300"
                  style={{ height: "70%" }}
                ></div>
              </div>
            </div>
            <div className="flex justify-around mt-3">
              <p className="text-xl flex font-[600] ">124k</p>
              <p className="text-md font-[600] text-green-500 flex items-center">
                <ArrowUp size={20} />
                16.2%
              </p>
            </div>
          </div>
        </div>
        <div className="  lg:col-span-2 sm:col-span-4 [@media(max-width:479px)]:col-span-12 col-span-6">
          <div className="card h-[260px] pb-0 px-0">
            <div>
              <div>
                <h1 className="text-2xl font-[500] ms-5">Sales</h1>
                <p className="text-xl text-gray-600 ms-5">Last Year</p>
              </div>
              <div
                className="mt-10 rounded-b-lg"
                style={{
                  backgroundImage: `url(${bg2})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  height: "144px",
                }}
              >
                <div className="flex justify-around pt-16 items-center">
                  <p className="text-xl flex font-[600] ">175k</p>
                  <p className="text-md font-[600] text-red-500 flex items-center">
                    <ArrowDown size={20} />
                    16.2%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="  lg:col-span-2 sm:col-span-4 [@media(max-width:479px)]:col-span-12 col-span-6">
          <div className="card h-[260px]">
            <div className="">
              <p className="flex justify-center mt-3 text-green-500 ">
                <Receipt
                  size={50}
                  className="border-1 rounded-full p-2 bg-green-100"
                />
              </p>
              <p className="flex justify-center xl:text-2xl text-xl font-[500] mt-3">
                Total Profit
              </p>
              <p className="flex justify-center xl:text-xl text-lg font-[500] text-gray-500 ">
                Last Week
              </p>
              <p className="flex justify-center text-xl font-[500] text-gray-700 mt-1">
                1.28k
              </p>
              <p className="flex justify-center text-sm font-[500] text-red-500 mt-5">
                <span className="rounded-full px-2 border-1 bg-red-100">
                  -12.2%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="  lg:col-span-2 sm:col-span-4 [@media(max-width:479px)]:col-span-12 col-span-6">
          <div className="card h-[260px]">
            <div className="">
              <p className="flex justify-center mt-3 text-blue-500 ">
                <ChartNoAxesCombined
                  size={50}
                  className="border-1 rounded-full p-2 bg-blue-100"
                />
              </p>
              <p className="flex justify-center xl:text-2xl text-xl font-[500] mt-3">
                Total Sales
              </p>
              <p className="flex justify-center xl:text-xl text-lg font-[500] text-gray-500 ">
                Last Week
              </p>
              <p className="flex justify-center text-xl font-[500] text-gray-700 mt-1">
                24.67k
              </p>
              <p className="flex justify-center text-sm font-[500] text-green-500 mt-5">
                <span className="rounded-full px-2 border-1 bg-green-100">
                  +24.5%
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-4 sm:col-span-6 [@media(max-width:479px)]:col-span-12 col-span-8">
          <div className="card h-[260px]">
            <div>
              <h1 className="text-2xl font-[500] ms-3">Revenue Growth</h1>
              <p className="text-xl text-gray-600 font-[500] ms-3">
                Weekly Report
              </p>
            </div>
            <div className="flex">
              <div className="ms-3 mt-18">
                <p className=" text-2xl font-[500]">$4,873</p>
                <p className="text-md font-[500] text-green-500 mt-2">
                  <span className="rounded-full px-2 border-2 bg-green-100">
                    +15.2%
                  </span>
                </p>
              </div>
              <div>
                <div className="flex justify-center items-end 2xl:gap-3 gap-2 mt-2 h-32 ms-14">
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "85%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "60%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "45%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "75%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "95%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "90%" }}
                  ></div>
                  <div
                    className="bg-green-200 border-3 border-green-600 w-2 2xl:w-4 xl:w-3.5 rounded-full transition-all duration-300"
                    style={{ height: "70%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}

      <div className=" grid grid-cols-12 mt-3 gap-3">
        <div className=" lg:col-span-8 col-span-12">
          <div className=" card h-[100%]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Earning Reports</h1>
              <p className="text-xl mt-1 font-[500] ms-5 text-gray-600">
                Yearly Earnings Overview
              </p>
            </div>
            <div>
              <div className="flex gap-12 flex-wrap mx-auto ms-10 mt-10 items-center text-center text-md font-[500]">
                <div>
                  <ShoppingCart
                    size={60}
                    className="border-blue-900 border-2 p-2 rounded-full cursor-pointer"
                  />
                  Orders
                </div>
                <div>
                  <ChartNoAxesCombined
                    size={60}
                    className="border-blue-900 border-2 p-2 rounded-full cursor-pointer"
                  />
                  Sales
                </div>
                <div>
                  <TrendingUp
                    size={60}
                    className="border-blue-900 border-2 p-2 rounded-full cursor-pointer"
                  />
                  Profit
                </div>
                <div>
                  <WalletMinimal
                    size={60}
                    className="border-blue-900 border-2 p-2 rounded-full cursor-pointer"
                  />
                  Income
                </div>
                <CirclePlus size={45} className="flex cursor-pointer" />
              </div>
            </div>
            <div className="mt-16">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={dataChart} barCategoryGap="20%">
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Revenue" fill="url(#gradient1)" />
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="rgba(55, 70, 123, 1)" />
                      <stop offset="100%" stopColor="rgba(101, 128, 225, 1)" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4 sm:col-span-6 col-span-12">
          <div className=" card lg:h-[600px] h-[100%]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Sales</h1>
              <p className="text-xl mt-1 font-[500] ms-5 text-gray-600">
                Last 6 Months
              </p>
            </div>
            <div className="w-full max-w-md mx-auto h-full mt-12 flex justify-center">
              <PolarArea data={data} options={options} />
            </div>
            <div className="mt-5">
              <div className="flex justify-center items-center">
                <p className="bg-[rgba(74,61,203,0.8)] w-4 h-4 rounded-full me-2"></p>
                <p className="text-xl me-10">Sales</p>
                <p className="bg-[rgba(13,165,184,0.6)] w-4 h-4 rounded-full me-2"></p>
                <p className="text-xl">Visits</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-4 sm:col-span-6 col-span-12">
          <div className=" card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Sales by Countries</h1>
              <p className="text-lg mt-1 font-[500] ms-5 text-gray-600">
                Monthly Sales Overview
              </p>
            </div>
            <div className="relative flex-1 max-w-xs mt-5 ms-5 rounded-lg">
              <input
                type="text"
                placeholder="Search Countries..."
                className="w-full bg-white text-black px-4 py-2 rounded-md pl-10 focus:outline-none"
              />
              <Search
                className="absolute left-3 top-3 text-gray-500"
                size={18}
              />
            </div>
            <div className=" overflow-y-scroll no-scrollbar h-[450px]">
              <div className="">
                {Countries.map((country, index) => (
                  <div
                    className="flex items-center gap-4 mt-5 ms-5"
                    key={index}
                  >
                    <img
                      src={`https://flagcdn.com/w40/${country.code}.png`}
                      className="w-12 h-8"
                      alt={country.name}
                    />
                    <div>
                      <p className="text-xl font-[500]">{country.price}</p>
                      <p className="text-lg font-[500] text-gray-400">
                        {country.country}
                      </p>
                    </div>
                    <div className="ms-auto me-3 flex items-center gap-2">
                      <TrendingUp className=" text-emerald-500" />
                      <p className="text-xl font-[500] text-emerald-500">
                        {country.percentage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-4 sm:col-span-6 col-span-12">
          <div className=" card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Project Status</h1>
            </div>
            <div className="flex items-center mt-8 ms-5 me-5">
              <div className="me-3">
                <DollarSign
                  size={46}
                  className=" bg-orange-100 border-2 border-orange-400 rounded-full text-orange-400"
                />
              </div>
              <div>
                <p className=" text-xl ">$34,254</p>
                <p className=" text-sm text-gray-400">Your Earnings</p>
              </div>
              <div className=" ms-auto">
                <p className="text-green-600 text-xl font-[500]">+10.2%</p>
              </div>
            </div>
            <div className="relative w-60 h-60 flex items-center justify-center mt-10 mx-auto">
              {/* Dashed Outer Border */}
              <div className="absolute w-full h-full rounded-full border-5 border-dashed border-orange-300 animate-spin-slow"></div>

              {/* Circular Progress Container */}
              <div className="relative w-54 h-54 bg-orange-100 rounded-full flex items-center justify-center overflow-hidden border-2 border-orange-500">
                {/* Wave SVG */}
                <svg
                  className="absolute top-0 left-0 w-full h-full"
                  viewBox="0 0 100 100"
                >
                  <path
                    fill="url(#waveGradient)"
                    d="M0 50 Q 25 40 50 50 T 100 50 V 100 H 0 Z"
                  />
                  {/* Gradient for Wave */}
                  <defs>
                    <linearGradient
                      id="waveGradient"
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
                      <stop offset="0%" stopColor="#F59E0B" />
                      <stop offset="100%" stopColor="#92400E" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-12 gap-3 mt-12">
                <div className="col-span-6">
                  <div className="border-[rgba(66,80,134,1)] border-2 rounded-lg p-3">
                    <div className=" text-center">
                      <p className="text-xl font-[500]">Donates</p>
                      <p className="text-sm font-[500] text-gray-400 mt-2">
                        $756.26
                      </p>
                      <p className="text-sm font-[500] text-red-600 mt-2">
                        -$139.34
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="border-[rgba(66,80,134,1)] border-2 rounded-lg p-3">
                    <div className=" text-center">
                      <p className="text-xl font-[500]">Podcasts</p>
                      <p className="text-sm font-[500] text-gray-400 mt-2">
                        $2207.03
                      </p>
                      <p className="text-sm font-[500] text-emerald-600 mt-2">
                        +$576.24
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-4 sm:col-span-6 col-span-12">
          <div className=" card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Active Project</h1>
              <p className="text-lg mt-1 font-[500] ms-5 text-gray-600">
                Average 72% Completed
              </p>
            </div>
            <div className="space-y-8 mt-7 px-5 overflow-y-scroll no-scrollbar h-[450px]">
              {technologies.map((tech, index) => (
                <div key={index} className="flex items-center gap-4">
                  <img src={tech.icon} alt={tech.name} className="w-10 h-10" />
                  <div className="flex-1">
                    <h3 className="text-xl">{tech.name}</h3>
                    <p className="text-sm text-gray-600">{tech.category}</p>
                  </div>
                  <div className="relative w-24 h-3 bg-gray-200 rounded-full">
                    <div
                      className={`${tech.color} h-3 rounded-full transition-all`}
                      style={{ width: `${tech.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-gray-500 text-sm">
                    {tech.percentage}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>


        

      {/* 4th row */}

      <div className=" grid grid-cols-12 mt-3 gap-3">
        <div className=" col-span-12 lg:col-span-6">
          <div className=" card h-auto px-0">
            <div className=" border-b-2 border-gray-400 pb-5">
              <div className=" flex justify-between mx-5 mt-3 items-center">
                <div>
                  <p className=" text-xl font-[500]">Last Transaction</p>
                </div>
                <div className=" flex gap-5 text-gray-900 cursor-pointer">
                  <RefreshCcw size={28} />
                  <Download size={28} />
                  <Share2 size={28} />
                </div>
              </div>
            </div>
            <div className=" overflow-x-auto max-h-[320px] no-scrollbar">
              <table className=" w-full">
                <thead className=" sticky top-0 bg-gray-100 z-10">
                  <tr className="text-lg border-b-2 border-gray-400">
                    <th className="py-2 text-left px-4">CARD</th>
                    <th className="py-2 text-left px-4">DATE</th>
                    <th className="py-2 text-left px-4">STATUS</th>
                    <th className="py-2 text-left px-4">TREND</th>
                  </tr>
                </thead>
                <tbody className=" z-0">
                  {transactions.map((transaction, index) => (
                    <tr key={index} className="border-b hover:bg-gray-200 ">
                      {/* Card Details */}
                      <td className="p-3 flex items-center gap-2">
                        <img
                          src={transaction.cardIcon}
                          alt={transaction.cardType}
                          className="w-8 h-8"
                        />
                        <div>
                          <div className="font-semibold">
                            {transaction.cardNumber}
                          </div>
                          <div className="text-xs text-gray-500">
                            {transaction.cardCategory}
                          </div>
                        </div>
                      </td>

                      {/* Date */}
                      <td className="p-3">
                        <div className="text-gray-700">Sent</div>
                        <div className="text-xs text-gray-500">
                          {transaction.date}
                        </div>
                      </td>

                      {/* Status */}
                      <td className="p-3">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${transaction.statusColor}`}
                        >
                          {transaction.status}
                        </span>
                      </td>

                      {/* Trend */}
                      <td className="p-3 font-semibold text-gray-800">
                        {transaction.trend}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className=" lg:col-span-6 col-span-12">
          <div className=" card h-[100%] px-0">
          <div className=" border-b-2 border-gray-400 pb-5">
              <div className=" flex justify-between mx-5 mt-3 items-center">
                <div>
                  <p className=" text-xl font-[500] flex items-center"><History size={28} className="me-2 pt-1"/>Activity Timeline</p>
                </div>
                <div className=" flex gap-5 text-gray-900 cursor-pointer">
                  <RefreshCcw size={28} />
                  <Download size={28} />
                  <Share2 size={28} />
                </div>
              </div>
            </div>
            <div className="mt-4 space-y-5 px-5">
        {activities.map((activity) => (
          <div key={activity.id} className="relative pl-7">
              <div className="absolute left-1 top-0 h-full w-0.5 bg-gray-300"></div>

            <div className={`absolute left-0 w-3 h-3 rounded-sm ${activity.iconColor}`}></div>

            <div>
              <h3 className=" font-medium">{activity.title}</h3>
              <p className="text-sm text-gray-500">{activity.description}</p>

              {activity.attachment && (
                <div className="mt-1 text-sm text-gray-500 bg-gray-200 px-2 py-1 rounded inline-block">
                  📄 {activity.attachment}
                </div>
              )}

              {activity.person && (
                <div className="flex items-center gap-2 mt-2">
                  <img
                    src={activity.person.avatar}
                    alt="person"
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="text-sm text-gray-600">
                    <p>{activity.person.name}</p>
                    <p>{activity.person.role}</p>
                  </div>
                </div>
              )}

              {activity.teamAvatars && (
                <div className="flex mt-2">
                  {activity.teamAvatars.map((avatar, idx) => (
                    <img
                      key={idx}
                      src={avatar}
                      alt="team member"
                      className="w-8 h-8 rounded-full border-2 border-white -ml-2"
                    />
                  ))}
                </div>
              )}
            </div>

            <p className="absolute top-2 right-5 text-sm text-gray-400 [@media(min-width:479px)]:block hidden">
              {activity.time}
            </p>
          </div>
        ))}
      </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CRM;

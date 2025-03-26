import React, { useState } from "react";
import {
  TrendingUp,
  ShoppingCart,
  User,
  BadgeDollarSign,
  ChartNoAxesCombined,
  Wallet,
  Search,
  ArrowUp,
  MailCheck,
  Ticket,
  Tickets,
  ExternalLink,
  MousePointerClick,
  ClockArrowUp,
  CalendarHeart,
  MessageCircleWarning,
  UserX,
  FolderInput,
  Waypoints,
  DiamondPlus,
  RefreshCcwDot,
  TvMinimalPlay,
} from "lucide-react";
import { Chart } from "react-google-charts";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  EllipsisVerticalIcon,
} from "@heroicons/react/24/solid";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import bg1 from "../assets/img/bg1.png";
import bg2 from "../assets/img/bg2.png";
import day from "../assets/img/day.png";
import slider1 from "../assets/img/slider1.png";

const Analytics = () => {
  const dataTable = [
    {
      id: 1,
      project: "Crypto Admin",
      date: "29 Sept 2021",
      leader: "Allyson",
      team: [
        "https://i.pravatar.cc/40?img=1",
        "https://i.pravatar.cc/40?img=2",
      ],
      progress: 36,
      icon: "https://img.icons8.com/color/48/000000/html-5.png",
    },
    {
      id: 2,
      project: "Social Banners",
      date: "03 Jan 2021",
      leader: "Eileen",
      team: [
        "https://i.pravatar.cc/40?img=3",
        "https://i.pravatar.cc/40?img=4",
      ],
      progress: 38,
      icon: "https://img.icons8.com/ios-filled/50/000000/internet.png",
    },
    {
      id: 3,
      project: "Angular APIs",
      date: "17 June 2021",
      leader: "Fred",
      team: [
        "https://i.pravatar.cc/40?img=5",
        "https://i.pravatar.cc/40?img=6",
        "https://i.pravatar.cc/40?img=7",
        "https://i.pravatar.cc/40?img=8",
      ],
      progress: 89,
      icon: "https://img.icons8.com/color/48/000000/angularjs.png",
    },
    {
      id: 4,
      project: "Admin Template",
      date: "06 Oct 2021",
      leader: "Genevra",
      team: [
        "https://i.pravatar.cc/40?img=9",
        "https://i.pravatar.cc/40?img=10",
        "https://i.pravatar.cc/40?img=11",
      ],
      progress: 72,
      icon: "https://img.icons8.com/color/48/000000/vue-js.png",
    },
    {
      id: 5,
      project: "Figma Dashboards",
      date: "12 Aug 2021",
      leader: "Georgie",
      team: [
        "https://i.pravatar.cc/40?img=12",
        "https://i.pravatar.cc/40?img=13",
      ],
      progress: 100,
      icon: "https://img.icons8.com/color/48/000000/figma.png",
    },
    {
      id: 6,
      project: "Logo Designs",
      date: "12 Aug 2021",
      leader: "Harmonia",
      team: [
        "https://i.pravatar.cc/40?img=12",
        "https://i.pravatar.cc/40?img=13",
        "https://i.pravatar.cc/40?img=9",
        "https://i.pravatar.cc/40?img=10",
        "https://i.pravatar.cc/40?img=11",
      ],
      progress: 100,
      icon: "https://img.icons8.com/color/48/000000/next.png",
    },
  ];

  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredData = dataTable.filter((item) =>
    item.project.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const displayedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const dataChart = [
    { name: "Jan", Revenue: 40, Sales: 20 },
    { name: "Feb", Revenue: 55, Sales: 30 },
    { name: "Mar", Revenue: 30, Sales: 15 },
    { name: "Apr", Revenue: 70, Sales: 35 },
    { name: "May", Revenue: 50, Sales: 25 },
    { name: "Jun", Revenue: 60, Sales: 30 },
    { name: "Jul", Revenue: 20, Sales: 10 },
  ];

  const visitSource = [
    {
      icon: <FolderInput size={30} className="text-blue-500" />,
      name: "Direct Source",
      subname: "Direct link click",
      number: "1.2k",
      percentage: "+45%",
    },
    {
      icon: <Waypoints size={30} className="text-blue-500" />,
      name: "Social Network",
      subname: "Social Channels",
      number: "4.5k",
      percentage: "+25%",
    },
    {
      icon: <MousePointerClick size={30} className="text-blue-500" />,
      name: "Email Newsletter",
      subname: "Mail Campaigns",
      number: "3.5k",
      percentage: "+15%",
    },
    {
      icon: <MailCheck size={30} className="text-blue-500" />,
      name: "Referrals",
      subname: "Impact Radius Visits",
      number: "2.02k",
      percentage: "+5%",
    },
    {
      icon: <TvMinimalPlay size={30} className="text-blue-500" />,
      name: "ADVT",
      subname: "Google ADVT",
      number: "3.45k",
      percentage: "+5%",
    },
    {
      icon: <DiamondPlus size={30} className="text-blue-500" />,
      name: "Other",
      subname: "Many Sources",
      number: "4.5k",
      percentage: "+5%",
    },
  ];

  const campainState = [
    {
      icon: <MailCheck size={30} className="text-blue-500" />,
      name: "Emails",
      number: "12,346",
      percentage: "45%",
    },
    {
      icon: <ExternalLink size={30} className="text-blue-500" />,
      name: "Opened",
      number: "4,567",
      percentage: "25%",
    },
    {
      icon: <MousePointerClick size={30} className="text-blue-500" />,
      name: "Clicked",
      number: "3,456",
      percentage: "15%",
    },
    {
      icon: <CalendarHeart size={30} className="text-blue-500" />,
      name: "Subscribe",
      number: "2,345",
      percentage: "5%",
    },
    {
      icon: <MessageCircleWarning size={30} className="text-blue-500" />,
      name: "Complaints",
      number: "345",
      percentage: "5%",
    },
    {
      icon: <UserX size={30} className="text-blue-500" />,
      name: "Unsubscribe",
      number: "45",
      percentage: "5%",
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

  const data = [
    ["Label", "Percentage"], // Header row
    [" ", 85], // Main portion
    [" ", 15], // Empty space
  ];

  const options = {
    pieHole: 0.4, // Creates a Donut Chart. Does not do anything when is3D is enabled
    is3D: true,
    pieStartAngle: 20, // Rotates the chart
    sliceVisibilityThreshold: 0.02, // Hides slices smaller than 2%
    pieSliceTextStyle: { color: "black" },
    legend: "none",
    colors: ["#BDC9FD", "#D3D3D3"],
  };

  return (
    <>
      {/* first row */}

      <div className="grid grid-cols-12 gap-3">
        <div className="xl:col-span-6 col-span-12">
          <div
            className=" "
            style={{
              backgroundImage: `url(${bg1})`,
              backgroundSize: "cover",
              height: "300px",
              backgroundPosition: "center",
              borderRadius: "8px",
            }}
          >
            <div>
              <h1 className="text-2xl font-[500] text-white pt-5 ps-10">
                Website Analytics
              </h1>
              <h3 className=" text-xl text-white ps-10">
                Total <span className=" text-[rgba(74,61,203,1)]">28.5%</span>{" "}
                Conversion Rate
              </h3>
            </div>
            <div>
              <h1 className=" text-2xl ps-10 mt-5 mb-1 text-white font-[600]">
                Traffic
              </h1>
            </div>
            <div className="grid grid-cols-12 gap-3 [@media(min-width:479px)]:ms-10 ms-5  items-center">
              {/* Left Section - 8 Columns */}
              <div className="col-span-10 md:col-span-8 xl:col-span-7 grid grid-cols-2 gap-6">
                {[
                  { value: "28%", label: "Sessions" },
                  { value: "3.1k", label: "Page Views" },
                  { value: "1.2k", label: "Leads" },
                  { value: "12%", label: "Conversions" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="bg-[rgba(66,80,134,1)] p-2 rounded-full text-white font-bold border-2 border-white w-12 h-12 flex items-center justify-center">
                      {item.value}
                    </div>
                    <p className="text-white  sm:text-lg text-sm">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Right Section - 4 Columns */}
              <div className="col-span-4 md:col-span-4 xl:col-span-5 flex justify-center">
                <img
                  src={slider1}
                  alt="Graph"
                  className="h-auto max-w-full md:w-[180px] md:h-[140px] xl:w-[220px] xl:h-[160px] object-contain hidden [@media(min-width:479px)]:block"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 sm:col-span-6 col-span-12">
          <div className="card h-[300px] px-0 pb-0">
            <h1 className="text-2xl font-[500] flex justify-center">
              Average Daily Sales
            </h1>
            <p className="text-xl mt-1 flex justify-center">
              Total Sales This Month
            </p>
            <div
              className=""
              style={{
                backgroundImage: `url(${bg2})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                height: "180px",
              }}
            >
              <p className=" text-[40px] font-[500] flex justify-center mt-10">
                $28,450
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-3 sm:col-span-6 col-span-12 relative">
          <div className="card xl:h-[300px] h-auto px-0 pb-5">
            <div className="flex justify-center items-center">
              <div>
                <h1 className="text-2xl font-[500] ms-5">Sales Overview</h1>
                <p className="text-3xl mt-1 font-[500] ms-5">$42.5k</p>
              </div>
              <div>
                <p className="text-xl font-[500] mt-7  flex items-center text-green-500 me-2">
                  <TrendingUp className="me-2" />
                  18.2%
                </p>
              </div>
            </div>
            <span className="mt-3  text-black text-lg font-semibold flex justify-center items-center">
              V/S
            </span>
            <div className=" flex justify-center gap-2 items-center mt-3 px-2">
              {/* Left Circle (Order) */}
              <div className="w-30 h-30 bg-blue-100 border-2 border-black rounded-full flex flex-col items-center justify-center">
                <ShoppingCart className="text-blue-500" size={24} />
                <p className="text-blue-500 text-lg font-semibold">Order</p>
                <p className="text-gray-600 text-xl font-[500]">62.2%</p>
                <p className="text-gray-600 text-sm font-[500]">6,440</p>
              </div>

              {/* Right Circle (Visits) */}
              <div className="w-30 h-30 bg-purple-100 border-2 border-black rounded-full flex flex-col items-center justify-center">
                <User className="text-purple-500" size={24} />
                <p className="text-purple-500 text-lg font-semibold">Visits</p>
                <p className="text-gray-600 text-xl font-[500]">25.5%</p>
                <p className="text-gray-600 text-sm font-[500]">12,749</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <div className="card h-auto">
            <div className="grid grid-cols-12 gap-3">
              <div className="col-span-12 [@media(min-width:479px)]:col-span-6">
                <h1 className="text-2xl font-[500] ms-5">Earning Reports</h1>
                <p className="text-xl mt-1 font-[500] ms-5 text-gray-600">
                  Weekly Earnings Overview
                </p>
                <div className="flex align-center">
                  <p className=" text-3xl font-[500] ms-5 mt-7">$468</p>
                  <p className="text-xl font-[500] mt-7  ms-5 flex items-center text-green-500 ">
                    <TrendingUp className="me-2" />
                    18.2%
                  </p>
                </div>
                <p className="text-xl font-[500] ms-5 mt-5 text-gray-600">
                  You informed of this week compared to last week
                </p>
              </div>
              <div className="[@media(min-width:479px)]:col-span-6 col-span-12 mx-auto">
                <div className="flex xl:gap-3 mt-12 sm:gap-5 gap-2">
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Monday" />
                    Mo
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Tuesday" />
                    Tu
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Wednesday" />
                    We
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Thursday" />
                    Th
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Friday" />
                    Fr
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Saturday" />
                    Sa
                  </div>
                  <div className="text-lg font-[500]">
                    <img src={day} alt="Sunday" />
                    Su
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 mx-5">
              <div className="flex flex-wrap justify-center [@media(min-width:479px)]:justify-between gap-y-2">
                <div className=" bg-[rgba(233,231,253,1)] w-36 h-36 rounded-full border-5 border-[rgba(74,61,203,1)]">
                  <div className=" flex justify-center pt-5">
                    <p>
                      <BadgeDollarSign size={36} />
                    </p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-xl font-[500]">Earnings</p>
                  </div>
                  <div className="flex justify-center">
                    <p className="text-lg text-gray-900">$545.69</p>
                  </div>
                </div>
                <div className=" bg-[rgba(214,244,248,0.7)] w-36 h-36 rounded-full border-5 border-[rgba(0,186,209,1)]">
                  <div>
                    <div className=" flex justify-center pt-5">
                      <p>
                        <ChartNoAxesCombined size={36} />
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-xl font-[500]">Profit</p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-lg text-gray-900">$256.34</p>
                    </div>
                  </div>
                </div>
                <div className=" bg-[rgba(255,226,227,0.7)] w-36 h-36 rounded-full border-5 border-[rgba(255,76,81,1)]">
                  <div>
                    <div className=" flex justify-center pt-5">
                      <p>
                        <Wallet size={36} />
                      </p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-xl font-[500]">Expense</p>
                    </div>
                    <div className="flex justify-center">
                      <p className="text-lg text-gray-900">$74.19</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:col-span-6 col-span-12">
          <div className="card xl:h-[400px] h-auto">
            <div className="grid grid-cols-12 gap-3">
              <div className="[@media(min-width:479px)]:col-span-5 col-span-12">
                <div>
                  <h1 className="text-2xl font-[500] ms-5">Support Tracker</h1>
                  <p className="text-xl mt-1 font-[500] ms-5 text-gray-600">
                    Last 7 days
                  </p>
                </div>
                <div className="ms-5 [@media(min-width:479px)]:mt-16 mt-5">
                  <div className="flex gap-3 items-center">
                    <Ticket size={36} className=" text-amber-600" />
                    <div>
                      <p className="text-xl font-[500]">New Tickets</p>
                      <p className="text-sm font-[500] text-gray-600">142</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mt-7">
                    <ClockArrowUp size={36} className=" text-blue-400" />
                    <div className="">
                      <p className="text-xl font-[500]">Response Time</p>
                      <p className="text-sm font-[500] text-gray-600">1 day</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center mt-7">
                    <Tickets size={36} className=" text-emerald-500" />
                    <div className="">
                      <p className="text-xl font-[500]">Open Tickets</p>
                      <p className="text-sm font-[500] text-gray-600">28</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="[@media(min-width:479px)]:col-span-7 col-span-12">
                <div>
                  <p className="flex justify-center text-[40px] font-[500]">
                    164
                  </p>
                  <p className=" flex justify-center text-xl font-[500] text-gray-600">
                    Total Tickets
                  </p>
                </div>
                <div>
                  <div>
                    <p className="flex justify-center text-2xl font-[500] mt-8">
                      Completed Task
                    </p>
                    <Chart
                      className="flex justify-center items-center"
                      chartType="PieChart"
                      data={data}
                      options={options}
                      width={"100%"}
                      height={"230px"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second row */}

        
      {/* third row */}

      <div className="grid grid-cols-12 gap-3 mt-3">
        <div className="xl:col-span-4 sm:col-span-6 col-span-12">
          <div className="card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Sales by Countries</h1>
              <p className="text-lg mt-1 font-[500] ms-5 text-gray-600">
                Monthly Sales Overview
              </p>
            </div>
            <div className="relative flex-1 max-w-xs mt-5 ms-5 border-2 border-blue-900 rounded-lg">
              <input
                type="text"
                placeholder="Search Countries..."
                className="w-full bg-white text-black px-4 py-2 rounded-md pl-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        <div className="xl:col-span-4 sm:col-span-6 col-span-12">
          <div className="card xl:h-[600px] h-auto">
            <div className="">
              <h1 className="text-2xl font-[500] ms-5">Total Earning</h1>
              <div className=" flex items-end">
                <p className="text-3xl font-[500] ms-5 mt-3 me-5">87%</p>
                <p className="flex text-emerald-600 text-xl font-[500]">
                  <TrendingUp size={30} className="me-2" />
                  25.8%
                </p>
              </div>
            </div>
            <div className="mt-10">
              <ResponsiveContainer width="100%" height={290}>
                <BarChart data={dataChart} barCategoryGap="20%">
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="Revenue" fill="url(#gradient1)" />
                  <Bar dataKey="Sales" fill="gray" />
                  <defs>
                    <linearGradient id="gradient1" x1="0" y1="1" x2="0" y2="0">
                      <stop offset="0%" stopColor="#202A44" />
                      <stop offset="100%" stopColor="#6A5ACD" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="grid grid-cols-12 gap-3 mt-3">
              <div className="col-span-6">
                <div className="border-[rgba(66,80,134,1)] border-2 rounded-lg p-3">
                  <div className=" text-center">
                    <p className="flex justify-center">
                      <ChartNoAxesCombined
                        size={30}
                        className="text-blue-500"
                      />
                    </p>
                    <p className="xl:text-xl text-md font-[500]">
                      Total Revenue
                    </p>
                    <p className="text-sm font-[500] text-gray-600">
                      Client Payment
                    </p>
                    <p className="text-sm font-[500] text-emerald-600">+$126</p>
                  </div>
                </div>
              </div>
              <div className="col-span-6">
                <div className="border-[rgba(66,80,134,1)] border-2 rounded-lg p-3">
                  <div className=" text-center">
                    <p className="flex justify-center">
                      <BadgeDollarSign size={30} className="text-blue-500" />
                    </p>
                    <p className="xl:text-xl text-md font-[500]">Total Sales</p>
                    <p className="text-sm font-[500] text-gray-600">Refund</p>
                    <p className="text-sm font-[500] text-emerald-600">+$98</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="xl:col-span-4 sm:col-span-6 col-span-12 ">
          <div className="card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">
                Monthly Campaign State
              </h1>
              <p className="text-lg mt-1 font-[500] ms-5 text-gray-600">
                8.52k Social Visiters
              </p>
            </div>
            <div>
              <div className="mt-10">
                {campainState.map((state, index) => (
                  <div
                    className="flex  gap-2 ms-3 items-center mb-7 "
                    key={index}
                  >
                    <div className="p-2 rounded-full font-[700] flex items-center justify-center">
                      {state.icon}
                    </div>
                    <div>
                      <p className="[@media(min-width:479px)]:text-xl text-lg font-[500]">{state.name}</p>
                    </div>
                    <div className="ms-auto me-3 flex items-center gap-2">
                      <p className="[@media(min-width:479px)]:text-xl text-sm text-gray-600">{state.number}</p>
                      <ArrowUp className=" text-emerald-500" />
                      <p className="[@media(min-width:479px)]:text-xl text-lg font-[500] text-emerald-500">
                        {state.percentage}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className=" xl:col-span-4 sm:col-span-6 col-span-12">
          <div className=" card h-[600px]">
            <div>
              <h1 className="text-2xl font-[500] ms-5">Source Visits</h1>
              <p className="text-lg mt-1 font-[500] ms-5 text-gray-600">
                38.4k Visitors
              </p>
            </div>
            <div className="mt-10 h-[460px] overflow-y-scroll no-scrollbar ">
              {visitSource.map((state, index) => (
                <div className="flex gap-2 ms-3 items-center mb-7 " key={index}>
                  <div className="p-2 rounded-full font-[700] flex items-center justify-center">
                    {state.icon}
                  </div>
                  <div>
                    <p className="[@media(min-width:479px)]:text-xl text-lg font-[500]">{state.name}</p>
                    <p className=" text-sm text-gray-600 font-[500]">
                      {state.subname}
                    </p>
                  </div>
                  <div className="ms-auto me-3 flex items-center gap-2">
                    <p className="[@media(min-width:479px)]:text-lg text-sm text-gray-600">{state.number}</p>
                    <p className="[@media(min-width:479px)]:text-md text-sm font-[500] text-emerald-500 bg-emerald-100 rounded-2xl px-2">
                      {state.percentage}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=" xl:col-span-8 col-span-12">
          <div className=" card h-auto">
            <div className="p-2">
              {/* Search Bar */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-[500]">Project List</h2>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search Project"
                    className="pl-10 pr-4 py-2 border-1 rounded-lg"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                  <Search className="w-5 h-5 text-gray-500 absolute left-3 top-3" />
                </div>
              </div>

              {/* Table */}
              <div className="overflow-x-auto mt-5 ">
                <table className="w-[100%]">
                  <thead className=" z-10 top-0">
                    <tr className="bg-gray-100 uppercase text-lg border-b-2 border-gray-400">
                      <th className="py-2 px-4 text-left">Project</th>
                      <th className="py-2 px-4 text-left">Leader</th>
                      <th className="py-2 px-4 text-left">Team</th>
                      <th className="py-2 px-4 text-left">Progress</th>
                      <th className="py-2 px-4 text-left">Action</th>
                    </tr>
                  </thead>
                  <tbody className="z-0">
                    {displayedData.map((item) => (
                      <tr
                        key={item.id}
                        className="border-b-1 border-b-gray-400 hover:bg-gray-200  "
                      >
                        <td className="py-3 px-4 flex items-center gap-2">
                          <img src={item.icon} alt="" className="w-8  h-8" />
                          <div>
                            <p className="font-semibold">{item.project}</p>
                            <p className="text-xs font-[500] text-gray-500">
                              {item.date}
                            </p>
                          </div>
                        </td>
                        <td className="py-3 px-4">{item.leader}</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center -space-x-2">
                            {item.team.slice(0, 2).map((img, index) => (
                              <img
                                key={index}
                                src={img}
                                alt="team"
                                className="w-8 h-8 rounded-full border-2 border-white"
                              />
                            ))}
                            {item.team.length > 2 && (
                              <span className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full text-xs">
                                +{item.team.length - 2}
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-28 h-2 bg-gray-300 rounded-full relative">
                              <div
                                className="h-2 bg-blue-900 rounded-full"
                                style={{ width: `${item.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-sm">{item.progress}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 flex justify-center">
                          <EllipsisVerticalIcon className="w-7 h-7 text-gray-700 cursor-pointer" />
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
      </div>
    </>
  );
};

export default Analytics;

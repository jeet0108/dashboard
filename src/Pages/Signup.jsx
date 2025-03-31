import React, { useState } from "react";
import signupImg from "../assets/img/loginImg.png"; // Reusing loginImg; update if needed
import { Eye, EyeClosed } from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");

  

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 shadow-2xl hover:scale-x-97 transition-all rounded-lg p-8 w-[450px]">
        <div className="flex justify-center mb-4">
          <img src={signupImg} alt="signupimg" className="w-60 h-40 object-cover" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <p
          className="text-xl text-center mt-2 font-medium"
          style={{
            background: "linear-gradient(90deg, #CD54FF 0%, #4154FE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Create Your Account 👋
        </p>

        <form className="mt-6" >
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            required
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            placeholder="Mobile"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <div className="relative w-full">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>
          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-3xl hover:bg-indigo-700 transition disabled:bg-indigo-400"
          >
          Sign up
          </button>
        </form>
        <div className="text-end mt-2 text-black">
          Already have an account? <a href="/login" className="text-blue-500 font-semibold border-b-2">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
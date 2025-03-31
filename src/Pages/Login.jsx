import React, { useState } from "react";
import loginImg from "../assets/img/loginImg.png"; // Ensure this path is correct
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    console.log("Sending data:", { email, password }); // Debug: Check what’s being sent

    try {
      const response = await fetch("http://192.168.1.7/DBACCOUNT/dbaccounting-(quantity)/API/user_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("API Response:", data); // Debug: Check what’s returned

      if (data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        navigate("/analytics");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      setError(err.message || "Network error! Please check your connection and try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 shadow-2xl hover:scale-x-97 transition-all rounded-lg p-8 w-[450px]">
        <div className="flex justify-center mb-4">
          <img src={loginImg} alt="loginimg" className="w-60 h-40 object-cover" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Sign in</h2>
        {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        <p
          className="text-xl text-center mt-2 font-medium"
          style={{
            background: "linear-gradient(90deg, #CD54FF 0%, #4154FE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Welcome to Dashboard 👋
        </p>

        <form className="mt-6" onSubmit={handleLogin}>
          <input
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
            disabled={isLoading}
          />
          <div className="relative w-full">
            <input
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
              disabled={isLoading}
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
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className=" text-end mt-2 text-black">
          Don't have an account? <a href="/Signup" className=" text-blue-500 font-semibold border-b-2"> Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
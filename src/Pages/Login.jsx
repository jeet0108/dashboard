import React, { useState } from "react";
import loginImg from "../assets/img/loginImg.png";
import { useNavigate } from "react-router-dom";
import { Eye, EyeClosed } from "lucide-react";
import ReCAPTCHA from "react-google-recaptcha";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [generalError, setGeneralError] = useState("");
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    // Reset all errors and messages
    setEmailError("");
    setPasswordError("");
    setGeneralError("");
    setMessage("");
    setIsLoading(true);

    if (!captchaValue) {
      setGeneralError("Please complete the CAPTCHA");
      setIsLoading(false);
      return;
    }

    if (!email || !password) {
      if (!email) setEmailError("Email is required");
      if (!password) setPasswordError("Password is required");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/user_login_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (data.success) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("user", JSON.stringify(data.user));
        setMessage("Login Successful...");
        setEmail("");
        setPassword("");
        setCaptchaValue(null);
        setTimeout(() => {
          navigate("/analytics");
        }, 2000);
      } else {
        switch (data.message) {
          case "User not found, try another email":
            setEmailError(data.message);
            break;
          case "Invalid Password":
            setPasswordError(data.message);
            break;
          case "Account is not active":
            setGeneralError(data.message);
            break;
          case "Email and password are required":
            setEmailError("Email is required");
            setPasswordError("Password is required");
            break;
          case "Database error":
            setGeneralError("Server error, please try again later");
            break;
          default:
            setGeneralError(data.message || "Login failed");
        }
      }
    } catch (err) {
      setGeneralError("Network error! Please check your connection and try again.");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 shadow-2xl hover:scale-x-97 transition-all rounded-lg px-8 pb-8 pt-3 w-[450px]">
        <div className="flex justify-center mb-4 mt-2">
          <img src={loginImg} alt="loginimg" className="w-60 h-40 object-cover" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Sign in</h2>
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
          <div>
            <input
              // required
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-3 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
              disabled={isLoading}
            />
            {emailError && (
              <p className="text-red-500 text-sm font-semibold ms-3">{emailError}</p>
            )}
          </div>

          <div className="relative w-full mt-3">
            <input
              // required
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
              {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
            </span>
          
          </div>
          {passwordError && (
              <p className="text-red-500 text-sm font-semibold ms-3">{passwordError}</p>
            )}

          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
            />
          </div>

          {generalError && (
            <p className="text-red-500 text-center text-md font-semibold">{generalError}</p>
          )}

          {message && (
            <p className="text-center text-md font-semibold text-green-500 mt-2">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-3xl hover:bg-indigo-700 transition disabled:bg-indigo-400"
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
        <div className="text-end mt-2 text-black">
          Don't have an account? <a href="/Signup" className="text-blue-500 font-bold border-b-2 me-2 ms-1">Register</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
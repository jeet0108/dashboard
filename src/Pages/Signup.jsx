import React, { useState, useEffect } from "react";
import signupImg from "../assets/img/loginImg.png";
import { Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [seconds , setSeconds] = useState(10);

  const initialFormData = {
    User_Full_name: "",
    User_Email: "",
    User_Mobile_number: "",
    User_Password: "",
    User_Role: "1",
    User_Profile: "",
    Date_time: new Date().toISOString,
    Is_Active: 1
  };

  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  useEffect(() => {
    let interval;
    if (showSuccessModal && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [showSuccessModal, seconds]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    switch (name) {
      case "User_Full_name":
        if (/^[a-zA-Z\s]{4,}$/.test(value)) setNameMessage("");
        break;
      case "User_Email":
        if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) setEmailMessage("");
        break;
      case "User_Mobile_number":
        if (/^[6-9][0-9]{9}$/.test(value)) setContactMessage("");
        break;
      case "User_Password":
        if (/^(?=.*[0-9]).{8,}$/.test(value)) setPasswordMessage("");
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");
    setNameMessage("");
    setEmailMessage("");
    setPasswordMessage("");
    setContactMessage("");

    if (!captchaValue) {
      setMessage("Please complete the CAPTCHA");
      return;
    }

    if (!/^[a-zA-Z\s]{4,}$/.test(formData.User_Full_name)) {
      setNameMessage("Full name must be at least 4 characters long and contain only letters and spaces");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.User_Email)) {
      setEmailMessage("Please enter a valid email address");
      return;
    }

    if (!/^(?=.*[0-9]).{8,}$/.test(formData.User_Password)) {
      setPasswordMessage("Password must be at least 8 characters long and include at least 1 digit");
      return;
    }

    if (!/^[6-9][0-9]{9}$/.test(formData.User_Mobile_number)) {
      setContactMessage("Enter a valid Contact Format");
      return;
    }

    try {
      const response = await fetch("http://192.168.1.5/DBACCOUNT/dbaccounting-(quantity)/API/user_sign_up_api.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setMessage(data.message);

      if (data.success) {
        setFormData({
          ...initialFormData,
          Date_time: new Date().toISOString
        });
        setCaptchaValue(null);
        setShowSuccessModal(true);
        setSeconds(10);
        setTimeout(() => {
          setShowSuccessModal(false);
          navigate("/login");
        }, 10000);
      }
    } catch (error) {
      setMessage("Signup failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen relative">
      {/* Signup Form */}
      <div className="bg-gray-200 shadow-2xl hover:scale-x-97 transition-all rounded-lg px-8 pb-8 pt-3 w-[450px]">
        {/* ... (keep the existing form content) ... */}
        <div className="flex justify-center mb-4 mt-2">
          <img src={signupImg} alt="signupimg" className="w-50 h-30 object-cover" />
        </div>

        <h2 className="text-2xl font-semibold text-center">Sign Up</h2>
        <p className="text-xl text-center mt-2 font-medium" style={{
          background: "linear-gradient(90deg, #CD54FF 0%, #4154FE 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>
          Create Your Account 👋
        </p>

        <form className="mt-6" onSubmit={handleSubmit}>
          {/* ... (keep all input fields and their error messages) ... */}
          <input
            required
            type="text"
            name="User_Full_name"
            value={formData.User_Full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {nameMessage && (
            <p className="text-sm font-semibold text-red-500">{nameMessage}</p>
          )}

          <input
            required
            type="text"
            name="User_Email"
            value={formData.User_Email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mt-3 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {emailMessage && (
            <p className="text-sm font-semibold text-red-500">{emailMessage}</p>
          )}

          <input
            required
            type="tel"
            name="User_Mobile_number"
            value={formData.User_Mobile_number}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-3 mt-3 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          {contactMessage && (
            <p className="text-sm font-semibold text-red-500">{contactMessage}</p>
          )}

          <div className="relative w-full mt-3">
            <input
              required
              type={showPassword ? "text" : "password"}
              name="User_Password"
              value={formData.User_Password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 pr-10 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <span
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <Eye size={24} /> : <EyeClosed size={24} />}
            </span>
          </div>
          {passwordMessage && (
            <p className="text-sm font-semibold text-red-500">{passwordMessage}</p>
          )}

          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
              onChange={handleCaptchaChange}
            />
          </div>

          {message && (
            <p className={`text-center text-md font-semibold ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
              {message}
            </p>
          )}
          
          <button
            type="submit"
            className="w-full mt-2 bg-indigo-600 text-white py-3 rounded-3xl hover:bg-indigo-700 transition disabled:bg-indigo-400"
          >
            Sign Up
          </button>
        </form>
        <div className="text-end mt-2 text-black">
          Already have an account? <a href="/login" className="text-blue-500 font-semibold border-b-2">Login</a>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccessModal && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[400px] shadow-2xl animate-fade-in">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 p-3 rounded-full">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-800">User Created Successfully!</h3>
            <p className="text-center text-gray-600 mt-2">
              Please contact the administrator to activate your account.
            </p>
            <div className="mt-4 bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-semibold">Admin Contact:</span> <a href="" className=" text-blue-500 font-semibold underline">+91-8866560921</a>
              </p>
              <p className="text-sm text-gray-700 mt-1">
                <span className="font-semibold">Admin Email:</span> <a href="mailto:jeetsabhadiya@gmail.com" className=" text-blue-500 font-semibold underline">jeetsabhadiya@gmail.com</a>
              </p>
            </div>
            <p className="text-center text-sm text-gray-500 mt-4">
              Redirecting to login in {seconds} seconds...
            </p>
          </div>
        </div>
      )}
    </div>
  );
};



export default Signup;
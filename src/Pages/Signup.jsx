import React, { useState } from "react";
import signupImg from "../assets/img/loginImg.png";
import { Eye, EyeClosed } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const initialFormData = {
    User_Full_name: "",
    User_Email: "",
    User_Mobile_number: "",
    User_Password: "",
    User_Role: "user", 
    User_Profile: "",  
    Date_time: new Date().toISOString(), 
    Is_Active: 1       
  };
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null); 
  const navigate = useNavigate();

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value); 
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setMessage("Please complete the CAPTCHA");
      return;
    }

      const passwordRegex = /^(?=.*[0-9]).{8,}$/;
        if (!passwordRegex.test(formData.User_Password)) {
          setMessage("Password must be at least 8 characters long and include at least 1 digit");
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

      // Reset form fields on successful signup
      if (data.success) {
        setFormData({
          ...initialFormData,
          Date_time: new Date().toISOString() // Update timestamp for next submission
        });
        setMessage("Account created successfully! Redirecting to login...")
        setTimeout(() => {
          navigate("/login")
        }, 3000)
      }
    } catch (error) {
      setMessage("Signup failed. Please try again.");
      console.error("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="bg-gray-200 shadow-2xl hover:scale-x-97 transition-all rounded-lg px-8 pb-8 pt-3 w-[450px]">

      
      {message && (
          <p className={`text-center text-lg font-semibold ${message.includes("successfully") ? "text-green-500" : "text-red-500"}`}>
            {message}
          </p>
        )}

        <div className="flex justify-center mb-4 mt-2">
          <img src={signupImg} alt="signupimg" className="w-50 h-30 object-cover" />
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

        <form className="mt-6" onSubmit={handleSubmit}>
          <input
            required
            type="text"
            name="User_Full_name"
            value={formData.User_Full_name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            required
            type="email"
            name="User_Email"
            value={formData.User_Email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <input
            required
            type="tel"
            name="User_Mobile_number"
            value={formData.User_Mobile_number}
            onChange={handleChange}
            placeholder="Mobile"
            className="w-full p-3 mb-4 border border-gray-500 rounded-3xl focus:outline-none focus:ring-1 focus:ring-indigo-500"
          />
          <div className="relative w-full">
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
              {showPassword ? <Eye size={20} /> : <EyeClosed size={20} />}
            </span>
          </div>

          <div className="mt-4 flex justify-center">
            <ReCAPTCHA
              sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
              onChange={handleCaptchaChange}
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-indigo-600 text-white py-3 rounded-3xl hover:bg-indigo-700 transition disabled:bg-indigo-400"
          >
            Sign Up
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
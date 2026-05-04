import React, { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import api from "../../api/Api";

const Login_UI = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("login/", formData);

      // ✅ store token
      localStorage.setItem("token", res.data.access);

      // ✅ redirect to dashboard
      navigate("/dashboard");

    } catch (error) {
      console.error(error);
      alert("Invalid admin credentials");
    }
  };
  
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white w-[360px] p-8 rounded-lg shadow-lg border-2 border-[#3A82A4]">

        <h2 className="text-center text-xl font-semibold mb-1">
          Welcome Back
        </h2>

        <p className="text-center text-gray-500 text-sm mb-5">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-9">
          <div  className="flex flex-col gap-3">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2.5 mb-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#3A82A4]"
            />

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2.5 mb-3 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-[#3A82A4]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2.5 bg-[#3A82A4] text-white rounded-md hover:bg-[#2f6f8c] transition"
          >
            Sign in
          </button>
        </form>

      </div>
    </div>
  );
};

export default Login_UI;
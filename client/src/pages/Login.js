import React, { useState, useEffect } from "react";
import { Form, Input, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "../components/Spinner";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  
  //form submit
  const submitHandler = async (values) => {
    try {
      setLoading(true);
      const { data } = await axios.post("/users/login", values);
      setLoading(false);
      message.success("Login success");
      localStorage.setItem(
        "user",
        JSON.stringify({ ...data.user, password: "" })
      );
      navigate("/");
    } catch (error) {
      setLoading(false);
      message.error("Something went wrong");
    }
  };

  //prevent for login user
  useEffect(() => {
    if (localStorage.getItem("user")) {
      navigate("/");
    }
  }, [navigate]);
  
  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-slate-100">
        {loading && <Spinner />}
        <div className="w-full max-w-md p-8 space-y-8 bg-slate-300 rounded-lg shadow-xl">
          <Form layout="vertical" onFinish={submitHandler} className="space-y-6">
            <h1 className="text-3xl font-bold text-center text-black">Login</h1>
            
            <Form.Item 
              label={<span className="text-gray-900">Email</span>} 
              name="email"
              rules={[{ required: true, message: 'Please input your email!' }]}
            >
              <Input type="email" className="w-full" />
            </Form.Item>
            
            <Form.Item 
              label={<span className="text-gray-900">Password</span>} 
              name="password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input type="password" className="w-full" />
            </Form.Item>
            
            <div className="flex items-center justify-between">
              <Link to="/register" className="text-blue-400 hover:text-blue-300 transition-colors">
                Not a user? Click here to register
              </Link>
              <button 
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors"
                type="submit"
              >
                Login
              </button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Login;
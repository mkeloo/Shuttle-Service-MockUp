import React, { useState } from 'react';
import { AiFillLock, AiOutlineMail } from 'react-icons/ai';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';

const Signin = () => {
  const { signIn } = UserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(error);
    setError('');
    try {
      await signIn(email, password);
      navigate('/account');
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="h-[100vh] w-full bg-2 flex items-center justify-center">
      <div className="w-[450px] mx-auto h-[500px] px-6 py-20 bg-blue-200 rounded-2xl ">
        <h1 className="text-3xl font-bold flex items-center justify-center">
          Sign In
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border-input rounded-2xl bg-pink-100"
                type="email"
                placeholder="Email"
              />
              <AiOutlineMail
                className="absolute right-2 top-3 text-gray-600"
                size={22}
              />
            </div>
          </div>
          <div className="my-4">
            <label>Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                autoComplete="on"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 bg-pink-100 border-input rounded-2xl"
                type="password"
                placeholder="Password"
              />
              <AiFillLock
                className="absolute right-2 top-3 text-gray-600"
                size={22}
              />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-btnText rounded-2xl shadow-xl bg-blue-500 text-white font-bold hover:scale-105 duration-300">
            Sign in
          </button>
        </form>
        <p className="my-4">
          Don't have an account?{' '}
          <Link to="/signup" className=" text-blue-600 underline font-bold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

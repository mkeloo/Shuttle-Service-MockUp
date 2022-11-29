import React from 'react';
import logo from '../assets/photo.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="bg h-[100vh] flex items-center justify-center ">
      <div className="absolute z-10 w-[500px] h-[500px] bg-blue-500 m-6 rounded-2xl shadow-xl">
        <h1 className="text-4xl font-bold flex items-center justify-center p-5 text-white mt-6">
          Night Shuttle Service
        </h1>
        {/* logo Image here */}
        <img
          className="w-[200px] h-[200px] rounded-full mx-auto"
          src={logo}
          alt="logo"
        />

        {/* Sign in and Sign Up button */}
        <div className="flex flex-col items-center justify-center">
          <Link
            to="/signin"
            className="w-[50%] my-2 p-3 rounded-2xl shadow-xl bg-orange-600 text-white font-bold hover:scale-105 duration-300"
          >
            <button>Sign In</button>
          </Link>
          <Link
            to="/signin"
            className="w-[50%] my-2 p-3 rounded-2xl shadow-xl bg-orange-600 text-white font-bold hover:scale-105 duration-300"
          >
            <button>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

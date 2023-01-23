import React from "react";
import { Link } from "react-router-dom";
import meNav from "../../assets/images/me.jpg";

import todoSvg from "../../assets/svg/todo.svg";
import favoriteSvg from "../../assets/svg/favorite.svg";
import pendingSvg from "../../assets/svg/pending.svg";
import completedSvg from "../../assets/svg/completed.svg";

const Nav = () => {
  return (
    <>
      {/* 
      className="flex items-center justify-between flex-wrap bg-teal-500 p-6" 
      ---------------
      p-6 items-center justify-center
      */}
      <nav className="max-h-full container w-64 px-4 bg-white rounded-tl-lg rounded-bl-lg mt-3 mb-3 ml-3 p-2 pb-6">
        <Link className="text-4xl flex" to="">
          <img
            src={meNav}
            alt="Nav"
            className="object-scale-down h-20 w-35 pr-2 rounded-full"
          />
          <div>
            <h3>MERN Todo</h3>
            <p className="text-base text text-violet-400">
              Abdulhakeem Muhammed
            </p>
          </div>
        </Link>
        <br />
        <hr className="border-2 border-violet-300 w-38 mx-5 mb-3" />

        <div>
          <div className="h-8 flex items-center relative mb-12 ">
            <Link
              className="w-32 mx-auto bg-blue-600 hover:bg-blue-700 flex items-center justify-center text-gray-100 py-2 rounded space-x-2 transition duration-150 absolute top-0 right-0 "
              to="/create"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                ></path>
              </svg>
              <span>Create</span>
            </Link>
          </div>
          <div px-2 pt-4 pb-8 border-r border-gray-300>
            <ul className="space-y-2 ">
              {/* link property on selected:
                bg-gray-500 bg-opacity-30 text-blue-600 flex items-center justify-between py-1.5 px-4 rounded cursor-pointer
              */}
              <li>
                <Link
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
                  to="/create"
                >
                  <span class="flex items-center space-x-2">
                    <img
                      src={todoSvg}
                      className="object-scale-down h-5 w-7"
                      alt="All Tasks"
                    />
                    <span>All</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
                  to="/create"
                >
                  <span class="flex items-center space-x-2">
                    <img
                      src={favoriteSvg}
                      className="object-scale-down h-5 w-7"
                      alt="Favorite Tasks"
                    />
                    <span>Favorites</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
                  to="/create"
                >
                  <span class="flex items-center space-x-2">
                    <img
                      src={pendingSvg}
                      className="object-scale-down h-7 w-7"
                      alt="Pending Tasks"
                    />
                    <span>Pending</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="hover:bg-gray-500 hover:bg-opacity-10 hover:text-blue-600 flex items-center text-gray-700  flex items-center justify-between py-1.5 px-4 rounded cursor-pointer"
                  to="/create"
                >
                  <span class="flex items-center space-x-2">
                    <img
                      src={completedSvg}
                      className="object-scale-down h-5 w-7"
                      alt="Completed Tasks"
                    />
                    <span>Completed</span>
                  </span>
                  <span class="bg-sky-500 text-gray-100 font-bold px-2 py-0.5 text-xs rounded-lg">
                    3
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;

import React from "react";

const Navbar = () => {
  return (
    <div className="px-5 md:px-10 py-5 bg-white text-black shadow-sm flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <div className="dropdown lg:hidden">
          <label tabIndex={0} className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box"
          >
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">FAQ</a>
            </li>
            <li>
              <a href="#">Changelog</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">Download</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>

        <a className="text-xl font-semibold">CS — Ticket System</a>
      </div>

      <div className="hidden lg:flex items-center space-x-4">
        <ul className="menu menu-horizontal space-x-2">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Changelog</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Download</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="btn btnColor border-none">+ New Ticket</button>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-5 md:px-10 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-3">CS — Ticket System</h3>
          <p className="text-gray-400 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>About Us</li>
            <li>Our Mission</li>
            <li>Contact Saled</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Services</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Products & Services</li>
            <li>Customer Stories</li>
            <li>Download Apps</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Policies</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Join Us</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Social Links</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li>
              <i className="fa-brands fa-x-twitter mr-2"></i>@CS — Ticket System
            </li>
            <li>
              <i className="fa-brands fa-linkedin mr-2"></i>@CS — Ticket System
            </li>
            <li>
              <i className="fa-brands fa-facebook mr-2"></i>@CS — Ticket System
            </li>
            <li>
              <i className="fa-solid fa-envelope mr-2"></i>support@cst.com
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-5 text-center text-gray-500 text-sm">
        © 2025 CS — Ticket System. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

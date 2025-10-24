import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import logo from '../assets/logoFooter.png'
import { FiSend } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto bg-[#263238] text-gray-300 py-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Left Section */}
        <div className="md:px-6">
          <div className="flex items-center mb-4">
            <img className="h-5 w-28" src={logo} alt="" />
          </div>
          <p className="text-sm mb-4 md:mb-8">
            Copyright © 2020 Landify UI Kit.
            <br /> All rights reserved
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaDribbble /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </div>
        </div>

        {/* Company */}
        <div className="md:ml-32">
          <h3 className="text-white font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">About us</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact us</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Testimonials</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Help center</a></li>
            <li><a href="#">Terms of service</a></li>
            <li><a href="#">Legal</a></li>
            <li><a href="#">Privacy policy</a></li>
            <li><a href="#">Status</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-semibold mb-4">Stay up to date</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full bg-gray-700 text-sm text-gray-200 py-2 px-3 pr-10 rounded-md focus:outline-none "
            />
          <FiSend className="absolute right-3 top-3 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
}

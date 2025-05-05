"use client";
import Image from "next/image";
import Link from "next/link";
import appStore from "@/assets/Download App_.png";
import visa from "@/assets/visa.png";
import paypal from "@/assets/paypal.png";
import applepay from "@/assets/applepay.png";
import logo from "@/assets/logo.png";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafa] py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo & Apps */}
        <div>
          <Image src={logo} alt="Fresh Harvests" className="w-40 mb-4" />
          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold mb-1">Download App:</p>
            <Image src={appStore} alt="App Store" className="w-28" />
          </div>
        </div>

        {/* Quick Links 1 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Quick links 1</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/blog/detail">Detail Blog</Link>
            </li>
          </ul>
        </div>

        {/* Quick Links 2 */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Quick links 2</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>
              <Link href="/favorites">Favorites</Link>
            </li>
            <li>
              <Link href="/cart">Cart</Link>
            </li>
            <li>
              <Link href="/signin">Sign in</Link>
            </li>
            <li>
              <Link href="/register">Register</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Contact us</h4>
          <ul className="space-y-2 text-sm text-gray-600">
            <li>📞 1234 5678 90</li>
            <li>📧 Freshharvests@gmail.com</li>
            <li>📍 Tanjung Sari Street, Pontianak, Indonesia</li>
          </ul>

          <div className="mt-6">
            <p className="font-semibold text-sm mb-2">
              Accepted Payment Methods:
            </p>
            {/* <div className="flex items-center gap-3">
              <Image src={visa} alt="Visa" className="w-12" />
              <Image src={paypal} alt="Paypal" className="w-12" />
              <Image src={applepay} alt="Apple Pay" className="w-12" />
            </div> */}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>© Copyright 2024. All Rights Reserved by Banana Studio</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-gray-700 text-lg">
          <a href="#">
            <FaTwitter />
          </a>
          <a href="#">
            <FaFacebook />
          </a>
          <a href="#">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

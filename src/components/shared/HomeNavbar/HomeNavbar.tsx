"use client";

import { useState } from "react";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import Container from "../Container/Container";

const HomeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <Container>
        <nav className="flex items-center justify-between py-6">
          {/* Logo */}
          <div className="w-48">
            <Image src={logo} alt="Logo" className="w-full" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-16 text-gray-600">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Shop</Link>
            </li>
            <li>
              <Link href="#">About Us</Link>
            </li>
            <li>
              <Link href="#">Blog</Link>
            </li>
          </ul>

          {/* Icons + Sign In */}
          <div className="hidden lg:flex items-center gap-5 text-white">
            <Link href="#" className="flex items-center gap-2 font-light">
              <FaHeart size={20} /> Favorite
            </Link>
            <Link
              href="#"
              className="flex items-center gap-2 font-light relative"
            >
              <div className="relative">
                <FaShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
              Cart
            </Link>
            <button className="border border-white px-4 py-2 rounded font-semibold">
              Sign in
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="lg:hidden text-white flex items-center gap-3"
            onClick={() => setIsOpen(true)}
          >
            <Link
              href="#"
              className="flex items-center gap-2 font-light relative"
            >
              <div className="relative">
                <FaShoppingCart size={20} />
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
                  3
                </span>
              </div>
            </Link>
            <MdMenu size={24} />
          </button>
        </nav>
      </Container>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#749B3F] text-white p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Close button */}
        <div className="flex items-center justify-between mb-6">
          <h4>Fresh Harvests</h4>
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>

        {/* Nav Links */}
        <ul className="space-y-4 font-light">
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="#" onClick={() => setIsOpen(false)}>
              Favorite
            </Link>
          </li>
          <button>Sign In</button>
        </ul>
      </div>
    </div>
  );
};

export default HomeNavbar;

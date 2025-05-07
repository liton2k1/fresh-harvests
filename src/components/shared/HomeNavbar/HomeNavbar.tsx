"use client";

import { useState } from "react";
import logo from "../../../../src/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { MdClose, MdMenu } from "react-icons/md";
import Container from "../Container/Container";
import RegisterModal from "@/components/RegisterModal/RegisterModal";
import LoginModal from "@/components/LoginModal/LoginModal";

const HomeNavbar = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="absolute top-0 left-0 w-full z-10">
      <Container>
        <div className="flex items-center justify-between py-6">
          <Link href="/">
            <div className="w-48">
              <Image src={logo} alt="Logo" className="w-full" />
            </div>
          </Link>

          <ul className="hidden lg:flex gap-16 text-gray-600">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/shop">Shop</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
          </ul>

          <div className="hidden lg:flex items-center gap-5 text-white">
            <Link
              href="/favorite"
              className="flex items-center gap-2 font-light"
            >
              <FaHeart size={20} /> Favorite
            </Link>
            <Link
              href="/cart"
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
            <button
              onClick={() => setModalType("login")}
              className="border border-white px-4 py-2 rounded font-semibold"
            >
              Sign in
            </button>
          </div>

          <button
            className="lg:hidden text-white flex items-center gap-3"
            onClick={() => setIsOpen(true)}
          >
            <Link
              href="/cart"
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
        </div>
      </Container>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 left-0 w-64 h-full bg-[#749B3F] text-white p-6 z-50 transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <h4>Fresh Harvests</h4>
          <button onClick={() => setIsOpen(false)}>
            <MdClose size={24} />
          </button>
        </div>

        <ul className="space-y-4 font-light">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/shop" onClick={() => setIsOpen(false)}>
              Shop
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About Us
            </Link>
          </li>
          <li>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
          </li>
          <li>
            <Link href="/favorite" onClick={() => setIsOpen(false)}>
              Favorite
            </Link>
          </li>
          <button onClick={() => setModalType("login")}>Sign In</button>
        </ul>
      </div>

      {modalType === "register" && (
        <RegisterModal
          onClose={() => setModalType(null)}
          onSwitch={() => setModalType("login")}
        />
      )}
      {modalType === "login" && (
        <LoginModal
          onClose={() => setModalType(null)}
          onSwitch={() => setModalType("register")}
        />
      )}
    </div>
  );
};

export default HomeNavbar;

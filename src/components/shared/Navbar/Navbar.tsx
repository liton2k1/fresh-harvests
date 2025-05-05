"use client";

import { useState } from "react";
import Container from "../Container/Container";
import logo from "@/assets/Logo.png";
import Image from "next/image";
import "./Navbar.css";
import Link from "next/link";
import { MdClose, MdMenu } from "react-icons/md";
import { FaCartShopping, FaHeart } from "react-icons/fa6";
import RegisterModal from "@/components/RegisterModal/RegisterModal";
import LoginModal from "@/components/LoginModal/LoginModal";

const Navbar = () => {
  const [modalType, setModalType] = useState<"login" | "register" | null>(null);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);

  return (
    <>
      <div className="lg:py-5 py-2 absolute top-0 left-1/2 transform -translate-x-1/2 z-20 w-full">
        <Container>
          <div className="flex justify-between items-center">
            <div>
              <Link href="#home">
                <Image src={logo} alt="logo" className="w-40" />
              </Link>
            </div>
            <ul
              className={`lg:flex justify-between gap-5 nav-items ${
                open ? "block" : "hidden"
              }`}
            >
              <li>
                <Link
                  href="#home"
                  className="block px-4 py-2 lg:p-0 text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block px-4 py-2 lg:p-0 text-white"
                >
                  Shope
                </Link>
              </li>
              <li>
                <Link
                  href="#why-choose-us"
                  className="block px-4 py-2 lg:p-0 text-white"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="#work-process"
                  className="block px-4 py-2 lg:p-0 text-white"
                >
                  Blog
                </Link>
              </li>
            </ul>

            <div>
              <div className="hidden lg:block">
                <div className="flex items-center gap-5">
                  <Link
                    href="/favorite"
                    className="flex items-center gap-2 text-white"
                  >
                    <FaHeart /> Favorite
                  </Link>
                  <Link
                    href="/cart"
                    className="relative flex items-center gap-2 text-white"
                  >
                    <FaCartShopping />
                    <span className="absolute -top-2 right-7 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                      3
                    </span>
                    <span className="hidden lg:inline">Cart</span>
                  </Link>

                  <button
                    className="border px-6 p-2 rounded cursor-pointer text-white"
                    onClick={() => setModalType("login")}
                  >
                    Sign in
                  </button>
                </div>
              </div>
              <div className="flex gap-5">
                <Link
                  href="/cart"
                  className="relative lg:hidden flex items-center gap-2 text-white"
                >
                  <FaCartShopping />
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                    3
                  </span>
                </Link>

                <div onClick={handleOpen} className="lg:hidden cursor-pointer">
                  {open ? (
                    <MdClose size={24} color="white" />
                  ) : (
                    <MdMenu size={24} color="white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Modals */}
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
    </>
  );
};

export default Navbar;

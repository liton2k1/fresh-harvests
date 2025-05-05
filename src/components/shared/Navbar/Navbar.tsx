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
                <Link href="#home">Home</Link>
              </li>
              <li>
                <Link href="#services">Shop</Link>
              </li>
              <li>
                <Link href="#why-choose-us">About Us</Link>
              </li>
              <li>
                <Link href="#work-process">Blog</Link>
              </li>
            </ul>
            <div>
              <div className="hidden lg:block">
                <ul className="flex items-center gap-5">
                  <li className="flex items-center gap-2">
                    <FaHeart /> Favorite
                  </li>
                  <li className="flex items-center gap-2">
                    <FaCartShopping /> Cart
                  </li>
                  <li
                    className="border px-6 p-2 rounded cursor-pointer"
                    onClick={() => setModalType("login")}
                  >
                    Sign in
                  </li>
                </ul>
              </div>
              <div className="flex gap-2">
                <li className="lg:hidden flex items-center gap-2">
                  <FaCartShopping />
                </li>
                <div onClick={handleOpen} className="lg:hidden cursor-pointer">
                  {open ? <MdClose size={24} /> : <MdMenu size={24} />}
                </div>
              </div>
            </div>
          </div>
        </Container>
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
    </>
  );
};

export default Navbar;

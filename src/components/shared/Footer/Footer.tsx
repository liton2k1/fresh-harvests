"use client";
import Image from "next/image";
import Link from "next/link";
import appStore from "@/assets/app.png";
import visa from "@/assets/visa.png";
import paypal from "@/assets/paypal.png";
import applepay from "@/assets/applepay.png";
import logo from "@/assets/logo.png";
import call from "@/assets/call.png";
import mail from "@/assets/mail.png";
import location from "@/assets/location.png";
import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";
import Container from "../Container/Container";

const Footer = () => {
  return (
    <footer className="bg-[#f8fafa] py-12 mt-20">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col justify-between h-full">
            <div>
              <Image src={logo} alt="Fresh Harvests" className="w-44 mb-4" />
            </div>
            <div className="hidden md:block">
              <div className="flex flex-col gap-2 mt-auto">
                <p className="text-sm font-semibold">Download App:</p>
                <Image src={appStore} alt="App Store" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick links 1</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="#">Shop</Link>
              </li>
              <li>
                <Link href="#">About us</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
              <li>
                <Link href="#">Detail Blog</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Quick links 2</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link href="#">Favorites</Link>
              </li>
              <li>
                <Link href="#">Cart</Link>
              </li>
              <li>
                <Link href="#">Sign in</Link>
              </li>
              <li>
                <Link href="#">Register</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact us</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <Image src={call} alt="" /> 1234 5678 90
              </li>
              <li className="flex items-center gap-2">
                <Image src={mail} alt="" /> Freshharvests@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Image src={location} alt="" /> Tanjung Sari Street, Pontianak,
                Indonesia
              </li>
            </ul>

            <div className="mt-6">
              <p className="font-semibold text-sm mb-2">
                Accepted Payment Methods:
              </p>
              <div className="flex items-center gap-3">
                <Image src={visa} alt="Visa" className="w-16" />
                <Image src={paypal} alt="Paypal" className="w-16" />
                <Image src={applepay} alt="Apple Pay" className="w-16" />
              </div>
              <div className="block md:hidden mt-6">
                <div className="flex flex-col gap-2 mt-auto">
                  <p className="text-sm font-semibold">Download App:</p>
                  <Image src={appStore} alt="App Store" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-800 md:text-sm text-[10px] font-semibold">
            © Copyright 2024. All Rights Reserved by Banana Studio
          </p>
          <div className="flex gap-4 mt-4 md:mt-0 text-gray-700 text-lg">
            <Link href="#" className="bg-black rounded-full p-2">
              <FaTwitter color="white" />
            </Link>
            <Link href="#" className="bg-black rounded-full p-2">
              <FaFacebookF color="white" />
            </Link>
            <Link href="#" className="bg-black rounded-full p-2">
              <FaInstagram color="white" />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

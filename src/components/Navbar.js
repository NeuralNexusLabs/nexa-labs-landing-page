import React from "react";
import { poppins } from "../utils/font";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import Link from "next/link";

export default function Navbar() {
  return (
    <div
      className={`w-full ${poppins.className} flex justify-between rounded-t-md items-center bg-black text-white `}
    >
      <ul className="flex items-center text-lg overflow-hidden">
        <Link href="/">
          <div className="flex rounded-tl-md items-center justify-center w-32 py-8 h-12 hover:bg-white hover:text-black transition-all ease-in-out duration-300">
            Home
          </div>
        </Link>
        <Link href={"/contact"}>
          <div className="flex items-center justify-center w-32 py-8 h-12 hover:bg-white hover:text-black transition-all ease-in-out duration-300">
            Contact
          </div>
        </Link>
        <div className="flex items-center justify-center w-32 py-8 h-12 hover:bg-white hover:text-black transition-all ease-in-out duration-300">
          About
        </div>
      </ul>
      <ul className="hidden lg:flex items-center gap-10 mr-4">
        <BsFacebook className="text-white text-xl hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer" />
        <BsInstagram className="text-white text-xl hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer" />
        <BsLinkedin className="text-white text-xl hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer" />
        <BsTwitter className="text-white text-xl hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer" />
        <BsGithub className="text-white text-xl hover:text-blue-500 transition-all duration-300 ease-in-out cursor-pointer" />
      </ul>
    </div>
  );
}

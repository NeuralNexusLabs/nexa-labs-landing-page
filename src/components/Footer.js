import React from "react";
import {
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div className="max-w-6xl mx-auto h-auto bg-white text-black gradient2">
      <div className="py-10 lg:py-20 flex justify-center gap-5 lg:gap-10">
        <div className="text-xl lg:text-2xl border border-white p-4 rounded-full lg:hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsFacebook className="" />
        </div>
        <div className="text-xl lg:text-2xl border border-white p-4 rounded-full lg:hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsInstagram className="" />
        </div>
        <div className="text-xl lg:text-2xl border border-white p-4 rounded-full lg:hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsGithub className="" />
        </div>
        <div className="text-xl lg:text-2xl border border-white p-4 rounded-full lg:hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsLinkedin className="" />
        </div>
        <div className="text-xl lg:text-2xl border border-white p-4 rounded-full lg:hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsTwitter className="" />
        </div>

        {/* <BsLinkedin className="text-white text-2xl" />
        <BsGithub className="text-white text-2xl" />
        <BsInstagram className="text-white text-2xl" />
        <BsTwitter className="text-white text-2xl" /> */}
      </div>
    </div>
  );
}

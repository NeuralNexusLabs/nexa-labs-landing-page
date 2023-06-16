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
      <div className="py-20 flex justify-center gap-10">
        <div className="border border-white p-3 rounded-full hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsFacebook className="text-2xl" />
        </div>
        <div className="border border-white p-3 rounded-full hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsInstagram className="text-2xl" />
        </div>
        <div className="border border-white p-3 rounded-full hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsGithub className="text-2xl" />
        </div>
        <div className="border border-white p-3 rounded-full hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsLinkedin className="text-2xl" />
        </div>
        <div className="border border-white p-3 rounded-full hover:border-blue-500 text-white hover:text-blue-500 transition-all ease-in-out duration-300 cursor-pointer">
          <BsTwitter className="text-2xl" />
        </div>

        {/* <BsLinkedin className="text-white text-2xl" />
        <BsGithub className="text-white text-2xl" />
        <BsInstagram className="text-white text-2xl" />
        <BsTwitter className="text-white text-2xl" /> */}
      </div>
    </div>
  );
}

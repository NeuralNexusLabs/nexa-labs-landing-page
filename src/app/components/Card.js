import React from "react";
import { outfit, poppins } from "../utils/font";

export default function Card() {
  return (
    <div
      className={`${outfit.className} bg-[#041220] max-w-xl mx-auto h-auto mt-[5%] rounded-md shadow-lg shadow-black pb-14`}
    >
      <div
        className={`text-center px-10 pt-10 flex justify-center text-white text-4xl`}
      >
        Premium AI and technology services ,Thanks to AI & latest algorithm
        builds
      </div>
      <div className="flex justify-center flex-col my-5 text-3xl font-semibold text-white">
        <p className="gradient">2x Faster</p>
        <p className="gradient">50% Cheaper</p>
        <p className="gradient">2x Efficient</p>
      </div>
      <div className="border border-white mx-6 text-start ">
        <div className="text-white text-3xl px-5 pt-5">Case Studies</div>
        <p
          className={`${poppins.className} text-slate-400 text-sm p-5 font-extralight`}
        >
          Our team at Neural Nexus has years of experience shaping the future of
          both emerging startups and established companies through intelligent
          design and AI innovation. Every project we undertake is approached
          with the same level of excellence and commitment, always.
        </p>
      </div>
    </div>
  );
}

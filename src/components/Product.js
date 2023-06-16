import React from "react";
import { outfit } from "../utils/font";
import { Appservices, Webservices } from "../constants";

export default function Product() {
  return (
    <div
      className={`flex justify-around mt-20 mb-0 ${outfit.className} border-t-2 border-gray-200`}
      id="contact"
    >
      <div className="flex flex-col justify-center mt-3 mb-10">
        <h1 className="text-start text-3xl font-light border-b-2 border-gray-200 pb-2">
          Website Design <br /> & Dev
        </h1>
        {Webservices.map((item, index) => (
          <p key={index} className="text-start leading-loose">
            {item}
          </p>
        ))}
      </div>
      <div className="border-r-2 border-gray-200"></div>
      <div className="flex flex-col justify-center mt-3 mb-10">
        <h1 className="text-start text-3xl font-light border-b-2 border-gray-200 pb-2">
          App Design <br /> & Dev
        </h1>
        {Appservices.map((item, index) => (
          <p key={index} className="text-start leading-loose">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}

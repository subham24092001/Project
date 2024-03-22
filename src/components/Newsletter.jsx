import React from "react";
import { Object } from "../assets";

const Newsletter = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center lg:items-center w-full px-16 gap-10 lg:px-56 lg:bg-blue-50 lg:py-10">
      <div className="flex flex-col items-center justify-center w-full gap-2 lg:w-1/2 lg:items-start lg:gap-8">
        <p className="hidden lg:block text-blue-500 text-2xl font-bold">NEWSLETTER</p>
        <h1 className="font-jost text-xl font-medium text-center lg:text-start lg:text-5xl lg:font-semibold lg:text-blue-900 lg:leading-tight">
          Security First News Letter by QuillAudits
        </h1>
        <p className="hidden lg:block text-gray-800 pr-24">Subscribe for the most Exclusive Weekly security based newsletter and covering all the recent hacks up to date.</p>
        <div className="bg-blue-500 w-24 h-0.5 flex items-center justify-center lg:hidden"></div>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 lg:w-1/2">
        <img src={Object} alt="" className="w-96 lg:w-full" />
        <p className="text-center mx-5 mt-5 lg:hidden">
          DeFi & NFT Hacks, CTFs, and Blockchain Security Insights straight to your Inbox. Explore our weekly newsletter: <span>HashingBits</span>. Stay updated on everything we’re
          publishing. Stand a step ahead.
        </p>

        <div className="lg:relative flex flex-col items-center gap-7 w-full mt-8 lg:flex-row">
          <input type="text" placeholder="vitalik@ethereum.org" className="border-2 border-gray-500 rounded-md p-4 w-full" />
          <div className="lg:absolute lg:right-3 font-medium custom-button whitespace-nowrap w-fit">Subscribe</div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;

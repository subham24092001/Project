import React, { useState } from "react";
import { hero, BlackCD } from "../assets";
import { Navbar } from "./index";

const Heroo = () => {
  return (
    <div className="bg-hero pb-3 font-jost">
      <Navbar />

      <div className="text-white px-5 lg:hidden">
        <p>Case Studies</p>
        <div className="w-20 h-1 bg-blue-500 mt-1"></div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center lg:items-center lg:mx-52">
        <div className="flex flex-col items-center pt-5 justify-center lg:w-1/2">
          <div className="w-full lg:w-fit flex justify-center relative">
            <img src={hero} alt="Hero" className="w-full lg:w-[555px] lg:h-[400px] flex bg-cover bg-center bg-no-repeat" />

            <p className="hidden absolute w-[300px] bottom-3 left-10 lg:block text-white font-normal text-sm font-poppins">
              Carpe Diem Pension, a blockchain-based retirement fund, offers permanent payouts through CDP deposits, with a 4.32% annual inflation claimable by depositors.
            </p>

            <div className="absolute w-full flex justify-end items-center -left-10 -bottom-5 lg:left-auto lg:-right-20 lg:-top-72">
              <img src={BlackCD} alt="" className="bg-white bg-cover bg-no-repeat lg:w-40 p-1 rounded-sm lg:rounded-lg" />
            </div>
          </div>
        </div>

        <div className="text-white px-10 lg:w-1/2 lg:mt-32">
          <h1 className="text-4xl font-medium pt-10 lg:pt-0">Securing Trust : Boosting Security and Strengthening Trust at Carpe Diem Pension</h1>
          <h3 className="text-xl font-normal pt-10 font-poppins">
            QuillAudits enhances Carpe Diem Pension by addressing 33 vulnerabilities on the Pulse blockchain, boosting security and user trust in digital pensions.
          </h3>
        </div>
      </div>

      <p className="text-xs font-medium pt-20 text-white px-10 lg:px-0 lg:mx-52">
        QuillAudits --&gt; Resources --&gt; Case Studies <span className="lg:hidden">-&gt; kucoin</span>
      </p>
    </div>
  );
};

export default Heroo;

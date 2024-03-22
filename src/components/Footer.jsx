import React from "react";
import { ImageFourth, ImageThird, Logo } from "../assets";
import { IoMdMail } from "react-icons/io";
import { FaDiscord, FaLinkedin, FaLocationArrow, FaPaperPlane, FaReddit, FaRedditAlien, FaYoutube } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const combinedData = {
    "Audit Services": [
      "Ethereum Audit",
      "Polygon Audit",
      "BSC Audit",
      "Solana Audit",
      "NEAR Audit",
      "Algorand Audit",
      "Tezos Audit",
      "Hyperledger Fabric Audit",
      "L1 Audit",
      "Polkadot Audit",
      "Wallet Audit",
      "ZkSync Audit",
      "Starknet Audit",
    ],
    "Quill Ecosystem": ["QuillAI", "QuillCheck", "QuillShield", "QuillAcademy", "QuillMonitor", "Web3Suggest", "Explore All Tools"],
    "Other Services": [
      "Red Teaming",
      "dApp Pentesting",
      "DeFi Diligence",
      "NFT Due Diligence",
      "Rug Pull Due Diligence",
      "Security Consultation",
      "Blockchain Forensics",
      "KYC (Know Your Customer)",
    ],
    "Quick Links": ["Pricing", "Audit Process", "Our Audits", "Testimonials", "Security Synopsis", "Blog", "Clients", "Careers"],
    "More About Quill": ["About Us", "FAQs", "Blockchains We Audit"],
  };

  const buttonTexts = ["WAGSI Grants", "Ambassador Program", "Refer-Earn-Secure", "Partnership Program"];

  return (
    <div className="bg-hero text-white px-10 py-10 mt-20 lg:mt-0 lg:px-36 flex flex-col gap-10 lg:gap-5">
      <div className="flex flex-col w-fit mb-10 pl-10 lg:pl-0">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo" className="w-16" />
          <p className="text-white text-4xl">QuillAudits</p>
        </div>
        <p className="items-end text-xs text-end">Making Web3 a safer place</p>
      </div>

      <div className="flex flex-col gap-16 lg:flex-col-reverse">
        <div className="flex flex-col gap-5">
          <div className="hidden lg:flex flex-col w-fit gap-1">
            <p>Our Programmes</p>
            <div className="w-full h-1 bg-blue-500 rounded-sm"></div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:w-8/12">
            {buttonTexts.map((text, index) => (
              <button key={index} className="custom-button">
                {text}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="grid grid-cols-2 lg:grid-cols-5 font-jost gap-10">
            {Object.entries(combinedData).map(([key, value]) => (
              <div key={key} className="flex flex-col gap-4">
                <div className="w-fit flex flex-col gap-1">
                  <h1 className="font-medium">{key}</h1>
                  <div className="border-2 w-full border-blue-600"></div>
                </div>

                <div className="flex flex-col text-sm gap-3">
                  {value.map((item, index) => (
                    <p key={index} className="cursor-pointer flex gap-3 items-center">
                      {item}
                      {item === "Careers" && <div className="bg-blue-500 px-2 py-0.5 rounded-md">Hiring</div>}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-2 mt-10">
            <p>Contact Us:</p>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-3">
                <IoMdMail className="text-xl" />
                <a href="#" className="underline">
                  audits@quillhash.com
                </a>
              </p>
              <p className="flex items-center gap-3">
                <FaPaperPlane className="text-xl" />
                <a href="#" className="underline">
                  t.me/quillaudits
                </a>
              </p>
            </div>
            <div className="mt-5 flex flex-col gap-5 mr-10">
              <p className="flex items-center gap-2">
                <FaLocationDot className="text-xl" />
                Our Location:
              </p>
              <p>Office 104/105 Level 1, Emaar Square, Building 4 Sheikh Mohammed Bin Rashid Boulevard Downtown Dubai, United Arab Emirates P.O box : 416654</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 lg:flex-row lg:justify-between lg:mt-10">
        <div className="flex items-center justify-around lg:gap-10">
          <img src={ImageFourth} alt="" />
          <img src={ImageThird} alt="" />
        </div>

        <div className="flex w-full lg:w-fit lg:gap-5 justify-between">
          <FaXTwitter className="text-xl" />
          <FaLinkedin className="text-xl" />
          <FaPaperPlane className="text-xl" />
          <FaRedditAlien className="text-xl" />
          <FaDiscord className="text-xl" />
          <FaYoutube className="text-xl" />
        </div>
      </div>

      <div className="w-full border bg-gray-200"></div>

      <div className="flex flex-col gap-3 lg:flex-row-reverse items-center lg:justify-between -mt-5 lg:mt-0 text-sm">
        <p>Privacy Policy</p>
        <p>All Rights Reserved. &copy; Copyright 2023. QuillAudits - LLC</p>
      </div>
    </div>
  );
};

export default Footer;

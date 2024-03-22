import React from "react";

const InfoRow = () => {
  return (
    <div className="mt-28 mx-10 flex flex-col gap-20 lg:flex-row lg:justify-center">
      <div className="flex flex-col gap-6 lg:pt-5 lg:w-[350px]">
        <h3 className="font-bold text-xl bg-gradient-to-r from-pink-300 to-pink-300">Before QuillAudits</h3>
        <p className="font-poppins text-lg lg:text-base leading-6">
          Exploits like reentrancy and front-running can let attackers withdraw extra funds and manipulate transaction timing for unfair gains.
        </p>

        <p className="font-poppins text-lg lg:text-base leading-6">
          Vulnerabilities could allow users to mint CDP tokens or pension shares indefinitely, disrupting the system's economic balance.
        </p>
      </div>

      <div className="hidden lg:block border border-solid border-grey-300"></div>

      <div className="flex flex-col gap-6 lg:pt-5 lg:w-[350px]">
        <h3 className="font-bold text-xl bg-gradient-to-b from-blue-300 to-blue-400">After QuillAudits</h3>
        <p className="font-poppins text-lg lg:text-base leading-6">Implementation of reentrancy protection mechanisms.</p>

        <p className="font-poppins text-lg lg:text-base leading-6">
          Ensure precision in decimal handling with standard libraries, recalculate accurately, fix logic errors, and secure referral systems against exploitation.
        </p>
      </div>
    </div>
  );
};

export default InfoRow;

import React from "react";
import { ImageFirst, ImageSecond, Picture } from "../assets";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Content = () => {
  return (
    <div className="flex flex-col gap-10 ml-5 mr-10 my-10">
      <p className="font-poppins text-lg">
        Carpe Diem Pension, on Pulse blockchain, redefines retirement with a self-managed, inclusive, globally portable fund. Unique for its token burn mechanism, it ensures a
        sustainable 4.32% inflation payout. With $143.11k and 41.06% of CDP already burned, it serves 35 users globally.
      </p>

      <h2 className="font-jost text-4xl font-bold leading-tight">CarpeDiem Pension's Flexible, Blockchain-Enabled Future</h2>

      <p className="font-poppins text-lg">
        CarpeDiem Pension redefines retirement planning with a unique approach that deviates from traditional pension funds. With no minimum age for retirement, it offers
        flexibility and freedom, ensuring all genders receive equal treatment. CarpeDiem Pension ensures blockchain transparency, anonymity, and global accessibility, safeguarding
        pensions during international relocation. Easily transfer pensions to loved ones; share wallet access. Re-deposit payouts for increased future benefits. Importantly,
        CarpeDiem Pension prioritizes deposit security by avoiding utilizing client funds for internal investments. To become a part of this forward-thinking pension scheme, one
        simply needs to install and configure a blockchain wallet.
      </p>

      <img src={ImageFirst} alt="First Image" className="rounded-md lg:w-full" />

      <h2 className="font-jost text-4xl font-bold leading-tight">CarpeDiem Pension's Challenges: Enhancing Security Against Reentrancy, Front-Running, and Infinite Minting</h2>

      <p className="font-poppins text-lg">
        CarpeDiem Pension confronts critical security challenges, including the risks of reentrancy and front-running exploits.Malicious actors may exploit contract
        vulnerabilities, withdrawing excess funds or manipulating transaction timing for unfair advantages. System faces infinite minting threats, risking economic stability with
        endless creation of CDP tokens or pension shares.  Addressing these challenges is paramount to safeguarding the integrity and security of CarpeDiem Pension.
      </p>

      <img src={ImageSecond} alt="Second Image" className="rounded-md lg:w-full" />

      <h2 className="font-jost text-4xl font-bold leading-tight">CarpeDiem Pension's Journey Through our Audit Process</h2>

      <ol className="font-poppins text-2xl font-semibold list-decimal ml-5 space-y-5">
        <li>
          <p>Information gathering:</p>
          <ul className="list-disc text-lg font-normal ml-5 space-y-5 mt-5">
            <li>Collected and reviewed all relevant documentation, including whitepaper, technical specifications, and design documents.</li>
            <li>Obtained a clear understanding of the CDP platform's functionality, economic model, and intended user interactions.</li>
            <li>Discussed client concerns and specific areas of focus for the audit.</li>
          </ul>
        </li>

        <li>
          <p>Manual Code Review:</p>
          <ul className="list-disc text-lg font-normal ml-5 space-y-5 mt-5">
            <li>
              <p>Conducted a line-by-line review of the smart contract code, focusing on:</p>
              <ul className="list-circle ml-5 space-y-5 mt-5">
                <li>
                  <span className="font-medium italic">Vulnerability identification:</span> Searching for known vulnerabilities like reentrancy, front-running, integer overflows,
                  and access control issues, etc.
                </li>
                <li>
                  <span className="font-medium italic">Logic flaws:</span> Identifying inconsistencies or unintended behaviours in the code logic.
                </li>
                <li>
                  <span className="font-medium italic">Tokenomics correctness:</span> Verifying if the code accurately implements the intended economic model and token distribution
                  mechanisms.
                </li>
                <li>
                  <span className="font-medium italic">Solidity best practices:</span> Compliance with secure coding standards and adherence to established guidelines.
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li>
          <p>Functional Testing:</p>
          <ul className="list-disc text-lg font-normal ml-5 space-y-5 mt-5">
            <li>Developed and executed a comprehensive set of test cases covering various user interactions and edge cases.</li>
            <li>Simulated different deposit, claim, and referral scenarios to assess functionality and uncover potential exploits.</li>
            <li>Focused on scenarios identified during the manual review and client concerns (e.g., infinite minting, reward calculation errors).</li>
            <li>Leveraged tools like Hardhat and Ganache to deploy and test the smart contract locally.</li>
          </ul>
        </li>

        <li>
          <p>Automated Testing:</p>
          <ul className="list-disc text-lg font-normal ml-5 space-y-5 mt-5">
            <li>Employed static analysis tools like Slither to identify vulnerabilities through automated code scanning.</li>
            <li>Utilized symbolic execution tools like Mythril to explore various code execution paths and uncover potential attack vectors.</li>
            <li>Integrated unit tests are written by the CDP team to verify specific contract functions and their behaviour.</li>
          </ul>
        </li>

        <li>
          <p>Reporting & Remediation:</p>
          <ul className="list-disc text-lg font-normal ml-5 space-y-5 mt-5">
            <li>Prepared a detailed report outlining all identified vulnerabilities, categorized by severity and potential impact.</li>
            <li>Provided clear recommendations for fixing each vulnerability, including code snippets and best practices.</li>
            <li>Collaborated with the CDP team to prioritize and address the identified issues.</li>
            <li>Conducted additional verification testing after vulnerability fixes were implemented.</li>
          </ul>
        </li>
      </ol>

      <h2 className="font-jost text-4xl font-bold leading-tight">QuillAudits' Strategic Approach to CDP Security Audits</h2>

      <p className="font-poppins text-lg">
        We prioritize threat modeling based on platform-specific risks. Security-first, we identify and mitigate vulnerabilities beyond functionality testing. Using white-box and
        black-box tests, we conduct thorough vulnerability assessments. Maintaining transparency, we communicate openly with the CDP team. Emphasizing clarity, we present
        actionable insights for efficient issue resolution.
      </p>

      <h2 className="font-jost text-4xl font-bold leading-tight">Comprehensive Audit Discoveries and Remediation Strategies</h2>

      <p className="font-poppins text-lg">
        Throughout the audit process, we unearthed a total of 33 issues, spanning from minor concerns to critical vulnerabilities. Among these, some of the critical issues
        identified were: Here's how we remediated them :
      </p>

      <ol className="font-poppins text-2xl font-semibold list-decimal ml-5 space-y-5">
        <li>
          <p>Unauthorized Claim/Compound:</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>Users could claim/compound a substantial amount without making a deposit or waiting for the stipulated time.</li>
          </ul>
        </li>

        <li>
          <p>Precision Loss in mintCDP():</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>Precision loss and unscaled values were identified while calculating rewardPerShare in the mintCDP() function.</li>
          </ul>
        </li>

        <li>
          <p>Multiplication Accuracy:</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>Multiplication operations were prone to providing incorrect answers due to unscaled values, posing a potential risk to accurate calculations.</li>
          </ul>
        </li>

        <li>
          <p>Incorrect Share Allocation:</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>The protocol was allocating shares for all days, even when there were no corresponding deposits, leading to inefficient use of resources.</li>
          </ul>
        </li>

        <li>
          <p>Logic Error in Referral Handling:</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>
              Users could claim/compound a A logic error resulted in users always having their user.referral set to address(0), which could be exploited to trick the referral
              system. amount without making a deposit or waiting for the stipulated time.
            </li>
          </ul>
        </li>

        <li>
          <p>Referral Exploitation:</p>
          <ul className="list-alpha text-lg font-normal ml-5 mt-5">
            <li>Users could exploit the referral system to extract more CDP from the protocol, undermining its integrity.</li>
          </ul>
        </li>
      </ol>

      <h2 className="font-jost text-4xl font-bold leading-tight">Remediation & Impact:</h2>

      <p className="font-poppins text-lg">
        All identified vulnerabilities were addressed by the CDP team, significantly enhancing the smart contract's security posture. Key improvements include
      </p>

      <ul className="font-poppins list-disc ml-5 space-y-5 -mt-3">
        <li>Implementation of reentrancy protection mechanisms.</li>
        <li>Accurate handling of decimal values using established libraries or best practices.</li>
        <li>Revised calculations with proper scaling factors.</li>
        <li>Fixing logic errors to ensure deposits and waiting periods are enforced.</li>
        <li>Addressing referral system vulnerabilities to prevent abuse.</li>
      </ul>

      <p className="font-poppins font-normal text-lg">
        <span className="font-semibold">Embed this tweet :-</span>
        <div class="whitespace-normal overflow-hidden">
          <a href="https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20" class="text-blue-500 block break-words">
            https://x.com/CarpeDiemCDP/status/1742906560794296402?s=20
          </a>
        </div>
      </p>

      <div className="border shadow-lg rounded-lg md:w-[450px] lg:w-full md:mx-auto">
        <div className="w-full md:w-full h-40  bg-gradient-to-r from-blue-900 to-blue-400 rounded-t-lg">
          <div className="ml-3 pt-3">
            <FaQuoteLeft className="block text-white text-3xl" />
          </div>
        </div>

        <div className="-mt-24 ml-3 z-50 flex gap-20 lg:flex-row-reverse lg:justify-center lg:-mt-32">
          <img src={Picture} alt="Picture" className="w-fit lg:w-48 rounded-lg" />
          <div className="font-jost mt-2 lg:mt-8 text-white w-full lg:w-60">
            <h2 className="font-semibold text-[28px]">Carpediem</h2>
            <p className="text-xl">TEAM</p>
            <div className="flex w-full justify-between pr-10 mt-10 text-3xl text-yellow-400">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
          </div>
        </div>

        <div className="flex flex-col ml-3 mt-6 shadow-md">
          <p className="font-jost text-lg lg:mx-16">
            “It felt like the auditing team was available within a short timeframe, which was excellent. The auditing process looked thorough, and I really appreciate the fact that
            you took time to investigate GAS optimizations.”
          </p>
          <div className="flex w-full justify-end pb-3 pr-3">
            <FaQuoteRight className="text-3xl text-blue-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;

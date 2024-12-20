"use client";
import React, { useState } from "react";
import Image from "next/image";
import adspace from "../../assets/adspace.png"
import Link from "next/link";
import {PiNumberCircleOneFill,PiNumberCircleThreeFill,PiNumberCircleTwoFill} from "react-icons/pi";
import { BsPersonCircle } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi2";

const Register = () => {
  const [active, setActive] = useState("");

  const handleActive = (stage: "stage1" | "stage2" | "stage3") => {
    setActive(stage);
  };

  const stageButtonStyles = (stage: string) =>
    `flex p-4 w-full gap-4 items-center rounded-2xl cursor-pointer 
     ${
       active === stage
         ? "border-2 border-blue-500"
         : "border border-gray-300 "
     }`;

  return (
    <div>
      {/* Header */}
      <div className="rounded-xl bg-white w-[10%] p-4 flex shadow-2xl shadow-gray-300 ml-2">
        <Image src={adspace} alt="adspace" className="w-[32px] h-[32px]" />
        <div>
          <div className="text-[18px] font-semibold ml-1">Ad Space</div>
          <div className="text-[11px] -mt-1 ml-9">by Grovyo</div>
        </div>
      </div>

      {/* Main */}
      <div className="flex-col flex justify-center items-center">
        <div className="font-semibold text-[35px]">Create Account</div>
        <div className="flex justify-center items-center mt-5">
          <div className="text-[#686B6E] text-[13px]">
            Already have an account?
          </div>
          <Link
            href={"/Auth/LogIn"}
            className="text-[13px] dark:text-black text-blue-600 ml-2 font-semibold underline"
          >
            LogIn
          </Link>
        </div>

        {/* Steps */}
        <div className="flex w-[50%]">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-col flex items-center">
              <PiNumberCircleOneFill className="text-[25px]" />
              <div className="text-[10px]">Select Your Type</div>
            </div>
            <hr className="flex-grow border-dashed border-[#363A3D] mb-3" />
            <div className="flex-col flex items-center">
              <PiNumberCircleTwoFill className="text-[25px]" />
              <div className="text-[10px]">Provide Your Basic Info</div>
            </div>
            <hr className="flex-grow border-dashed border-[#363A3D] mb-3" />
            <div className="flex-col flex items-center">
              <PiNumberCircleThreeFill className="text-[25px]" />
              <div className="text-[10px]">Verify Your OTP</div>
            </div>
          </div>
        </div>

        {/* Stage Buttons */}
        <div className=" space-y-10 mt-8 w-[700px]">

        <div
          onClick={() => handleActive("stage1")}
          className={stageButtonStyles("stage1")}
        >
          <BsPersonCircle className="text-[40px] text-blue-600" />
          <div className="p-1">
            <h2 className="font-semibold text-lg">Individual</h2>
            <p className="text-sm text-gray-600">
              Advertise your own app or service to gain transaction within the
              Grovyo user base.
            </p>
          </div>
        </div>

        <div
          onClick={() => handleActive("stage2")}
          className={`${stageButtonStyles("stage2")} mt-6`}
        >
          <FaBuildingColumns className="text-[40px] text-blue-600" />
          <div className="p-1">
            <h2 className="font-semibold text-lg">Organization</h2>
            <p className="text-sm text-gray-600">
              Promote your company's apps and services to a wider audience.
            </p>
          </div>
        </div>

        <div
          onClick={() => handleActive("stage3")}
          className={`${stageButtonStyles("stage3")} mt-6`}
        >
          <HiUserGroup className="text-[40px] text-blue-600" />
          <div className="p-1">
            <h2 className="font-semibold text-lg">Affiliator</h2>
            <p className="text-sm text-gray-600">
              Run ads for multiple accounts and earn cashback on your ad spend.
            </p>
          </div>
        </div>
        </div>

        {/* Continue Button */}
        <Link 
        href={"/registration?step=1"}
         className="mt-10 w-[150px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex justify-center items-center">
          Continue
          <HiOutlineArrowRight className="ml-4" />
        </Link>
      </div>
    </div>
  );
};

export default Register;

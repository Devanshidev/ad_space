"use client";
import React, { useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  PiNumberCircleOneFill,
  PiNumberCircleTwoFill,
  PiNumberCircleThreeFill,
} from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { FaBuildingColumns } from "react-icons/fa6";
import { HiUserGroup } from "react-icons/hi";
import { HiOutlineArrowRight } from "react-icons/hi2";
import { BsPersonCircle } from "react-icons/bs";
import { FiCamera } from "react-icons/fi";
import Link from "next/link";

const page = () => {
  const searchParams = useSearchParams();
  const step = searchParams.get("step");
  const [active, setActive] = useState("stage1");

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
    <div className="flex justify-center">
      {step == "1" && (
        <div className="flex w-[50%] flex-col">
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

          {/* Stage Buttons */}
          <div className="space-y-10 mt-8 w-[800px]">
            <div
              onClick={() => handleActive("stage1")}
              className={stageButtonStyles("stage1")}
            >
              <BsPersonCircle className="text-[40px] text-blue-600" />
              <div className="p-1">
                <h2 className="font-semibold text-lg">Individual</h2>
                <p className="text-sm text-gray-600">
                  Advertise your own app or service to gain transactions within
                  the Grovyo user base.
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
                  Run ads for multiple accounts and earn cashback on your ad
                  spend.
                </p>
              </div>
            </div>
          </div>

          {/* Continue Button */}
          <div className="mt-10 flex justify-center">
            <Link
              href={""}
              className="w-[150px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex justify-center items-center"
            >
              Continue
              <HiOutlineArrowRight className="ml-4" />
            </Link>
          </div>
        </div>
      )}
       {step == "2" &&(
         <div className="flex w-[50%] flex-col">
         <div className="flex items-center justify-center w-full my-6">
                     <div className="flex-col flex items-center mt-3">
                       <IoIosCheckmarkCircle className="text-[25px] text-green-600 " />
                       <div className="text-[12px] text-green-600">Select Your Type</div>
                     </div>
                     <hr className="flex-grow border-dashed border-green-600 mb-3" />
                     <div className="flex-col flex items-center">
                       <PiNumberCircleTwoFill className="text-[26px]" />
                       <div className="text-[12px]">Provide Your Basic Info</div>
                     </div>
                     <hr className="flex-grow border-dashed border-[#363A3D] mb-3" />
                     <div className="flex-col flex items-center">
                       <PiNumberCircleThreeFill className="text-[25px]" />
                       <div className="text-[10px]">Verify Your OTP</div>
                     </div>
                   </div>
                   <div className="border rounded-2xl px-4 py-3 flex-col flex justify-center items-center w-[100%]">
          <div className="rounded-3xl w-[75px] h-[75px] bg-slate-100 mt-2 border border-gray-500 flex justify-center items-center">
            <FiCamera className="text-[30px] text-blue-600" />
          </div>
          <div className="text-blue-600 text-[12px] mt-3">
            Upload Your Profile Picture
          </div>
          <div className=" flex-col w-full p-2 space-y-7 text-[13px]">
            <div className="flex">
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            First Name
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            type="text"
            placeholder="Enter first name"
            className="w-[80%] outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            Last Name
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            type="text"
            placeholder="Enter last name"
            className="w-[80%] outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          </div>
          <div className="flex">
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            Phone Number
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
             type="text"
            placeholder="+91 xxxxx xxxxx"
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            E-mail
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            type="text"
            placeholder="abc@gmail.com"
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          </div>
          <div className="flex">
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            Password
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            type="password"
            placeholder="Enter your Password"
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
             Confirm Password
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
             type="password"
            placeholder="Enter Your Password"
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          </div>
         
          <div className=" w-[100%] flex-col">
            <div className="flex">
            <div>
            Address
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
             type="text"
            placeholder="Enter Address here"
            className="w-full outline-none"/>
            <div className="border border-gray-300"></div>
          </div>
          <div className=" w-[100%] flex-col">
            <div className="flex">
            <div>
            Famous Landmark
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            type="text"
            className="w-full outline-none"/>
            <div className="border border-gray-300"></div>
          </div>
          <div className=" w-[100%] flex-col">
            <div className="flex">
            <div>
            Postal Code
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            className="w-full outline-none"/>
            <div className="border border-gray-300"></div>
          </div>
          <div className="flex">
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            City
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          <div className=" w-[50%] flex-col">
            <div className="flex">
            <div>
            State
            </div>
            <div className="text-red-600 text-[15px]">*</div>
            </div>
            <input
            className="w-full outline-none"/>
            <div className="border border-gray-300 w-[80%]"></div>
          </div>
          </div>
          </div>
         
        </div>
        <div className="flex justify-center">
        <Link
        href={"/registration?step=3"} className="mt-10 w-[150px] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex justify-center items-center">
                    Next Step
                    <HiOutlineArrowRight className="ml-4" /></Link>
       </div>
       </div>
      )}
      {step == "3" && (
        <div className="flex-col w-[50%]">
          <div className="flex items-center justify-center w-full my-6">
            <div className="flex-col flex items-center mt-3">
              <IoIosCheckmarkCircle className="text-[25px] text-green-600 " />
              <div className="text-[12px] text-green-600">Select Your Type</div>
            </div>
            <hr className="flex-grow border-dashed border-green-600 mb-3" />
            <div className="flex-col flex items-center">
              <IoIosCheckmarkCircle className="text-[25px] text-green-600" />
              <div className="text-[10px] text-green-600">
                Provide Your Basic Info
              </div>
            </div>
            <hr className="flex-grow border-dashed border-green-600 mb-3" />
            <div className="flex-col flex items-center">
              <PiNumberCircleThreeFill className="text-[25px]" />
              <div className="text-[10px]">Verify Your OTP</div>
            </div>
          </div>
          <div className="flex gap-4 justify-center mt-20">
            {Array(6)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="border border-gray-500 w-[50px] h-[50px] rounded-2xl flex justify-center items-center"
                >
                  <input
                    type="text"
                    maxLength={1}
                    className="w-[40px] h-[40px] text-center rounded-2xl outline-none"
                  />
                </div>
              ))}
          </div>

          <div className="flex flex-col gap-4 items-center mt-14">
            <button className="w-[50%] px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Verify OTP
            </button>
            <button className="">Resend OTP</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default page;

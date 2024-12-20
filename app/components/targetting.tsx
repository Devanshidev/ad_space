import React, { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FcGlobe } from "react-icons/fc";
import { VscSettings } from "react-icons/vsc";
import { RxCalendar } from "react-icons/rx";
const Targetting = () => {
  const [selectedGender, setSelectedGender] = useState("");
  const [age, setAge] = useState("");
  const [selectedOption, setSelectedOption] = useState("runContinuously");
  
  const handleGenderSelect = (gender: "All" | "Male" | "Female") => {
    setSelectedGender(gender);
  };
  const handleAgeSelect = (age: "All Age Group" | "Select Age Range") => {
    setAge(age);
  };
 

  return (
    <div>
      {/* Interests & Tags */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Interests & Tags</div>
        <div className="font-semibold text-[15px] text-blue-600 mt-1 ml-1">
          <IoInformationCircleOutline />
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter the name of ad"
          className="w-full py-2 px-4 border rounded-2xl bg-[#ffffff] placeholder:text-[14px] outline-black mt-2"
        />
      </div>
      {/* Placements */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Placements</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      {/* Images inside this */}
      <div className="w-full border px-2 py-2 bg-[#ffffff] rounded-2xl mt-2">
        Fashion
      </div>
      <div className="w-full flex gap-3 mt-4">
        <div className="w-[50%] border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 justify-center items-center">
          <FcGlobe className="text-[25px]" />
          <div className="flex-col">
            <div className="font-semibold text-[15px]">Broad</div>
            <div className="text-[12px]">Reach Audience across all interests and communities</div>
          </div>
        </div>
        <div className="w-[50%] border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 justify-center items-center">
          <VscSettings className="text-[25px]" />
          <div className="flex-col">
            <div className="font-semibold text-[15px]">Custom</div>
            <div  className="text-[12px]">Target Audience with specific interests and communities</div>
          </div>
        </div>
      </div>
      {/* Gender */}
      <div className="font-semibold text-[15px] p-2 mt-2">Gender</div>
      <div className="mt-2 flex justify-evenly  w-full">
        <button
          onClick={() => handleGenderSelect("All")}
          className={`w-[25%] border bg-[#ffffff] rounded-lg text-[15px]  py-2 ${
            selectedGender === "All"
              ? "font-semibold text-black border border-black"
              : "text-[#686B6E]"
          }`}
        >
          All
        </button>
        <button
          onClick={() => handleGenderSelect("Male")}
          className={`w-[25%] border bg-[#ffffff] rounded-lg text-[15px]  py-2 ${
            selectedGender === "Male"
              ? "font-semibold text-black border border-black"
              : "text-[#686B6E]"
          }`}
        >
          Male
        </button>
        <button
          onClick={() => handleGenderSelect("Female")}
          className={`w-[25%] border bg-[#ffffff] rounded-lg text-[15px]  py-2 ${
            selectedGender === "Female"
              ? "font-semibold text-black border border-black"
              : "text-[#686B6E]"
          }`}
        >
          Female
        </button>
      </div>
      <div className="font-semibold text-[15px] p-2 mt-2">Age Group</div>
      <div className="mt-2 flex justify-evenly  w-full">
        <button
          onClick={() => handleAgeSelect("All Age Group")}
          className={`w-[40%] border bg-[#ffffff] rounded-lg text-[15px]  py-2 ${
            age === "All Age Group"
              ? "font-semibold text-black border border-black"
              : "text-[#686B6E]"
          }`}
        >
          All Age Group
        </button>
        <button
          onClick={() => handleAgeSelect("Select Age Range")}
          className={`w-[40%] border bg-[#ffffff] rounded-lg text-[15px]  py-2 ${
            age === "Select Age Range"
              ? "font-semibold text-black border border-black"
              : "text-[#686B6E]"
          }`}
        >
          Select Age Range
        </button>
      </div>
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Location</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div>
        <input
          type="text"
          placeholder="Enter Location here"
          className="w-full py-2 px-4 border rounded-2xl bg-[#ffffff] placeholder:text-[14px] outline-black mt-2"
        />
      </div>
      {/* Date */}
      <div className="flex gap-4  w-full  ">
        <div className="flex-col  w-[50%] p-2 mt-2">
          <div className="font-semibold text-[15px]">Start Date</div>
         <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center mt-2">
         <RxCalendar />
          <div>
            <input
              type=""
              placeholder="07/02/2025"
              className="w-fullbg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div>
        </div>
        <div className="flex-col  w-[50%] p-2 mt-2">
          <div className="font-semibold text-[15px]"> End Date</div>
          <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center mt-2">
         <RxCalendar />
          <div>
            <input
              type=""
              placeholder="07/02/2025"
              className="w-full bg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div>
        </div>
      </div>
      {/* selection */}
      <div>
      {/* Option 1: Run this ad Continuously */}
      <div
        className={`flex items-center cursor-pointer ${
          selectedOption === "runContinuously" ? "text-black" : ""
        }`}
        onClick={() => setSelectedOption("runContinuously")}
      >
        <div
          className={`w-[16px] h-[16px] border-2 ${
            selectedOption === "runContinuously"
              ? "border-blue-500"
              : "border-gray-400"
          } rounded-full flex items-center justify-center mt-2`}
        >
          <div
            className={`w-[8px] h-[8px] ${
              selectedOption === "runContinuously"
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-400 border-gray-400"
            } rounded-full`}
          ></div>
        </div>
        <div className="text-[15px] p-2 mt-2 font-semibold">
          Run this ad Continuously
        </div>
      </div>

      {/* Description for Option 1 */}
      {selectedOption === "runContinuously" && (
        <div className="flex px-2">
          <div className="text-[13px] ml-2">
            Your ad will run continuously for a daily budget. This option is
            recommended.
          </div>
          <div className="text-blue-500 hover:underline text-[13px]">
            Learn more
          </div>
        </div>
      )}

      {/* Option 2: Choose when this ad will end */}
      <div
        className={`flex items-center cursor-pointer ${
          selectedOption === "chooseEndDate" ? "text-black" : ""
        }`}
        onClick={() => setSelectedOption("chooseEndDate")}
      >
        <div
          className={`w-[16px] h-[16px] border-2 ${
            selectedOption === "chooseEndDate"
              ? "border-blue-500"
              : "border-gray-400"
          } rounded-full flex items-center justify-center mt-2`}
        >
          <div
            className={`w-[8px] h-[8px] ${
              selectedOption === "chooseEndDate"
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-400 border-gray-400"
            } rounded-full`}
          ></div>
        </div>
        <div className="text-[15px] p-2 mt-2 font-semibold">
          Choose when this ad will end
        </div>
      </div>
    </div>
      {/* budget */}
      <div className="flex gap-4  w-full  ">
        <div className="flex-col  w-[50%] mt-2 p-2">
          <div className="font-semibold text-[15px]">Total Budget</div>
         <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center mt-2">
           ₹
          <div>
            <input
              type=""
              placeholder="Enter total budget"
              className="w-fullbg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div>
        </div>
        <div className="flex-col  w-[50%] mt-2 p-2">
          <div className="font-semibold text-[15px]"> Daily Budget </div>
          <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center mt-2">
           ₹
          <div>
            <input
              type=""
              placeholder="Enter daily budget"
              className="w-full bg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mt-2 p-2 font-semibold">What would you like to focus on?</div>
      {/* Option 1: Run this ad Continuously */}
      <div
        className={`flex items-center cursor-pointer ${
          selectedOption === "runContinuously" ? "text-black" : ""
        }`}
        onClick={() => setSelectedOption("runContinuously")}
      >
        <div
          className={`w-[16px] h-[16px] border-2 ${
            selectedOption === "runContinuously"
              ? "border-blue-500"
              : "border-gray-400"
          } rounded-full flex items-center justify-center mt-2`}
        >
          <div
            className={`w-[8px] h-[8px] ${
              selectedOption === "runContinuously"
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-400 border-gray-400"
            } rounded-full`}
          ></div>
        </div>
        <div className="flex mt-2 p-2">
        <div className="font-semibold text-[15px] ">Maximum Conversions</div>
        <div className="font-semibold text-[15px] text-blue-600 mt-1 ml-1">
          <IoInformationCircleOutline />
        </div>
      </div>
      </div>

      {/* Description for Option 1 */}
      {/* {selectedOption === "runContinuously" && (
        <div className="flex px-2">
          <div className="text-[13px] ml-2">
          Grovyo will optimize your ads to better achieve your objective and maximize its effectiveness.
          </div>
          <div className="text-blue-500 hover:underline text-[13px]">
            Learn more
          </div>
        </div>
      )} */}

      {/* Option 2: Choose when this ad will end */}
      <div
        className={`flex  items-center cursor-pointer ${
          selectedOption === "chooseEndDate" ? "text-black " : ""
        }`}
        onClick={() => setSelectedOption("chooseEndDate")}
      >
        <div
          className={`w-[16px] h-[16px] border-2 ${
            selectedOption === "chooseEndDate"
              ? "border-blue-500"
              : "border-gray-400"
          } rounded-full flex items-center justify-center `}
        >
          <div
            className={`w-[8px] h-[8px] ${
              selectedOption === "chooseEndDate"
                ? "bg-blue-500 border-blue-500"
                : "bg-gray-400 border-gray-400"
            } rounded-full`}
          ></div>
        </div>
        <div className="flex-col">
        <div className="font-semibold text-[15px] p-2 ">Cost per Action</div>
      
      </div>
       
      </div>
      {selectedOption === "chooseEndDate" && (
      <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center w-[100%] mt-2">
           ₹
          <div className="">
            <input
              type=""
              placeholder="Enter your cost per action"
              className="w-full bg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div> 
        )}
    </div>
      {/* <div className="font-semibold text-[15px] mt-2 p-2">What would you like to focus on?</div>
      <div className="flex mt-2 p-2">
        <div className="font-semibold text-[15px] ">Maximum Conversions</div>
        <div className="font-semibold text-[15px] text-blue-600 mt-1 ml-1">
          <IoInformationCircleOutline />
        </div>
      </div>
      <div className="font-semibold text-[15px] mt-2 p-2 ">Cost per Action</div>
      <div className="border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-3 items-center w-[50%] mt-2">
           ₹
          <div>
            <input
              type=""
              placeholder="Enter your cost per action"
              className="w-full bg-[#ffffff] placeholder:text-[14px] outline-none"
            />
          </div>
          </div> */}
    </div>
    
  );
};

export default Targetting;

import React, { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { GrAnnounce } from "react-icons/gr";
import { PiCursorClickBold } from "react-icons/pi";
import { LiaFunnelDollarSolid } from "react-icons/lia";
import { HiArrowDownTray } from "react-icons/hi2";
import { PiVideo } from "react-icons/pi";
import { BsGraphUpArrow } from "react-icons/bs";
import { CiCrop } from "react-icons/ci";
import { BsArrowLeftRight } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { HiOutlineUpload } from "react-icons/hi";
type ObjectiveDetails = {
  description: string;
  points: string[];
};

const setupAds = () => {
const [objective, setObjective] = useState("Brand Awareness and Reach");

// Details for each objective
const details: Record<string, ObjectiveDetails> = {
    "Brand Awareness and Reach": {
      description: "Increase awareness of your Brand and Product",
      points: ["Pay for CPM", "Optimized towards impressions"],
    },
    Traffic: {
      description: "Drive more traffic to your website or app",
      points: ["Pay for CPC", "Optimized towards link clicks"],
    },
    Conversions: {
      description: "Encourage people to take valuable actions",
      points: ["Pay for CPA", "Optimized for actions"],
    },
    "App Installs": {
      description: "Get people to install your app",
      points: ["Pay for CPI", "Optimized for installs"],
    },
    Views: {
      description: "Increase video views and engagement",
      points: ["Pay for CPV", "Optimized for video plays"],
    },
    Sales: {
      description: "Boost sales and revenue",
      points: ["Pay for ROAS", "Optimized for purchases"],
    },
  };
  // Menu items
  const menuItems = [
    { id: "Brand Awareness and Reach", icon: <GrAnnounce /> },
    { id: "Traffic", icon: <PiCursorClickBold /> },
    { id: "Conversions", icon: <LiaFunnelDollarSolid /> },
    { id: "App Installs", icon: <HiArrowDownTray /> },
    { id: "Views", icon: <PiVideo /> },
    { id: "Sales", icon: <BsGraphUpArrow /> },
  ];

  return (
    <div className="">
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Community</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      {/* Community */}
      <div className="w-full border px-2 py-1 bg-[#ffffff] rounded-2xl mt-2">
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="h-[35px] text-[#000] w-[35px] border border-dashed flex items-center justify-center rounded-2xl">
              Dp
              {/* <Image
              src={}
              alt = ""/> */}
            </div>
            <div className="text-[#171717] flex justify-between items-center w-[92%]">
              <div className="text-[14px]"> Clothing Girlzz</div>
              {/* <div className="text-[14px] font-semibold"> Clothing Girlzz</div>
              <div className="text-[14px] font-semibold"> Clothing Girlzz</div> */}
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      {/* Ad name */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Ad Name</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div>
        <input
          type=""
          placeholder="Enter the name of ad"
          className="w-full py-2 px-4 border rounded-2xl bg-[#ffffff] placeholder:text-[14px] outline-black mt-2"
        />
      </div>
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Objective</div>
        <div  className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div className="flex mt-2">
        {/* Leftmenu */}
        <div className="w-[35%] space-y-3">
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setObjective(item.id)}
              className={`w-full border px-2 py-2 bg-[#ffffff] rounded-2xl flex gap-2 items-center cursor-pointer  ${
                objective === item.id
                  ? "border-black font-bold"
                  : "border-gray-300"
              }`}
            >
              <div className="text-[#171717] flex items-center w-full">
                {item.icon}
                <div className="text-[14px] ml-3">{item.id}</div>
              </div>
            </div>
          ))}
        </div>

      {/* Sidemenu */}
      <div className="w-[40%] bg-[#EEF1F3] rounded-2xl p-6 ml-20">
          <div className="font-semibold text-[14px]">{objective}</div>
          <div className="text-[12px] text-[#666666]">
            {details[objective].description}
          </div>
          <div className="font-semibold text-[13px] mt-3">
            {details[objective].points.map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </div>
        </div>
        </div>
        {/* Heading */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Headline</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div className="w-full border px-2 py-2 bg-[#ffffff] rounded-2xl mt-2">
       Fashion
      </div>
      {/* Description */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Description</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div>
        <textarea
        placeholder="Enter ad description here"
        className="w-full border px-2 py-2 bg-[#ffffff] rounded-2xl max-h-[150px] min-h-[90px] placeholder:text-[13px] mt-2"
        />
      </div>
      <div className="flex gap-4  w-full  ">
      <div className="flex-col  w-[40%] p-2 mt-2">
      {/* <div className="flex"> */}
        <div className="font-semibold text-[15px]">Call to Action</div>
        {/* <div>*</div> */}
      {/* </div> */}
      <div className="w-full border px-2 py-2 bg-[#ffffff] rounded-2xl mt-2">
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="text-[#171717] flex justify-between items-center w-[92%]">
              <div className="text-[14px]"> Select </div>
            
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="flex-col  w-[60%] p-2 mt-2">
      {/* <div className="flex"> */}
        <div className="font-semibold text-[15px]"> Destination URL</div>
        {/* <div>*</div> */}
      {/* </div> */}
      <div>
        <input
          type=""
          placeholder="Enter the name of ad"
          className="w-full py-2 px-4 border rounded-2xl bg-[#ffffff] placeholder:text-[14px] outline-black mt-2"
        />
      </div>
      </div>
      </div>
      {/* IMAGE OR VIDEO */}
      <div className="flex p-2 mt-2">
        <div className="font-semibold text-[15px]">Image or Video</div>
        <div className="font-semibold text-[15px] text-red-600 ml-1">*</div>
      </div>
      <div className="w-full border px-2 py-1 bg-[#ffffff] rounded-2xl mt-2">
        <div className="">
          <div className="flex gap-2 items-center">
            <div className="h-[35px] text-[#000] w-[35px] border border-dashed flex items-center justify-center rounded-2xl">
              Dp
              {/* <Image
              src={}
              alt = ""/> */}
            </div>
            <div className="text-[#171717] flex justify-between items-center w-[92%]">
              <div className="text-[12px]"> Image name </div>
              <div className="flex space-x-4">
              <CiCrop className="text-blue-600 "/>
              <BsArrowLeftRight />
              <MdOutlineDelete className="text-red-600"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border border-dotted px-2 py-8 bg-[#ffffff] rounded-2xl flex justify-center items-center mt-4">
      <HiOutlineUpload />
      <div className="ml-2 text-[13px]"> Add Image(s) and Videos</div>
      </div>
    </div>
  );
};

export default setupAds;

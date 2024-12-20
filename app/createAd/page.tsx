"use client"
import React, { useState } from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import SetUpAds from "../components/setupAds";
import Targetting from "../components/targetting";
import Payments from "../components/payment";
interface MenuState {
  setupAds: boolean;
  targetting: boolean;
  payments: boolean;
}
const page = () => {
    const [open,setOpen]= useState<MenuState>({
      setupAds: false,
      targetting: false ,
      payments: false,
    })
    const toggleMenu = (menu: keyof MenuState) => {
      // setOpen(!open);
      setOpen((prev) => ({
        ...prev,
        [menu]: !prev[menu],
      }));
    };
  return (
    <div className="h-screen w-screen flex overflow-x-hidden">
        {/* right side  */}
        <div className="w-[50%] border-r space-y-2 p-2 h-full">
        <div className="w-full border p-2 bg-[#ffffff] rounded-2xl">
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="h-[40px] text-[#000] w-[40px] border border-dashed flex items-center justify-center rounded-2xl">
                1
              </div>
              <div className="text-[#171717] flex justify-between items-center w-[92%] h">
                <div
                 className="text-[14px] font-semibold">Set-up Ads</div>
              <IoIosArrowDown 
  onClick={() => toggleMenu("setupAds")}
  className={`mt-1 cursor-pointer transform transition-transform duration-300 text-purple-800 ${open.setupAds ? "rotate-180" : "rotate-0"}`}
/>

               
                </div>
            </div>
            {open.setupAds && (
  <div
    className={`transform transition-all duration-1000 bg-slate-500 ease-in-out ${
      open.setupAds ? "h-[100px] opacity-100  " : "h-[2px] opacity-0"
    }`}
  >
    {/* <SetUpAds /> */}
  </div>
)}
          </div>
        </div>
        <div className="w-full border p-2 bg-[#ffffff] rounded-2xl">
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="h-[40px] text-[#000] w-[40px] border border-dashed flex items-center justify-center rounded-2xl">
                2
              </div>
              <div className="text-[#171717] flex justify-between items-center w-[92%]">
                <div className="text-[14px] font-semibold">Targetting</div>
                <IoIosArrowDown 
  onClick={() => toggleMenu("targetting")}
  className={`mt-1 cursor-pointer transform transition-transform duration-300 text-purple-800 ${open.targetting ? "rotate-180" : "rotate-0"}`}
/>
              </div>
            </div>
            {open.targetting && <Targetting />}
          </div>
        </div>
        <div className="w-full border p-2 bg-[#ffffff] rounded-2xl">
          <div className="">
            <div className="flex gap-2 items-center">
              <div className="h-[40px] text-[#000] w-[40px] border border-dashed flex items-center justify-center rounded-2xl">
                3
              </div>
              <div className="text-[#171717] flex justify-between items-center w-[92%]">
                <div className="text-[14px] font-semibold">Payment & Review</div>
                <IoIosArrowDown 
  onClick={() => toggleMenu("payments")}
  className={`mt-1 cursor-pointer transform transition-transform duration-300 text-purple-800 ${open.payments ? "rotate-180" : "rotate-0"}`}
/>
              </div>
            </div>
            {open.payments && <Payments />}
          </div>
        </div>
      </div>
      
      {/* left side  */}
      <div className="w-[50%] bg-slate-50 h-full">  
        {/* header  */}
        <div className="bg-white h-[60px] flex justify-between p-2 items-center border-b">
          <div className="text-[#000] font-semibold">Preview</div>
          <div className="text-[#000] flex gap-2 items-center">
            <div className="text-[#000] p-2 px-4 border border-dashed rounded-xl">Discard</div>
            <div className="text-[#f9f9f9] bg-blue-400 p-2 px-4 rounded-xl">Save</div>
          </div>
        </div>
        {/* Demo post  */}
        <div className="h-[90%] w-full flex items-center justify-center">
          <div className=" min-w-[200px] w-[60%] border border-dashed rounded-3xl p-2">
            <div className="h-full min-w-[196px] w-full bg-white rounded-3xl p-2">
              <div className="flex p-2 h-[60px] items-center gap-2">
                <div className="h-[40px] w-[40px] border flex items-center justify-center rounded-2xl">
                  Dp
                </div>
                <div className="text-[#171717]">
                  <div className="text-[14px] font-semibold">
                    Community Name
                  </div>
                  <div className="text-[12px] font-medium"> by User</div>
                </div>
              </div>
              <div className="bg-slate-50 rounded-2xl w-full p-2">
                <div className="h-[250px] w-full rounded-2xl text-[#575757] bg-white flex items-center flex-col justify-between">
                  <div className="mt-[20%]">
                    <div className="p-2 px-6 rounded-xl border border-dashed text-[14px]">
                      +
                    </div>
                    <div className="font-medium">Add post</div>
                  </div>
                  <div className="bg-[#2D9AFF] flex items-center pl-2 gap-2 text-white w-full h-[40px] rounded-b-2xl">
                    Call to action
                    <IoIosArrowRoundForward className="text-[30px]" />
                  </div>
                </div>
                <div className="flex  h-[50px] items-center gap-2">
                  {/* <div className='h-[40px] w-[40px] border flex items-center justify-center rounded-2xl'>Dp</div> */}
                  <div className="text-[#171717]">
                    <div className="text-[14px] font-semibold">Headline</div>
                    <div className="text-[12px] font-medium"> Description</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

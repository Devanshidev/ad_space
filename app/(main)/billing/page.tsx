import React from "react";
import { PiWallet } from "react-icons/pi";
import { TbInfoSquareRounded } from "react-icons/tb";

const page = () => {
  return (
    <div className="h-full w-full text-black p-2 bg-white">
      <div className="text-2xl font-semibold py-1 pn:max-sm:text-[22px]">
        Summary
      </div>
      <div className="p-2 space-y-2 h-full">
        <div className="w-full flex gap-2 rounded-xl h-[25%]  pn:max-sm:flex-col pn:max-sm:h-[60%]">
          {/* Balance */}
          <div className="h-full w-full rounded-2xl flex border-[1px] border-dotted  ">
            <div className="h-full w-[50%] p-4 space-y-2">
              <div className="text-xl font-semibold pn:max-sm:text-[18px]">
                Current Balance
              </div>
              <div className="text-[12px] text-[#464D61] flex gap-2 items-center">
                <PiWallet className="text-[14px] text-[#464D61]" />
                Available Funds
              </div>
              <div className="text-emerald-500 text-xl font-semibold pn:max-sm:text-[18px]">
                ₹87,679.85
              </div>
              <div className="py-2 mr-6 rounded-xl text-emerald-500 border-[1px] flex items-center justify-center border-emerald-500   pn:max-sm:py-1">
                Add funds
              </div>
            </div>
            <div className="h-full w-[50%] p-4 space-y-2">
              <div className="text-[12px] text-[#464D61] flex gap-2 items-center pn:max-sm:hidden">
                Last Payment on:
                <div className="text-[#939AAD] ">Aug 16, 2024</div>
              </div>
              <div className="text-[12px] text-[#464D61] flex gap-2 items-center">
                Total Credits{" "}
                <TbInfoSquareRounded className="text-[14px] text-[#464D61]" />
              </div>
              <div className="text-xl font-semibold pn:max-sm:text-[18px]">
                ₹87,679.85
              </div>
              <div className="text-[#939AAD] pn:max-sm:text-[14px]">
                Expiring On Aug 20,2025
              </div>
            </div>
          </div>
          {/* Payments */}
          <div className="h-full w-full rounded-2xl border-[1px] border-dotted flex ">
            <div className="h-full w-[50%] p-4 space-y-2">
              <div className="text-xl font-semibold pn:max-sm:text-[18px]">
                Month
              </div>
              <div className="text-[12px] text-[#464D61] flex gap-2 items-center">
                <PiWallet className="text-[14px] text-[#464D61]" />
                Net Cost
              </div>
              <div className=" text-xl font-semibold pn:max-sm:text-[18px]">
                ₹87,679.85
              </div>
              <div className="py-2 mr-6 rounded-xl text-emerald-500 border-[1px] flex items-center justify-center border-emerald-500 pn:max-sm:py-1">
                Add funds
              </div>
            </div>
            <div className="h-full w-[50%] p-4 space-y-2">
              <div className="text-xl font-semibold pn:max-sm:text-[18px]">
                {"< May >"}
              </div>
              <div className="text-[12px] text-[#464D61] flex gap-2 items-center">
                Last Payments{" "}
                <TbInfoSquareRounded className="text-[14px] text-[#464D61]" />
              </div>
              <div className="text-xl font-semibold pn:max-sm:text-[18px]">
                ₹87,679.85
              </div>
              <div className="text-[#939AAD] pn:max-sm:text-[14px]">
                Expiring On Aug 20,2025
              </div>
            </div>
          </div>
        </div>
        {/* Transactions */}
        <div className="sm:max-h-[60%] w-full border-[1px] border-dotted">
          <div className="w-full p-4 flex justify-between items-center">
            <div className="text-xl font-semibold pn:max-sm:text-[18px]"> Transaction History </div>
          </div>

          <div className="w-full overflow-x-auto">
            <div className="min-w-[600px] w-full p-4 bg-[#F8FAFC] flex justify-between items-center">
              <div className="text-[14px] w-[16%] font-semibold pn:max-sm:mr-5">Transaction ID</div>
              <div className="text-[14px] w-[16%] font-semibold">Type</div>
              <div className="text-[14px] w-[16%] font-semibold">Date</div>
              <div className="text-[14px] w-[16%] font-semibold">Status</div>
              <div className="text-[14px] w-[16%] font-semibold">Amount</div>
              <div className="text-[14px] w-[16%] font-semibold">Invoice</div>
            </div>
            <div className="min-w-[600px] w-full p-4 border-b-[1px] border-dotted flex justify-between items-center">
              <div className="text-[14px] w-[16%] pn:max-sm:mr-5 pn:max-sm:text-[13px]">962296152</div>
              <div className="text-[14px] w-[16%] pn:max-sm:text-[13px]">Top-Up</div>
              <div className="text-[14px] w-[16%] pn:max-sm:text-[13px]">08 Jan, 2022 04:39:23</div>
              <div className="text-[14px] w-[16%] pn:max-sm:text-[13px]">Success</div>
              <div className="text-[14px] w-[16%] pn:max-sm:text-[13px]">$217.90</div>
              <div className="text-[14px] w-[16%] font-semibold rounded-xl text-emerald-500 border-[1px] py-1 flex items-center justify-center border-emerald-500 pn:max-sm:text-[13px]">
                Download
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

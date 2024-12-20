import React from "react";

const Payment = () => {
  return (
    <div>
      <div className="w-full border px-2 py-3 bg-[#ffffff] rounded-2xl mt-6">
        <div className="flex gap-2 items-center justify-between mx-4">
          <div className="text-[15px] font-semibold">Add Payment Method</div>
          <div className="border px-5 py-1 bg-[#ffffff] rounded-xl">
            <button className="text-[15px] font-semibold">Add money</button>
          </div>
        </div>
      </div>
      <div className="text-[14px] text-gray-500 mt-4 p-2">
        This campaign will begin at the scheduled time, pending approval. By
        submitting your ad for approval, you agree to Grovyo’s Terms for
        Self-Serve Advertising.
      </div>
      <div className="w-full border p-2 bg-[#ffffff] rounded-2xl mt-3">
        <div className="p-2 font-semibold text-[15px]">Preview</div>
        <div className="flex  p-2 justify-between w-[60%]">
          <div className="flex-col">
            <div className="text-[15px] text-[#686B6E] font-semibold">Ad Name</div>
            <div className="text-[13px] font-semibold">
              Style with Our Latest Watch Collections
            </div>
          </div>
          <div className="flex-col">
            <div className="text-[15px] text-[#686B6E] font-semibold">Ad Goal</div>
            <div className="text-[13px] font-semibold">Gadgets & Widgets</div>
          </div>
        </div>
      </div>
      {/* Budget */}
      <div className="border-t mt-6 p-4 flex justify-between w-full">
        <div className="flex-col  w-[40%]">
          <div className="text-[15px] text-[#686B6E] font-semibold p-2">Budget</div>
          <div className="flex  p-2">
            <div className="mr-6">
              <div className="text-[13px] font-semibold">Total Budget</div>
              <div className="text-[13px] font-semibold">₹ 500000</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold ">Daily Budget</div>
              <div className="text-[13px] font-semibold">₹ 500000</div>
            </div>
          </div>
        </div>
        <div className="flex-col  w-[60%]">
          <div className="text-[15px] text-[#686B6E] font-semibold  p-2">
            Date & Time
          </div>
          <div className="flex p-2 ">
            <div className="mr-6">
              <div className="text-[13px] font-semibold">Start Date</div>
              <div className="text-[13px] font-semibold">05-10-2025</div>
            </div>
            <div>
              <div className="text-[13px] font-semibold">End Date</div>
              <div className="text-[13px] font-semibold">05-10-2025</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full border-t mt-2 p-4">
        <div className="text-[15px] text-[#686B6E] font-semibold p-2">Target People</div>
        <div className="p-2  flex justify-between w-[60%]">
          <div className="flex-col mr-4">
            <div className="text-[13px] font-semibold ">Gender</div>
            <div className="text-[13px] font-semibold ">Male</div>
          </div>
          <div className="flex-col mr-4">
            <div className="text-[13px] font-semibold ">Age Group</div>
            <div className="text-[13px] font-semibold ">All Age Group</div>
          </div>
          <div className="flex-col">
            <div className="text-[13px] font-semibold ">Call-to-Action</div>
            <div className="text-[13px] font-semibold ">Order Now</div>
          </div>
        </div>
      </div>
      <div className="w-full border-t  mt-2 p-4 flex ">
        <div className="flex-col mr-10">
          <div className="text-[15px] text-[#686B6E] font-semibold p-2">Location</div>
          <div className="flex gap-2 mt-2  space-x-2">
            <div className="rounded-xl bg-[#F3F4F6] py-2 px-4 text-[12px] font-semibold ">Kanpur</div>
            <div className="rounded-xl bg-[#F3F4F6] py-2 px-4 text-[12px] font-semibold">Lucknow</div>
            <div className="rounded-xl bg-[#F3F4F6] py-2 px-4 text-[12px] font-semibold">Noida</div>
          </div>
        </div>
        <div className="flex-col">
          <div className="text-[15px] text-[#686B6E] font-semibold p-2">Type of Ad</div>
          <div className="flex gap-2 mt-2 space-x-2">
            <div className="rounded-xl bg-[#F3F4F6] py-2 px-4 text-[12px] font-semibold">In Feed Ads</div>
            <div className="rounded-xl bg-[#F3F4F6] py-2 px-4 text-[12px] font-semibold">Search Ads</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

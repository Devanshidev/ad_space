import Image from "next/image";
import React from "react";
import { FaCoins } from "react-icons/fa";
import { LiaCoinsSolid } from "react-icons/lia";
import { PiWallet } from "react-icons/pi";

const header = () => {
  return (
    <div className="h-full bg-white flex items-center justify-between px-2 w-full border-b-[1px] text-[#292929]">
      <div className="text-[16px] font-semibold">User name</div>
      <div className="flex text-[14px] gap-2">
        <div className="p-2 px-4 pn:max-sm:hidden  border-[1px] border-green-500 bg-[#76ff74ae] flex items-center gap-2 rounded-xl font-semibold">
          <FaCoins className="text-[#FFF066] " />
          Get $100 AD Credit
        </div>
        <div className="p-2 px-4 border-[1px] flex items-center gap-2 rounded-xl font-semibold">
          <PiWallet className="text-[18px]" />
          $100
        </div>
        <div className="h-[40px] w-[40px] flex items-center justify-center rounded-2xl border-[1px] border-dashed ">
          DP
          {/* <Image src={} className='h-[38px] w-[38px] rounded-2xl' alt='dp' /> */}
        </div>
      </div>
    </div>
  );
};

export default header;

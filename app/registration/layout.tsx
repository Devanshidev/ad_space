import React, { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import adspace from "../assets/adspace.png";
type LayoutProps = {
    children: ReactNode;
  };
  
  const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      
      <div className="rounded-xl bg-white w-[10%] p-4 flex shadow-2xl shadow-gray-300 ml-2">
        <Image src={adspace} alt="adspace" className="w-[32px] h-[32px]" />
        <div>
          <div className="text-[18px] font-semibold ml-1">Ad Space</div>
          <div className="text-[11px] -mt-1 ml-9">by Grovyo</div>
        </div>
        </div>
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
        </div>
      
      {children}
    </div>
  );
};

export default layout;

import React, { useState } from "react";
import { IoMdLogOut } from "react-icons/io";
import { IoCreateOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiBillLine } from "react-icons/ri";
import image8 from "../assets/adspace.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
// import Cookies from "js-cookie";
import toast from "react-hot-toast";
const navbar = () => {
  const [pop, setPop] = useState<boolean>(false);
  const router = useRouter();

  const openPopup = (): void => setPop(true);
  const closePopup = (): void => setPop(false);

  const logout = async (): Promise<void> => {
    toast.success("Log Out Successfully!");
    // Cookies.remove("auth");
    await router.push("/");
  };
  return (
    <>
      {/* Logout pop-up Open */}
      {pop && (
        <div className="fixed inset-0 w-screen h-screen bg-[#1d1d1d31] flex justify-center items-center ">
          <div className="md:w-1/3 rounded-lg shadow-lg bg-white my-3">
            <div className="flex justify-between border-b border-gray-100 px-5 py-4">
              <div>
                <span className="font-bold text-gray-700 text-lg">
                  Sign Out
                </span>
              </div>
              <div>
                <button>
                  <i className="fa fa-times-circle text-red-500 hover:text-red-600 transition duration-150"></i>
                </button>
              </div>
            </div>

            <div className="px-5 pt-4 text-gray-600">
              Are you sure you want to log out?
            </div>

            <div className="px-5 py-4 gap-3 flex justify-end">
              <button
                onClick={closePopup}
                className="text-sm py-2 px-3 border bg-white rounded-xl text-black transition duration-150"
              >
                Cancel
              </button>
              {/* <button
                onClick={logout}
                className="text-sm py-2 px-3 hover:bg-red-600 border-[1px] border-red-600 rounded-xl text-red-600 hover:text-white transition duration-150"
              >
                Log Out
              </button> */}
            </div>
          </div>
        </div>
      )}
      {/* Default */}
      <div className=" h-full w-full sm:border-r-[1px] bg-white sm:p-4 flex flex-col  pn:max-sm:flex-row items-center justify-between text-[#2b2b2b] ">
        {/* Logo and Name */}
        <div className="flex md:pl-4 h-[60px] w-[60px] justify-center items-center rounded-2xl gap-2 pn:max-sm:hidden">
          <Image
            className="h-[24px] md:mt-1 w-[24px] pn:max-sm:w-[12px] pn:max-sm:h-[12px]"
            src={image8}
            alt="User Avatar"
          />
          <div className="text-[22px] font-semibold pn:max-md:hidden">
            Adspace
            <div className="text-[12px] ml-8 font-semibold">by Grovyo</div>
          </div>
        </div>
        <div className="sm:h-[50%] h-full bg-white pn:max-sm:w-full flex flex-col justify-between  ">
          {/* Tabs */}
          <div className="sm:space-y-1 pn:max-sm:flex-row flex-col w-full h-full flex sm:justify-center pn:max-sm:justify-between px-4 items-center ">
            <Link
              href={"/dashboard"}
              className="sm:w-full justify-center pn:max-sm:h-full rounded-none px-2  sm:rounded-2xl pn:max-md:flex-col duration-100 hover:bg-slate-50 sm:py-2 items-center flex sm:gap-2 "
            >
              <MdOutlineAnalytics className="text-2xl h-[28px] w-[28px] " />
              <div className="pn:max-sm:text-[13px]">Dashboard</div>
            </Link>
            <Link
              href={"/createAds"}
              className="sm:w-full  justify-center pn:max-sm:h-full rounded-none px-2  sm:rounded-2xl pn:max-md:flex-col duration-100 hover:bg-slate-50 sm:py-2 items-center flex sm:gap-2 "
            >
              <IoCreateOutline className="text-2xl h-[28px] w-[28px] " />
              <div className="pn:max-sm:text-[13px]">CreateAds</div>
            </Link>
            <Link
              href={"/billing"}
              className="sm:w-full  justify-center pn:max-sm:h-full rounded-none px-2  sm:rounded-2xl pn:max-md:flex-col duration-100 hover:bg-slate-50 sm:py-2 items-center flex sm:gap-2 "
            >
              <RiBillLine className="text-2xl h-[28px] w-[28px] " />
              <div className="pn:max-sm:text-[13px]">Billing</div>
            </Link>
            <Link
              href={"/settings"}
              className="sm:w-full justify-center pn:max-sm:h-full rounded-none px-2  sm:rounded-2xl pn:max-md:flex-col duration-100 hover:bg-slate-50 sm:py-2 items-center flex sm:gap-2 "
            >
              <IoSettingsOutline className="text-2xl h-[28px] w-[28px] " />
              <div className="pn:max-sm:text-[13px]">Settings</div>
            </Link>
          </div>
        </div>
        {/* Logout  */}
        <div
          onClick={openPopup}
          className="sm:w-full justify-center pn:max-sm:h-full text-red-500 rounded-none px-2 pn:max-sm:hidden sm:rounded-2xl pn:max-md:flex-col duration-100 hover:bg-slate-50 sm:py-2 items-center flex sm:gap-2 "
        >
          <IoMdLogOut className="text-2xl h-[28px] w-[28px]" />
          <div className="pn:max-sm:text-[13px]">Log Out</div>
        </div>
      </div>
    </>
  );
};

export default navbar;

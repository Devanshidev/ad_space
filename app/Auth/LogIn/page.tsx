import React from 'react'
import Image from 'next/image'
import adspace from "@/app/assets/adspace.png"
import { LuChartSpline } from 'react-icons/lu'
import { MdOutlineInsights } from 'react-icons/md'
import { LiaAwardSolid } from "react-icons/lia";
import { BsTelephone } from 'react-icons/bs'
import { IoMailOutline } from 'react-icons/io5'
import { HiOutlineArrowRight } from 'react-icons/hi2'
import Link from 'next/link'
const page = () => {
  return (
    <div className=' w-full h-screen overflow-hidden'>
    <div className='rounded-xl bg-white w-[10%] p-4 flex shadow-2xl shadow-gray-200'> 
    <Image
    src ={adspace}
    alt = "adspace"
    className='w-[32px] h-[32px]'/>
    <div className=''>
    <div className='text-[18px] font-semibold  ml-1'> Ad Space </div>
    <div className='text-[11px] -mt-1 ml-9'> by Grovyo </div>
    </div>
    </div>
    <div className='flex'>
    <div className='w-[50%]  h-screen flex-col flex justify-center items-center space-y-10 -mt-6'>
    <div className='flex gap-5'>
    <LuChartSpline className='text-[40px] text-blue-600' />
    <div>
    <div>Boost Your Sales Instantly</div>
    <div className='text-[14px] text-gray-600'>Unlock the power of targeted advertising on our platform.</div>
    <div className='text-[14px] text-gray-600'>Create impactful ads that convert and drive sales, helping your business grow.</div>
    </div>
    </div>
    <div className='flex gap-5'>
    <MdOutlineInsights className='text-[40px] text-blue-600' />
    <div>
    <div>Discover Powerful Insight </div>
    <div className='text-[14px] text-gray-600'>Gain access to in-depth analytics that reveal how your ads are performing. </div>
    <div className='text-[14px] text-gray-600'>Use this data to optimize your campaigns and achieve better results.</div>
    </div>
    </div>
    <div className='flex gap-5'>
    <LiaAwardSolid className='text-[40px] text-blue-600' />
    <div>
    <div>Maximize Your Rewards </div>
    <div className='text-[14px] text-gray-600'>Join our cashback program and earn more as you advertise. The more</div>
    <div className='text-[14px] text-gray-600'>campaigns you run, the greater your rewards, making every ad investment count.</div>
    </div>
    </div>
    </div>
    <div className='w-[50%]  h-screen -mt-6 flex justify-center items-center '>
     <div className='w-[55%] bg-white rounded-xl shadow-2xl p-4 shadow-gray-200 flex justify-center items-center flex-col'>
   <div className='font-semibold text-[35px] '>Sign In</div>
   <div className='border py-2  w-full mt-2 rounded-2xl'>
    <div className='flex gap-4 justify-center'>
   <BsTelephone className='mt-1'/>
    Continue with Mobile Number
    </div>
   </div>
   <div className="flex items-center justify-center w-full my-6">
          <hr className="flex-grow border-t border-[#363A3D]" />
          <span className="px-3 text-sm font-medium text-[#686B6E] bg-transparent">
            or
          </span>
          <hr className="flex-grow border-t border-[#363A3D]" />
        </div>
        <div  className="w-full flex items-center rounded-2xl border  ">
        <div className="dark:text-white pl-2 flex">
                <IoMailOutline className="text-lg text-blue-800" />
                <div className="h-[18px] ml-2 border-r border-[#acafb2]" />
              </div>
              <input
               type='text'
               placeholder='Enter E-mail id '
              className="h-[50px] w-full outline-none rounded-r-2xl px-2 p-2 "
            />
        </div>
        <div  className="w-full flex items-center rounded-2xl mt-2 border">
       
              <input
               type='password'
               placeholder='Enter Password'
              className="h-[50px] w-full outline-none rounded-2xl px-2 p-2 "
            />
        </div>
        <div className="mt-4 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600  flex justify-center items-center">
          Continue
          <HiOutlineArrowRight className='ml-4'/>
        </div>
        <div className="flex justify-center items-center mt-5">
          <div className="text-[#686B6E] text-[12px]">Don't have an account?</div>
          <Link
          href={"/registration?step=1 "}
           className="text-[12px] dark:text-black text-blue-600 ml-2">Sign up</Link>
        </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default page

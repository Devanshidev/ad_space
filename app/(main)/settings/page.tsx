import React from 'react'

const page = () => {
  return (
    <div className='h-full w-full text-black p-1 bg-white '>
      <div className='text-2xl font-semibold py-2'>Settings</div>
      <div className='p-2'>
      <div className='w-full rounded-xl border-[1px] space-y-2 p-2'>
        <div className='flex w-full justify-between px-2 items-center'>
      <div className='text-xl font-semibold '>Account</div>
      <div className='font-semibold text-blue-500'>Edit</div></div>
      {/* Billing Details */}
      <div className=' w-full border-2 border-dotted rounded-lg '>
        <div className='  w-full rounded-t-lg flex justify-between px-2 py-2 bg-[#FAFAFA]'>
          <div className='font-semibold'>Billing details</div>
          <div className=''>Password</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted '>
          <div className=''>Name</div>
          <div className=''>hhahhhh</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted '>
          <div className=''>Phone</div>
          <div className=''>+91 0000000000</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted '>
          <div className=''>Location</div>
          <div className=''>India</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 rounded-b-lg bg-white  '>
          <div className=''>Advertiser Id</div>
          <div className=''>dxq902</div>
        </div>
      </div>
      {/* Tax Information */}
      <div className=' w-full border-2 border-dotted  rounded-lg '>
        <div className='  w-full rounded-t-lg flex justify-between px-2 py-2 bg-[#FAFAFA]'>
          <div className='font-semibold'>Tax Information</div>
          <div className=''>Password</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted'>
          <div className=''>Country</div>
          <div className=''>hhahhhh</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted '>
          <div className=''>Tax Registration Id</div>
          <div className=''>+91 0000000000</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 bg-white border-b-2 border-dotted '>
          <div className=''>Business Address</div>
          <div className=''>India</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 border-b-2 border-dotted bg-white  '>
          <div className=''>Region</div>
          <div className=''>dxq902</div>
        </div>
        <div className=' w-full flex justify-between px-2 py-2 rounded-b-lg bg-white  '>
          <div className=''>Postal Code</div>
          <div className=''>dxq902</div>
        </div>
      </div>
      </div>
      </div>
    </div>
  )
}

export default page
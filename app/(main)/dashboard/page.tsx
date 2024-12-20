import React from 'react'
import Analytics from '@/app/components/analytics'
import Table from '@/app/components/table'
import { WiRefresh } from 'react-icons/wi'
import DateModal from '@/app/components/dateModel'

const page = () => {
  return (
    <div className='h-full overflow-auto w-full text-black p-1 bg-white'>
      <div className='flex justify-between items-center   pn:max-sm:flex-col'>
      <div className='text-2xl font-semibold py-2 pn:max-sm:text-[20px]   pn:max-sm:w-full'>Dashboard</div>
      <div className='flex gap-2 items-center pn:max-sm:w-full'>
      <div className='text-[18px] border-[1px] border-dashed p-2 text-[#747677] rounded-lg hover:bg-slate-50 pn:max-sm:p-5'><WiRefresh className='' /></div>
      {/* Dates */}
      <div className='flex  bg-white border-[1px] text-[12px] font-semibold text-[#747677] border-dashed rounded-lg '>
        <div className='border-r-[1px] border-dashed p-2 rounded-l-lg hover:bg-slate-50 pn:max-sm:p-3  pn:max-sm:ml-3 '>last 30 days</div>
        <div className='border-r-[1px] border-dashed p-2 hover:bg-slate-50 pn:max-sm:p-3  pn:max-sm:ml-3 '>last 7 days</div>
        <div className='border-r-[1px] border-dashed p-2 rounded-r-lg hover:bg-slate-50 pn:max-sm:p-3  pn:max-sm:ml-3 '>last 24 hours</div>
      </div>
      <div className=''>
        <div className='text-[12px] border-[1px] border-dashed p-2 text-[#747677] font-semibold rounded-lg hover:bg-slate-50 pn:max-sm:p-5'>
       date
         </div>

      </div>
      </div>
      </div>
      {/*Analytics Section */}
      <Analytics />
       {/* Table Section */}
      <Table />
      
    </div>
  )
}

export default page

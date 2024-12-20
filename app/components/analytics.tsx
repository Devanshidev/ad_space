import React from 'react'

const analytics = () => {
  return (
    <div className='  w-full p-2 '>
      <div className='flex justify-between w-full gap-2'>
        <div className='flex items-center h-[80px] w-full gap-2 justify-between  pn:max-sm:grid grid-cols-2  '>
          {/* Amount */}
          <div className='bg-white w-[25%] space-y-2 border-[1px] rounded-2xl p-2 h-full pn:max-sm:w-full pn:max-sm:h-[100%]'>
            <div className='flex justify-between items-center '>
              <div className='font-semibold text-[#a0a0a0]'>Amount Spent</div>
              <div className=' h-4 w-4 rounded-md'></div>
            </div>
            <div className='font-semibold'>₹0.00</div>
          </div>
          {/* Impressions */}
        <div className='bg-white w-[25%] space-y-2 border-[1px] rounded-2xl p-2 h-full pn:max-sm:w-full pn:max-sm:h-[100%]'>
            <div className='flex justify-between items-center '>
              <div className='font-semibold text-[#a0a0a0]'>Impressions</div>
              <div className='bg-blue-400 h-4 w-4 rounded-md'></div>
            </div>
            <div className='font-semibold'>0</div>
          </div>
          {/* Clicks */}
        <div className='bg-white w-[25%] space-y-2 border-[1px] rounded-2xl p-2 h-full pn:max-sm:w-full pn:max-sm:h-[100%]'>
            <div className='flex justify-between items-center '>
              <div className='font-semibold text-[#a0a0a0]'>Click</div>
              <div className='bg-yellow-400 h-4 w-4 rounded-md'></div>
            </div>
            <div className='font-semibold'>0</div>
          </div>
          {/* CPC */}
        <div className='bg-white w-[25%] space-y-2 border-[1px] rounded-2xl p-2 h-full pn:max-sm:w-full pn:max-sm:h-[100%]'>
            <div className='flex justify-between items-center '>
              <div className='font-semibold text-[#a0a0a0]'>CPC</div>
              <div className='bg-green-400 h-4 w-4 rounded-md'></div>
            </div>
            <div className='font-semibold'>0</div>
          </div>
        </div>
       
      </div>
       {/* Graph  */}
       <div className=' bg-white border-[1px] rounded-2xl w-full h-[400px] mt-2 p-4 pn:max-sm:mt-20'>
          <div className='flex items-center justify-between'>
            <div className='text-[18px] font-medium'>Campaign (0)</div>
            <div className='text-[12px] border-[1px] p-2 text-[#747677] font-semibold rounded-lg hover:bg-slate-50'>ads name</div>
          </div>
        </div>
    </div>
  )
}

export default analytics

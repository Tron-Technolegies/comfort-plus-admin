import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col p-6 gap-7'>

        <div className="h-[50px] w-[503.84px]">
            <p className='text-[24px] font-semibold'>Order Tracking</p>
            <p className='text-[14px] text-[#94A3B8]'>Monitor and manage real-time order statuses and operations.</p>
        </div>

        <div>
            
            <div className='h-[34px] w-[374.4px] flex gap-5'>

                <button className="h-[34px] w-[50px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                    <p className='text-[13px] font-medium'>All</p>
                </button>

                <button className="h-[34px] w-[104.55px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center p-2">
                    <span className='h-[10px] w-[10px] rounded-[5px] bg-[#94A3B8]'></span>
                    <p className='text-[13px] font-medium'>Received</p>
                </button>

                <button className="h-[34px] w-[104.55px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center p-2">
                    <span className='h-[10px] w-[10px] rounded-[5px] bg-[#F59E0B]'></span>
                    <p className='text-[13px] font-medium'>Progress</p>
                </button>

                <button className="h-[34px] w-[104.55px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center p-4">
                    <span className='h-[10px] w-[10px] rounded-[5px] bg-[#10B981]'></span>
                    <p className='text-[13px] font-medium'>Ready</p>
                </button>
            </div>
            
        </div>
                
    </div>
  )
}

export default Card
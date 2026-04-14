import React from 'react'

const Progress = () => {
  return (
    <div className='flex p-6 gap-7'>

        <div className='h-[650px] w-[300px] bg-[#E6F0FF] rounded-[8px] border-[1px] border-[#00000014] flex flex-col'>

            <div className='h-[52px] w-[300px] bg-white rounded-t-[8px] flex justify-between items-center p-5'>
                <div className='flex items-center gap-1'>
                    <span className='h-[10px] w-[10px] rounded-[5px] bg-[#94A3B8]'></span>
                    <p className='text-[13px] font-medium'>Received</p>
                </div>

                <div className='h-[19px] w-[27.48px] rounded-[12px] bg-[#E6F2FF] flex items-center justify-center'>
                    <p>3</p>
                </div>
            </div>

            <div className='flex-1 overflow-y-scroll overflow-x-hidden flex flex-col gap-4 p-5 items-center'>

                <div className='h-[193px] w-[260px] bg-white rounded-[8px] border-[1px] border-[#00000014] flex-shrink-0 flex flex-col gap-3 p-4'>
                    <div className='flex justify-between items-center'>
                        <p className='text-[14px] font-semibold'>order id</p>
                        <p className='text-[12px] font-medium text-red-500'>time</p>
                    </div>
                    <div className=''>
                        <p className='text-[14px] font-medium'>John Doe</p>
                        <div className='flex gap-2 items-center'>
                            <p className='text-[13px] font-medium text-[#94A3B8]'>5 items</p>
                            <span className='h-[6px] w-[6px] rounded-[5px] bg-[#94A3B8]'/>
                            <p className='text-[13px] font-medium text-[#94A3B8]'>$900</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <button className="h-[24px] w-[57.92px] bg-[#EF4444] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                            <p>Express</p>
                        </button>
                        <button className="h-[24px] w-[69.75px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                            <p>Pickup</p>
                        </button>
                    </div>
                    <div className='flex gap-3'>
                        <button className="h-[33px] w-[120px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                            <p>Details</p>
                        </button>
                        <button className="h-[33px] w-[120px] bg-[#3A82A4] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                            <p>Start Processssss</p>
                        </button>
                    </div>
                </div>
   
            </div>

        </div>

    </div>
  )
}

export default Progress

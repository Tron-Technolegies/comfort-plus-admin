import React from 'react'

const Cards = () => {
  return (
    <div className='flex flex-col p-6'>
        <div className="grid grid-cols-3 gap-x-11">

            <div className="p-5 h-[134px] w-[280px] rounded-[8px] shadow">
                <div className='flex flex-col justify-between h-full'>
                <span className='flex justify-between'>
                    <p className='text-[13px]'>Total Customer</p>
                    <div className='h-[32px] w-[32px] rounded-[6px] bg-[#E6F2FF] flex justify-center items-center'>
                        <img className='h-[18px]' src="cp c customer.svg" alt="" />
                    </div>
                </span>
                <span>
                <p className='text-[24px] font-semibold'>00000</p>
                <p className='text-[12px] font-medium'>mmmmmmmmm</p>
                </span>
                </div>
            </div>

            <div className="p-5 h-[134px] w-[280px] rounded-[8px] shadow">
                <div className='flex flex-col justify-between h-full'>
                <span className='flex justify-between'>
                    <p className='text-[13px]'>New Customers (This Month)</p>
                    <div className='h-[32px] w-[32px] rounded-[6px] bg-[#E6F2FF] flex justify-center items-center'>
                        <img className='h-[18px]' src="cp new cust.svg" alt="" />
                    </div>
                </span>
                <span>
                <p className='text-[24px] font-semibold'>0000</p>
                <p className='text-[12px] font-medium'>mmmmmmmmm</p>
                </span>
                </div>
            </div>

            <div className="p-5 h-[134px] w-[280px] rounded-[8px] shadow">
                <div className='flex flex-col justify-between h-full'>
                <span className='flex justify-between'>
                    <p className='text-[13px]'>Active Subscriptions</p>
                    <div className='h-[32px] w-[32px] rounded-[6px] bg-[#E6F2FF] flex justify-center items-center'>
                        <img className='h-[18px]' src="cp c sub.svg" alt="" />
                    </div>
                </span>

                <span>
                <p className='text-[24px] font-semibold'>00000</p>
                <p className='text-[12px] font-medium'>mmmmmmmmm</p>
                </span>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Cards
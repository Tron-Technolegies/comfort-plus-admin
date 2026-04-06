import React from 'react'

const Active_Orders = () => {
  return (
    <div className="flex flex-col p-6 space-y-6 ">

    <div className='h-[299px] w-[950px] border-[1px] border-[#00000014] rounded text-[12px] shadow'>

        <div className='h-[62px] w-[950px] rounded-t text-[12px] flex justify-between items-center p-5 border-b-[1px] border-[#00000014]'>
            <p className='text-[16px] font-semibold'>Active Orders</p>
            <button className='h-[29px] w-[72.09px] border-[1px] border-[#00000014] rounded text-[12px]'>View All</button>
        </div>

        <div className='flex justify-between items-center border-b-[1px] border-[#00000014]'>

          <div className='h-[40px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[12px] font-medium'>Order ID</p>
          </div>
          <div className='h-[40px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[12px] font-medium'>Customer</p>
          </div>
          <div className='h-[40px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[12px] font-medium'>Type</p>
          </div>
          <div className='h-[40px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[12px] font-medium'>Status</p>
          </div>
          <div className='h-[40px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[12px] font-medium'>Amount</p>
          </div>
            
        </div>

        <div className='flex justify-between items-center border-b-[1px] border-[#00000014]'>

          <div className='h-[65px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[14px] font-medium'>#ORD-0921</p>
          </div>
          <div className='h-[65px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[14px] font-medium'>jhon</p>
          </div>
          <div className='h-[65px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[14px] font-medium'>Pickup/Delivery</p>
          </div>
          <div className='h-[65px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[14px] font-medium'>In Progress</p>
          </div>
          <div className='h-[65px] w-[185.69px] flex justify-between items-center p-5'>
            <p className='text-[14px] font-medium'>$145.00</p>
          </div>

        </div>

    </div>

    </div>
  )
}

export default Active_Orders
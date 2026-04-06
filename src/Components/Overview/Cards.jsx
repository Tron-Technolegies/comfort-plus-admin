import React from 'react'

const Cards = () => {
  return (
    <div className="flex flex-col p-6 space-y-6 min-h-screen">
    
        <div className="flex justify-between items-center">
            <div>
                <h1 className="text-[24px] font-semibold">Overview</h1>
                <p className="text-gray-200 text-[14px]">Real-time summary of your laundry operations</p>
            </div>

            <div className="flex gap-3">
                <button className="h-[29px] w-[70.09px] border-[1px] border-[#00000014] rounded text-[12px] flex justify-around items-center">
                    <img className='h-[12px] w-[12px]' src="cp today.svg" alt="" />
                    <p>Today</p>
                </button>
                <button className="h-[29px] w-[122.95px] bg-[#3A82A4] text-white rounded text-[12px]">Download Report</button>
            </div>
        </div>

        <div className="grid grid-cols-4 gap-x-11">
            <div className="p-5 h-[110px] w-[200px] rounded-[8px] shadow">
                <span>
                    <p className='text-[13px]'>Total Revenue</p>
                </span>
                <p className='text-[28px]'>$00000000</p>
                <p className='text-[13px]'>mmmmmmmmm</p>
            </div>
            <div className="p-5 h-[110px] w-[200px] rounded-[8px] shadow">
                <span>
                    <p className='text-[13px]'>Total Orders</p>
                </span>
                <p className='text-[28px]'>000</p>
                <p className='text-[13px]'>mmmmmmmmm</p>
            </div>
            <div className="p-5 h-[110px] w-[200px] rounded-[8px] shadow">
                <span>
                    <p className='text-[13px]'>Pieces Cleaned</p>
                </span>
                <p className='text-[28px]'>0000</p>
                <p className='text-[13px]'>mmmmmmmmm</p>
            </div>
            <div className="p-5 h-[110px] w-[200px] rounded-[8px] shadow">
                <span>
                    <p className='text-[13px]'>Pending Payments</p>
                </span>
                <p className='text-[28px]'>$00000000</p>
                <p className='text-[13px]'>mmmmmmmmm</p>
            </div>
        </div>

        <div className='flex justify-between'>
            <div className='h-[364px] w-[600px] border-[1px] border-[#00000014] rounded-[8px] shadow'>
                <img src="img.png" alt="" />
            </div>

            <div className='h-[364px] w-[300px] border-[1px] border-[#00000014] rounded-[8px] flex flex-col p-4 shadow'>
                <div className='mb-8'>
                    <p className='text-[16px] font-[600] py-3'>Customer Growth</p>
                </div>

                <div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200 mx-2">
                        <p className="text-gray-500">Total Customers</p>
                        <p className="font-semibold">4,289</p>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200 mx-2">
                        <p className="text-gray-500">New (This Week)</p>
                        <p className="text-green-500 font-semibold">+124</p>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200 mx-2">
                        <p className="text-gray-500">Business Accounts</p>
                        <p className="font-semibold">85</p>
                    </div>

                    <div className="flex justify-between items-center py-3 border-b border-gray-200 mx-2">
                        <p className="text-gray-500">Individuals</p>
                        <p className="font-semibold">4,204</p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default Cards
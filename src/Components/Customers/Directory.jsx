import React from 'react'

const Directory = () => {
  return (
    <div className="flex flex-col p-6">

      <div className="flex justify-between">

          <div className='h-[480px] w-[270px] border-[1px] border-[#00000014] rounded-[8px] shadow'>

            <div className='h-[53px] 270px border-b-[1px] border-[#00000014] p-[16px] flex items-center justify-between'>
              <p className='text-[16px] font-semibold'>Directory</p>
              <img className='h-[12px] w-[13px]' src="cp directory.svg" alt="" />
            </div>

            <div className='h-[73px] w-[270px] border-b-[1px] border-[#00000014] flex justify-around items-center'>

                <div className='h-[40px] w-[40px] rounded-[20px] bg-red-500'>
                  <img src="" alt="" />
                </div>

                <div className='h-[36px] w-[100px]'>
                  <p className='text-[13px] font-semibold'>John</p>
                  <p className='text-[12px]'>individual</p>
                </div>

                <div className='h-[36px] w-[60px] flex flex-col items-end'>
                  <p className='text-[13px] font-semibold'>$999</p>
                  <p className='text-[12px]'>123 orders</p>
                </div>

            </div>

          </div>

          <div className='h-[480px] w-[650px] border-[1px] border-[#00000014] rounded-[8px] shadow'>

            <div className='flex  justify-between p-[20px] h-[130px] w-[650px] border-b-[1px] border-[#00000014]'>

              <div className='flex justify-between h-[88px] w-[250px]'>
                <div className='h-[80px] w-[80px] rounded-[40px] bg-red-500'>
                  <img src="" alt="" />
                </div>

                <div className='h-[88px] w-[150px] flex flex-col justify-between'>
                  <p className='text-[24px] font-semibold'>John</p>
                  <p className='text-[13px]'>Customer ID: CUST-8842</p>
                  <div className='h-[23px] w-[127px] rounded-[12px] flex items-center-safe justify-center bg-[#FFB020]'>
                    <p className='text-[12px]'>Business Account</p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex gap-3">
                    <button className="h-[33px] w-[96.86px] bg-[#3A82A4] text-white rounded text-[12px]">New Order</button>
                </div>
              </div>

            </div>

            <div className='h-[70px] w-[650px] border-b-[1px] border-[#00000014]'>

            </div>

            <div className='flex flex-col justify-around items-center h-[280px] text-[12px]'>

                <div className='h-[19px] w-[600px] bg-red-500 text-[12px] '>
                    <p className='text-[16px] font-semibold'>Active Orders</p>
                </div>

                <div className='h-[200px] w-[600px] bg-blue-500'>
                  <div className='flex justify-between items-center border-b-[1px] border-[#00000014]'>

                    <div className='h-[40px] w-[103.05px] flex  items-center'>
                      <p className='text-[12px] font-medium'>Order ID</p>
                    </div>
                    <div className='h-[40px] w-[117.77px] flex items-center'>
                      <p className='text-[12px] font-medium'>Customer</p>
                    </div>
                    <div className='h-[40px] w-[134.72px] flex items-center'>
                      <p className='text-[12px] font-medium'>Type</p>
                    </div>
                    <div className='h-[40px] w-[114.23px] flex items-center'>
                      <p className='text-[12px] font-medium'>Status</p>
                    </div>
                    <div className='h-[40px] w-[90.31px] flex items-center'>
                      <p className='text-[12px] font-medium'>Amount</p>
                    </div>
                    <div className='h-[40px] w-[115.92px] flex items-center'>
                      <p className='text-[12px] font-medium'>Amount</p>
                    </div>
                      
                  </div>

                  <div className='flex justify-between items-center border-b-[1px] border-[#00000014]'>

                    <div className='h-[40px] w-[103.05px] flex  items-center'>
                      <p className='text-[12px] font-medium'>Order ID</p>
                    </div>
                    <div className='h-[40px] w-[117.77px] flex items-center'>
                      <p className='text-[12px] font-medium'>Customer</p>
                    </div>
                    <div className='h-[40px] w-[134.72px] flex items-center'>
                      <p className='text-[12px] font-medium'>Type</p>
                    </div>
                    <div className='h-[40px] w-[114.23px] flex items-center'>
                      <p className='text-[12px] font-medium'>Status</p>
                    </div>
                    <div className='h-[40px] w-[90.31px] flex items-center'>
                      <p className='text-[12px] font-medium'>Amount</p>
                    </div>
                    <div className='h-[40px] w-[115.92px] flex items-center'>
                      <p className='text-[12px] font-medium'>Amount</p>
                    </div>

                  </div>
                </div>
                

              </div>

            </div>

      </div>
    </div>
  )
}

export default Directory
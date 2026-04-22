import React from 'react'
import { FiEdit } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";


const Service_card = () => {
  return (
    <div className="flex flex-col p-6 gap-10">

      <div className="flex justify-between">

        <div className="h-[50px] w-[503.84px]">
          <p className="text-[24px] font-semibold">Services & Items</p>
          <p className="text-[14px] text-[#94A3B8]">
            Manage Services and Items
          </p>
        </div>

        <div className="mt-4">
          <button className="h-[33px] w-[80px] bg-[#3A82A4] text-white rounded text-[12px] flex items-center justify-center">
            <IoIosAdd className="text-[15px]"/> Add
          </button>
        </div>
      </div>

        <div className="border-[1px] border-[#00000014] items-center h-[500px] overflow-y-scroll overflow-x-hidden rounded-[16px]">
          <div className="sticky top-0 z-10 bg-white flex justify-between items-center border-b-[1px] border-[#00000014]">
            <div className="h-[40px] w-[103.05px] flex  items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Member</p>
            </div>
            <div className="h-[40px] w-[117.77px] flex items-center  p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Role</p>
            </div>
            <div className="h-[40px] w-[134.72px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Email</p>
            </div>
            <div className="h-[40px] w-[90.31px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Phone</p>
            </div>
            <div className="h-[40px] w-[114.23px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Status</p>
            </div>
            
            <div className="h-[40px] w-[115.92px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Actions</p>
            </div>
          </div>

            <div>
              <div
                className="flex justify-between items-center border-b-[1px] border-[#00000014]"
              >
                <div className="h-[52px] w-[103.05px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium"></p>
                </div>

                <div className="h-[52px] w-[117.77px] flex items-center p-[12px]">
                  <div
                    className="h-[25px] w-[80px] rounded-[60px] flex items-center justify-center border"
                  >
                    <p
                      className="text-[13px] font-medium"
                    >
                    </p>
                  </div>
                </div>

                <div className="h-[52px] w-[134.72px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">
                  </p>
                </div>

                <div className="h-[52px] w-[90.31px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">
                  </p>
                </div>

                <div className="h-[52px] w-[114.23px] flex items-center p-[12px]">
                  <div
                    className="h-[25px] w-[80px] rounded-[60px] flex items-center justify-center border"
                      
                  >
                    <p
                      className="text-[13px] font-medium"
                    >

                    </p>
                  </div>
                </div>

                

                <div className="h-[52px] w-[115.92px] flex items-center gap-[15px] p-[12px]">
                    
                    <div>
                        
                        <button>
                        <FiEdit />
                        </button>
                    </div>

                    <button>
                        <img className="h-[23px]" src="cp delete.svg" alt="" />
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Service_card
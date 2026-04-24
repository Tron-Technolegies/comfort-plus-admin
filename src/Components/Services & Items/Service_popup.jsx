import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import { TbFileDescription } from "react-icons/tb";


const Service_popup = ({setShowservice}) => {
  return (
    <div 
        onClick={() => setShowservice(false)}
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
    >
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[350px] w-[370px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">

            

            <div className='space-y-5'>
                
                <div className="flex justify-between">
                    <div className='flex-col'>
                        <div className='flex items-center gap-1'>
                            <p className='text-[23px] font-bold'>Dry cleaning</p>
                        </div>

                        <div className='h-[20px] w-[80px] text-[13px] rounded-[10px] flex justify-center items-center bg-blue-400'>
                            <p>available</p>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => setShowservice(false)}>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
                

                <div className='flex justify-between'>
                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <IoTimeOutline />
                            <p className='text-[12px]'>Estimated</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>1-2 hr</p>
                        </div>
                    </div>

                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <CiCalendar />
                            <p className='text-[12px]'>Created</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>1-2 hr</p>   
                        </div>
                    </div>

                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <RxUpdate />
                            <p className='text-[12px]'>Updated</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>1-2 hr</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-2'>
                    <div className='flex items-center gap-1'>
                        <TbFileDescription className='text-[#3B82F6]'/>
                        <p>Description</p>
                    </div>
                    <p className='text-[14px] text-slate-500'>End-to-end development of modern, responsive websites built with the latest technologies and optimized for performance.</p>
                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="flex items-center justify-end gap-[15px] ">

                <button className='flex items-center justify-center gap-1 h-[30px] w-[60px] rounded-[10px] shadow'>
                    <FiEdit className='h-[20px]' />
                    <p className='text-[12px]'>Edit</p>
                </button>

                <button className='flex items-center justify-center gap-1 h-[30px] w-[80px] bg-[#FEECEC] text-[#EF4444] rounded-[10px] shadow'>
                    <img className="h-[20px]" src="cp delete.svg" alt="" />
                    <p className='text-[12px]'>Delete</p>
                </button>
            </div>

        </div>
    </div>
  )
}

export default Service_popup
import React from 'react'
import { FiEdit } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";


const Item = () => {
  return (
    <div className="flex flex-col p-6">
      <div className='grid grid-cols-3 gap-6'>

        <div className='h-[160px] w-[300px] rounded-[10px] border-[1px] border-[#00000014] p-[5px]'>

            <div className='flex-col items-center gap-2'>

                <div className='flex items-center justify-center h-[40px] w-[40px] rounded-[10px] bg-[#BFD7ED]'>
                    <FaBoxOpen />
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <span className='h-[7px] w-[7px] rounded-[5px] bg-[#94A3B8]'></span>
                        <p className='text-[15px] font-semibold'>Dry cleaning</p>
                    </div>

                    <div>
                      <p className='text-[14px]'>Available service</p>
                      <p className='text-[13px] text-slate-500'>washing</p>
                    </div>

                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="h-[30px] flex items-center justify-between gap-[15px] pt-2">

              <div>
                <p className='text-[10px] font-bold'>PRICE</p>
                <p className='font-bold'>90</p>
              </div>

              <div className='flex justify-between h-[30px] w-[40px]'>
                <button>
                    <FiEdit className='h-[20px]' />
                </button>

                <button>
                    <img className="h-[20px]" src="/cp delete.svg" alt="" />
                </button>
              </div>
                
            </div>
            
        </div>

      </div>
    </div>
  )
}

export default Item
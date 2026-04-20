import React from 'react'
import { IoSearch } from "react-icons/io5";


const Searchbar = () => {
  return (
    <div className='flex items-center justify-between p-[24px] h-[64px] w-auto border-[1px] border-[#00000014]'>
        <div className='flex items-center p-3 gap-[10px] h-[34px] w-[320px] border-[1px] rounded-[6px] border-[#00000014]'>
          <IoSearch/>
          <input className='text-[13px] h-[34px] w-[320px] outline-none' type="text" placeholder='Search order, customers, or staff...'/>
        </div>

        <div>
          <div className='flex items-center justify-center h-[36px] w-[36px]  border-[1px] rounded-[6px] border-[#00000014]'>
            <img className='h-[18px] w-[18px]' src="cp bell.svg" alt="" />
          </div>
        </div>
    </div>
    
  )
}

export default Searchbar
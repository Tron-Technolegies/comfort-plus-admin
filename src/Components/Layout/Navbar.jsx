import React from 'react'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
  return (
    // <div className="flex h-screen">

      <div className="min-h-screen w-[260px] bg-[#E6F0FF] justify-items-center">

        <div>

          <div className='h-30 w-50'><img className="w-full h-full object-cover" src="C_P logo.png" alt="" /></div>

          <div>
            <p className='text-[11px] font-semibold py-1'>DASHBOARD</p>
            <Link to="/" className='flex text-[14px] font-medium  gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp over.svg" alt="" />Overview</Link>
            <Link to="customer" className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp customer.svg" alt="" />Customers</Link>
          </div>

          <div>
            <p className='text-[11px] font-semibold py-1'>OPERATION</p>
            <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp order.svg" alt="" />Order tracking</Link>
            <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp time.svg" alt="" />Popular Times</Link>
            <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp sub.svg" alt="" />Subscriptions</Link>
          </div>

          <div>
            <p className='text-[11px] font-semibold py-1'>MANAGEMENT</p>
            <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp over.svg" alt="" />Staff & Drivers</Link>
            <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp customer.svg" alt="" />Analytics</Link>
          </div>

          {/* </div>
            <div className="w-50 h-px bg-gray-300"></div>
          <div> */}

        </div>
      </div>

    // </div>
  )
}

export default Navbar
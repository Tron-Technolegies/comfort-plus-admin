import React from 'react'
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

  const getNavClass = ({ isActive }) =>
  `flex text-[14px] h-[35px] font-medium gap-3 py-2 rounded-lg p-[15px] transition hover:scale-105 ${
    isActive
      ? "bg-[#BFD7ED] text-black"
      : "hover:bg-[#BFD7ED] hover:text-black"
  }`;

  return (
    // <div className="flex h-screen">

      <div className="min-h-screen w-[260px] bg-[#E6F0FF] justify-items-center">

        <div>

          <div className='h-30 w-50'><img className="w-full h-full object-cover" src="C_P logo.png" alt="" /></div>

          <div className='w-[227px] space-y-3'>

          <div className='space-y-2'>
            <p className='text-[11px] font-semibold py-1 p-[15px]'></p>

            <NavLink to="/" className={getNavClass}>
              <img className='h-5' src="cp over.svg" alt="" />
              Dashboard
            </NavLink>

            <NavLink to="customer" className={getNavClass}>
              <img className='h-5' src="cp customer.svg" alt="" />
              Customers
            </NavLink>

            {/* <Link to="/" className='flex text-[14px] font-medium  gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp over.svg" alt="" />Overview</Link> */}
            {/* <Link to="customer" className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp customer.svg" alt="" />Customers</Link> */}
          </div>

          <div className='space-y-2'>
            <p className='text-[11px] font-semibold py-1 p-[15px]'>OPERATION</p>

            <NavLink to="Order" className={getNavClass}>
            <img className='h-5' src="cp order.svg" alt="" />
              Order tracking
            </NavLink>

            <NavLink to="times" className={getNavClass}>
            <img className='h-5' src="cp time.svg" alt="" />
              Popular Times
            </NavLink>

            <NavLink to="services" className={getNavClass}>
            <img className='h-5' src="cp sub.svg" alt="" />
              Services & Items
            </NavLink>

            {/* <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp order.svg" alt="" />Order tracking</Link> */}
            {/* <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp time.svg" alt="" />Popular Times</Link> */}
            {/* <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp sub.svg" alt="" />Subscriptions</Link> */}
          </div>

          <div className='space-y-2'>
            <p className='text-[11px] font-semibold py-1 p-[15px]'>MANAGEMENT</p>

            <NavLink to="Staff" className={getNavClass}>
            <img className='h-5' src="cp over.svg" alt="" />
              Staff & Drivers
            </NavLink>

            <NavLink to="j" className={getNavClass}>
            <img className='h-5' src="cp customer.svg" alt="" />
              Analytics
            </NavLink>

            {/* <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp over.svg" alt="" />Staff & Drivers</Link> */}
            {/* <Link className='flex text-[14px] font-medium gap-3 py-3 rounded-lg hover:bg-[#3A82A4] transition w-50 hover:scale-105'><img className='h-5' src="cp customer.svg" alt="" />Analytics</Link> */}
          </div>

          </div>

        </div>
      </div>

    // </div>
  )
}

export default Navbar
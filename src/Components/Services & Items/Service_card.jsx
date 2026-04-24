import { IoIosAdd } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { useLocation, useNavigate } from 'react-router-dom';

const Service_card = () => {

  const navigate = useNavigate();

  const location = useLocation();

  const isServiceActive =
    location.pathname === "/services" ||
    location.pathname === "/services/service";

  const isItemActive =
    location.pathname === "/services/item";


  return (
    <div className="flex flex-col p-6 gap-10">
      <div className="flex justify-between">

        <div className="h-[50px] w-[503.84px]">
          <p className="text-[24px] font-semibold">Services & Items</p>
          <p className="text-[14px] text-[#94A3B8]">
            Manage Services and Items
          </p>
        </div>

        <div className="mt-4 flex gap-4">
          <button className="h-[33px] w-[100px] bg-[#3A82A4] text-white rounded text-[12px] flex items-center justify-center">
            <IoIosAdd className="text-[15px]"/> New Service
          </button>

          <button className="h-[33px] w-[80px] bg-[#3A82A4] text-white rounded text-[12px] flex items-center justify-center">
            <IoIosAdd className="text-[15px]"/> New Item
          </button>
        </div>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-x-12">
            <div className="flex items-center p-5 h-[80px] w-[200px] rounded-[8px] shadow gap-2">
                <div className='h-[30px] w-[30px] bg-[#BFD7ED] rounded-[8px] flex items-center justify-center'>
                  <BsStars />
                </div>
                <div className='h-[40px] w-[90px]'>
                  <p className='text-[9px] text-slate-500'>ACTIVE SERVICES</p>
                  <p className='text-[18px] font-bold'>10</p>
                </div>
            </div>

            <div className="flex items-center p-5 h-[80px] w-[200px] rounded-[8px] shadow gap-2">
                <div className='h-[30px] w-[30px] bg-[#BFD7ED] rounded-[8px] flex items-center justify-center'>
                  <FaBoxOpen />
                </div>
                <div className='h-[40px] w-[90px]'>
                  <p className='text-[9px] text-slate-500'>TOTAL ITEMS</p>
                  <p className='text-[18px] font-bold'>16</p>
                </div>
            </div>

            <div className="flex items-center p-5 h-[80px] w-[200px] rounded-[8px] shadow gap-2">
                <div className='h-[30px] w-[30px] bg-[#BFD7ED] rounded-[8px] flex items-center justify-center'>
                  <FaRegMoneyBillAlt />
                </div>
                <div className='h-[40px] w-[90px]'>
                  <p className='text-[9px] text-slate-500'>AVG PRICE</p>
                  <p className='text-[18px] font-bold'>100</p>
                </div>
            </div>

            <div className="flex items-center p-5 h-[80px] w-[200px] rounded-[8px] shadow gap-2">
                <div className='h-[30px] w-[30px] bg-[#BFD7ED] rounded-[8px] flex items-center justify-center'>
                  <FaRegMoneyBillAlt />
                </div>
                <div className='h-[40px] w-[90px]'>
                  <p className='text-[9px] text-slate-500'>TOP PRICE</p>
                  <p className='text-[18px] font-bold'>400</p>
                </div>
            </div>
        </div>

        <div className="mt-4 flex gap-4">
          <button
            onClick={() => navigate("")}
            className={`h-[33px] w-[80px] rounded text-[12px] flex items-center justify-center gap-1 shadow
              ${isServiceActive 
                ? "bg-[#3A82A4] text-white" 
                : "text-slate-500 bg-white"}
            `}
          >
            <BsStars/>
            <p>Services</p>
          </button>

          <button
            onClick={() => navigate("item")}
            className={`h-[33px] w-[80px] rounded text-[12px] flex items-center justify-center gap-1 shadow
              ${isItemActive 
                ? "bg-[#3A82A4] text-white" 
                : "text-slate-500 bg-white"}
            `}
          >
            <FaBoxOpen />
            <p>Items</p>
          </button>
        </div>
      </div>

    </div>
  )
}

export default Service_card
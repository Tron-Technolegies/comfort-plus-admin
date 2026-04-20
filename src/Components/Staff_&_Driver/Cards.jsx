import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import api from "../../api/Api";
import Edit_popup from "./Edit_popup";


const Cards = () => {
  const [Show, setShow] = useState()
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  api.get("view_all_staff/")
    .then((res) => {
      console.log(res.data);
      setStaffList(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, []);


    if (loading) {
    return <h2>Loading...</h2>;
    }

  return (
    <div className="flex flex-col p-6 gap-10">
        {/* <div className='bg-blue-500 h-[19px] text-[12px]'>
                      <p className='text-[16px] font-semibold'>Recent Order History</p>
                  </div> */}
        <div className="h-[50px] w-[503.84px]">
          <p className="text-[24px] font-semibold">Staff & Drivers</p>
          <p className="text-[14px] text-[#94A3B8]">
            Manage team members and assign roles
          </p>
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
              <p className="text-[12px] font-medium text-[#94A3B8]">Contact</p>
            </div>
            <div className="h-[40px] w-[114.23px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Status</p>
            </div>
            <div className="h-[40px] w-[90.31px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Tasks Done</p>
            </div>
            <div className="h-[40px] w-[115.92px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Actions</p>
            </div>
          </div>

            <div>
            {staffList.map((staff) => {
              return(
              <div
                key={staff.id}
                className="flex justify-between items-center border-b-[1px] border-[#00000014]"
              >
                <div className="h-[52px] w-[103.05px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">{staff.name}</p>
                </div>

                <div className="h-[52px] w-[117.77px] flex items-center p-[12px]">
                  <div className="h-[25px] w-[60px] rounded-[60px] flex items-center justify-center bg-[#CFEFFF] border-[1px] border-[#08B]">
                    <p className="text-[13px] font-medium">{staff.role}</p>
                  </div>
                </div>

                <div className="h-[52px] w-[134.72px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">
                    {staff.email} {staff.phone}
                  </p>
                </div>

                <div className="h-[52px] w-[114.23px] flex items-center p-[12px]">
                  <div className="h-[25px] w-[60px] rounded-[60px] flex items-center justify-center bg-[#D1FAE5] border-[1px] border-[#86EFAC]">
                    <p className="text-[13px] text-[#22C55E] font-medium">
                      Active
                    </p>
                  </div>
                </div>

                <div className="h-[52px] w-[90.31px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">240</p>
                </div>

                <div className="h-[52px] w-[115.92px] flex items-center gap-[15px] p-[12px]">
                    {/* <button><FiEdit /></button> */}

                    <div>
                        {/* Button */}
                        <button onClick={() => { setSelectedStaff(staff); setShow(true);}}>
                        <FiEdit />
                        </button>
                    </div>

                    <button>
                        <img className="h-[23px]" src="cp delete.svg" alt="" />
                    </button>
                </div>
            </div>
          );
        })}
        {Show && (
          <Edit_popup setShow={setShow} staff={selectedStaff}/>
        )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
import React, { useEffect, useState } from "react";
import { FiEdit } from "react-icons/fi";
import api from "../../api/Api";
import Edit_popup from "./Edit_popup";
import { IoIosAdd } from "react-icons/io";
import Add_staff_popup from "./Add_staff_popup"



const Cards = () => {
  const [Show, setShow] = useState()
  const [selectedStaff, setSelectedStaff] = useState(null);

  const [staffList, setStaffList] = useState([]);
  const [loading, setLoading] = useState(true);

  const [refresh, setRefresh] = useState(false);

  const [addstaff, setAddstaff] = useState(false)

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
  }, [refresh]);

  const handleDelete = (id) => {
  if (!window.confirm("Are you sure you want to delete?")) return;

  api.delete(`remove_staff/${id}`)
      .then(() => {
        setStaffList(prev =>
          prev.filter(item => item.id !== id)
        );
      })
      .catch((err) => {
        console.error(err);
      });
  };


    if (loading) {
    return <h2>Loading...</h2>;
    }

  return (
    <div className="flex flex-col p-6 gap-10">

      <div className="flex justify-between">

        <div className="h-[50px] w-[503.84px]">
          <p className="text-[24px] font-semibold">Staff & Drivers</p>
          <p className="text-[14px] text-[#94A3B8]">
            Manage team members and assign roles
          </p>
        </div>

        <div className="mt-4">
          <button onClick={() => setAddstaff(true)} className="h-[33px] w-[80px] bg-[#3A82A4] text-white rounded text-[12px] flex items-center justify-center">
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
                  <div
                    className={`h-[25px] w-[80px] rounded-[60px] flex items-center justify-center border ${
                      staff.role === "Staff"
                        ? "bg-[#CFEFFF] border-[#08B]"
                        : "bg-[#FEF3C7] border-[#FCD34D]"
                    }`}
                  >
                    <p
                      className={`text-[13px] font-medium ${
                        staff.role === "Staff"
                          ? "text-[#0284C7]"
                          : "text-[#D97706]"
                      }`}
                    >
                      {staff.role}
                    </p>
                  </div>
                </div>

                <div className="h-[52px] w-[134.72px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">
                    {staff.email}
                  </p>
                </div>

                <div className="h-[52px] w-[90.31px] flex items-center p-[12px]">
                  <p className="text-[13px] font-medium">
                  {staff.phone}
                  </p>
                </div>

                <div className="h-[52px] w-[114.23px] flex items-center p-[12px]">
                  <div
                    className={`h-[25px] w-[80px] rounded-[60px] flex items-center justify-center border ${
                      staff.status === "Active"
                        ? "bg-[#D1FAE5] border-[#86EFAC]"
                        : "bg-[#FEE2E2] border-[#FCA5A5]"
                    }`}
                  >
                    <p
                      className={`text-[13px] font-medium ${
                        staff.status === "Active"
                          ? "text-[#22C55E]"
                          : "text-[#EF4444]"
                      }`}
                    >
                      {staff.status}
                    </p>
                  </div>
                </div>

                

                <div className="h-[52px] w-[115.92px] flex items-center gap-[15px] p-[12px]">
                    
                    <button onClick={() => { setSelectedStaff(staff); setShow(true);}}>
                      <FiEdit />
                    </button>

                    <button onClick={() => handleDelete(staff.id)}>
                        <img className="h-[23px]" src="cp delete.svg" alt="" />
                    </button>
                </div>
            </div>
          );
        })}
        {Show && (
          <Edit_popup setShow={setShow} staff={selectedStaff} setRefresh={setRefresh}/>
        )}

        {addstaff && (
          <Add_staff_popup setAddstaff={setAddstaff} setRefresh={setRefresh}/>
        )}
        </div>
      </div>
    </div>
  );
};

export default Cards;
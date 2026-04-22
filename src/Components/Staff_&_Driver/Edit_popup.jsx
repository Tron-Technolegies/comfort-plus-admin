import React, { useEffect, useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import api from '../../api/Api';


const Edit_popup = ({setShow, staff, setRefresh}) => {

    // const [Updatestaff, setUpdatestaff] = useState([]);
    // const [loading, setLoading] = useState(true);

    const [name, setName] = useState(staff.name);
    const [email, setEmail] = useState(staff.email);
    const [phone, setPhone] = useState(staff.phone);
    const [role, setRole] = useState(staff.role);

    const [status, setStatus] = useState(staff.status || "Active");

    
    const handleUpdate = () => {
    api.put(`edit_staff/${staff.id}/`, {
        name,
        email,
        phone,
        role,
        status
    })
    .then((res) => {
        console.log("SUCCESS:", res.data);

        setRefresh(prev => !prev);
        setShow(false);
    })
    .catch(err => {
        console.error("ERROR:", err.response || err);
    });
    };



    useEffect(() => {
    if (staff) {
        setStatus(staff.status || "Active");
    }
    }, [staff]);

  return (
    <div
        onClick={() => setShow(false)} // click outside closes
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
    >
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[350px] w-[500px] p-6 flex flex-col gap-[10px] rounded-[20px] shadow-lg">
        <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold">Edit</p>
            <button onClick={() => setShow(false)}>
                <RxCross2 />
            </button>
        </div>

        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter name"
            className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
            />
        </div>

        <div className="flex items-center justify-between">
            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Enter email"
                className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                />
            </div>

            <div className="flex flex-col">
                <label className="text-sm font-medium mb-1">Phone</label>
                <input value={phone} onChange={(e) => setPhone(e.target.value)}
                type="text"
                placeholder="Enter phone no"
                className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                />
            </div>
        </div>

        <div className="flex items-center gap-4">

            <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Role</label>
                <select value={role} onChange={(e) => setRole(e.target.value)} className="w-full border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]">
                    <option value="Staff">Staff</option>
                    <option value="Driver">Driver</option>
                </select>
            </div>

            <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Status</label>
                <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]"
                >
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                </select>
            </div>

        </div>

        <div className="flex justify-end">
            <button onClick={handleUpdate} className="bg-[#3A82A4] h-[35px] w-[120px] rounded-[20px]">
                Save changes
            </button>
        </div>
        
        </div>
    </div>
  )
}

export default Edit_popup
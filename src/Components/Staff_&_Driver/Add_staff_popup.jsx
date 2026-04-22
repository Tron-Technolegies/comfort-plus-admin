import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import api from "../../api/Api";


const Add_staff_popup = ({setAddstaff, setRefresh}) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [role, setRole] = useState("" || "Staff");
    const [status, setStatus] = useState("" || "Active"); 

    const handleSubmit = (e) => {
    e.preventDefault();

    api.post("add_staff/", {
        name,
        phone,
        email,
        role,
    })
    .then((res) => {
        console.log(res.data);

        setAddstaff(false);
        setRefresh(prev => !prev);
    })
    .catch((err) => {
        console.error(err);
        alert(err.response?.data?.error || "Something went wrong");
    });
    };
  return (
    <div
            onClick={() => setAddstaff(false)} // click outside closes
            className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
        >
            <div onClick={(e) => e.stopPropagation()} className="bg-white h-[350px] w-[500px] p-6 flex flex-col gap-[10px] rounded-[20px] shadow-lg">
            <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold">Add staff</p>
                <button onClick={() => setAddstaff(false)}>
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
                    placeholder="Enter phone number"
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
                <button onClick={handleSubmit} className="bg-[#3A82A4] h-[35px] w-[80px] rounded-[20px]">
                    Save
                </button>
            </div>
            
            </div>
        </div>
  )
}

export default Add_staff_popup
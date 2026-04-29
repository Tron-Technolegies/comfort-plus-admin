import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import api from '../../api/Api';


const Add_service = ({setAddservice, fetchServices  }) => {

    const [service_nme, setServiceType] = useState("");
    const [s_price, setPrice] = useState("");
    const [desc, setDescription] = useState("");
    const [estimated_t, setEstimatedTime] = useState("");
    const [status, setStatus] = useState("True");
    const [features, setFeatures] = useState("");

    const handleSave = (e) => {
        e.preventDefault();

        api.post("add_service/", {
        s_name: service_nme,
        discription: desc,
        s_prc: s_price,
        est_time: estimated_t,
        is_available: status,
        feature: features.split(","),
        })
        .then((res) => {
        console.log(res.data);

        setAddservice(false);
        fetchServices();
        
        alert("Service added successfully");
        })
        .catch((err) => {
        console.error(err);
        alert(err.response?.data || "Something went wrong");
        });
    };
  return (
    <div
        onClick={() => setAddservice(false)}
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
    >
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[500px] w-[500px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">
            <div className="flex items-center justify-between">
                <p className="text-[20px] font-bold">Add Service</p>
                <button onClick={() => setAddservice(false)}>
                    <RxCross2 />
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Service type</label>
                    <input value={service_nme} onChange={(e) => setServiceType(e.target.value)} 
                    type="text"
                    placeholder="Enter service type"
                    className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Price</label>
                    <input value={s_price} onChange={(e) => setPrice(e.target.value)} 
                    type="text"
                    placeholder="Enter price"
                    className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                    />
                </div>
            </div>

            <div>
                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Description</label>
                    <textarea value={desc} onChange={(e) => setDescription(e.target.value)} 
                    type="text"
                    placeholder="Enter description"
                    className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm font-medium mb-1">Features</label>
                    <textarea value={features} onChange={(e) => setFeatures(e.target.value)} 
                    type="text"
                    placeholder="Enter features separated by comma"
                    className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
                    />
                </div>
            </div>
        
            <div className="flex items-center gap-4">

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium mb-1">Estimated time</label>
                    <input value={estimated_t} onChange={(e) => setEstimatedTime(e.target.value)} 
                    type="text"
                    placeholder="Estimated time"
                    className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                    />
                </div>
                

                <div className="flex flex-col w-full">
                    <label className="text-sm font-medium mb-1">Status</label>
                    <select value={status} onChange={(e) => setStatus(e.target.value)} 
                    className="w-full h-[40px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]"
                    >
                        <option value="True">Available</option>
                        <option value="False">Not Available</option>
                    </select>
                </div>

            </div>

            <div className="flex justify-end">
                <button onClick={handleSave} className="bg-[#3A82A4] h-[35px] w-[80px] rounded-[20px]">
                    Save
                </button>
            </div>
        
        </div>

    </div>
  )
}

export default Add_service
import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import api from '../../api/Api';
import { useEffect } from 'react';

const Edit_service = ({ serviceData, onClose, fetchServices }) => {

    const [form, setForm] = useState({
        service_type: "",
        description: "",
        price: "",
        estimated_time: "",
        status: "",
        features: ""
    });

    useEffect(() => {
    console.log("serviceData:", serviceData);

    if (serviceData) {
        setForm({
            service_type: serviceData.s_nme || "",
            description: serviceData.disc || "",
            price: serviceData.pr || "",
            estimated_time: serviceData.estimated_t || "",
            status: serviceData.is_avail ? "True" : "False",
            features: serviceData.ftr || ""
        });
        }
    }, [serviceData]);

    const handleChange = (e) => {
        setForm({
        ...form,
        [e.target.name]: e.target.value
        });
    };

    const handleUpdate = () => {
        api.put(`edit_service/${serviceData.id}`, {
            s_nme: form.service_type,
            disc: form.description,
            s_pr: form.price,
            est_t: form.estimated_time,
            is_avl: form.status,
            ftr: form.features
        })
            .then((res) => {
                console.log(res.data);

                if (fetchServices) {
                fetchServices();
                }

                onClose();
            })
            .catch((err) => {
                console.error(err);
            });
        };

console.log(form);
  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/1">
            <div onClick={(e) => e.stopPropagation()} className="bg-white h-[500px] w-[500px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">
                <div className="flex items-center justify-between">
                    <p className="text-[20px] font-bold">Edit Service</p>
                    <button onClick={onClose}>
                        <RxCross2 />
                    </button>
                </div>
    
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Service type</label>
                        <input name="service_type" value={form.service_type} onChange={handleChange}
                        type="text"
                        placeholder="Enter service type"
                        className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                        />
                    </div>
    
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Price</label>
                        <input name="price" value={form.price} onChange={handleChange}
                        type="text"
                        placeholder="Enter price"
                        className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                        />
                    </div>
                </div>
    
                <div>
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Description</label>
                        <textarea name="description" value={form.description} onChange={handleChange}
                        type="text"
                        placeholder="Enter description"
                        className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
                        />
                    </div>
    
                    <div className="flex flex-col">
                        <label className="text-sm font-medium mb-1">Features</label>
                        <textarea name="features" value={form.features} onChange={handleChange}
                        type="text"
                        placeholder="Enter features separated by comma"
                        className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
                        />
                    </div>
                </div>
            
                <div className="flex items-center gap-4">
    
                    <div className="flex flex-col w-full">
                        <label className="text-sm font-medium mb-1">Estimated time</label>
                        <input name="estimated_time" value={form.estimated_time} onChange={handleChange}
                        type="text"
                        placeholder="Estimated time"
                        className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                        />
                    </div>
                    
    
                    <div className="flex flex-col w-full">
                        <label className="text-sm font-medium mb-1">Status</label>
                        <select name="status" value={form.status} onChange={handleChange}
                        className="w-full h-[40px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]"
                        >
                            <option value="True">Available</option>
                            <option value="False">Not Available</option>
                        </select>
                    </div>
    
                </div>
    
                <div className="flex justify-end">
                    <button onClick={handleUpdate} className="bg-[#3A82A4] h-[35px] w-[130px] rounded-[20px]">
                        Save changes
                    </button>
                </div>
            
            </div>
    
        </div>
  )
}

export default Edit_service
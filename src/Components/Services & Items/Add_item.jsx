import React from 'react'
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import api from '../../api/Api';
import { useEffect } from 'react';


const Add_item = ({setAdditem, fetchItems  }) => {

    const [item, setItem] = useState("");
    const [price, setPrice] = useState("");
    const [serviceId, setServiceId] = useState("");
    const [services, setServices] = useState([]);

    useEffect(() => {
        api.get("view_services/")
        .then((res) => {
            console.log(res.data);
            setServices(res.data);
        })
        .catch((err) => {
            console.error(err);
        });
    }, []);

    const handleSave = (e) => {
        e.preventDefault();

        if (!serviceId) {
        alert("Please select a service");
        return;
        }

        api.post(`add_item/${serviceId}`, {
        item: item,
        price: price,
        })
        .then((res) => {
            console.log(res.data);

            alert("Item added successfully");

            setAdditem(false);
            fetchItems();
        })
        .catch((err) => {
            console.error(err);
            // alert(err.response?.data || "Something went wrong");
        });
    };
return (
    <div
        onClick={() => setAdditem(false)}
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
    >
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[300px] w-[400px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">
        <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold">Add Item</p>
            <button onClick={() => setAdditem(false)}>
                <RxCross2 />
            </button>
        </div>

        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Item name</label>
            <input value={item} onChange={(e) => setItem(e.target.value)}
            type="text"
            placeholder="Enter item name"
            className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
            />
        </div>

        <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Price</label>
                <input value={price} onChange={(e) => setPrice(e.target.value)}
                type="text"
                placeholder="Enter price"
                className="w-[160px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                />
            </div>

            <div>
                <p>Service</p>
                <select value={serviceId} onChange={(e) => setServiceId(e.target.value)}
                    className="w-[160px]  h-[40px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]">
                    
                    <option value="">Select Service</option>

                    {services.map((service) => (
                        <option key={service.id} value={service.id}>
                        {service.s_nme}
                        </option>
                    ))}
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

export default Add_item
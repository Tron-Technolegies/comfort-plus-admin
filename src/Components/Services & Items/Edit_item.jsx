import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import api from '../../api/Api';


const Edit_item = ({ itemData, onClose, fetchItems }) => {

//     const [services, setServices] = useState([]);
//     const [form, setForm] = useState({
//         item: "",
//         price: "",
//         service_id: ""
//     });

//     useEffect(() => {
//     api.get("view_services/")
//         .then((res) => setServices(res.data))
//         .catch((err) => console.error(err));
// }, []);

// // 2. Pre-fill form when itemData is available
// useEffect(() => {
//     if (itemData) {
//         setForm({
//             item: itemData.item || "",
//             price: itemData.price || "",
//             service_id: String(itemData.s_id) || ""
//         });
//     }
// }, [itemData]);

//     const handleChange = (e) => {
//         setForm({ ...form, [e.target.name]: e.target.value });
//     };

//     const handleUpdate = () => {  // ← no , [] at the end
//         api.put(`edit_service_item/${itemData.id}`, {
//             item: form.item,
//             price: form.price,
//             service_id: form.service_id
//         })
//         .then((res) => {
//             console.log(res.data);
//             if (fetchItems) fetchItems();
//             onClose();
//         })
//         .catch((err) => console.error(err));
//     };
    const [services, setServices] = useState([]);
    const [form, setForm] = useState({
        item: "",
        price: "",
        service_id: ""
    });

    useEffect(() => {
        api.get("view_services/")
            .then((res) => setServices(res.data))
            .catch((err) => console.error(err));
    }, []);

    useEffect(() => {
        if (itemData) {
            setForm({
                item: itemData.item || "",
                price: itemData.price || "",
                service_id: String(itemData.s_id) || ""
            });
        }
    }, [itemData]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleUpdate = () => {
        api.put(`edit_service_item/${itemData.id}`, {
            item: form.item,
            price: form.price,
            s_id: form.service_id
        })
        .then((res) => {
            console.log(res.data);
            if (fetchItems) fetchItems();
            onClose();
        })
        .catch((err) => console.error(err));
    };

  return (
    <div onClick={onClose} className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40">
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[300px] w-[400px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">
        <div className="flex items-center justify-between">
            <p className="text-[20px] font-bold">Edit Item</p>
            <button onClick={onClose}>
                <RxCross2 />
            </button>
        </div>

        <div className="flex flex-col">
            <label className="text-sm font-medium mb-1">Item name</label>
            <input name="item" value={form.item} onChange={handleChange}
            type="text"
            placeholder="Enter item name"
            className="border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]    "
            />
        </div>

        <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full">
                <label className="text-sm font-medium mb-1">Price</label>
                <input name="price" value={form.price} onChange={handleChange}
                type="text"
                placeholder="Enter price"
                className="w-[160px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4]"
                />
            </div>

            <div>
                <p>Service</p>
                <select name="service_id" value={form.service_id} onChange={handleChange}
                    className="w-[160px]  h-[40px] border border-[#00000014] p-2 rounded outline-none focus:ring-2 focus:ring-[#3A82A4] bg-[#F9FAFB]">
                    
                    <option value="">Select Service</option>
                    {services.map((s) => (
                        <option key={String(s.id)} value={String(s.id)}>{s.s_nme}</option>
                    ))}                    
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

export default Edit_item
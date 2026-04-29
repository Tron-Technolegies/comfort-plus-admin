import React from 'react'
import { RxCross2 } from "react-icons/rx";
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { RxUpdate } from "react-icons/rx";
import { FiEdit } from "react-icons/fi";
import { TbFileDescription } from "react-icons/tb";
import api from '../../api/Api';
import { useState } from 'react';
import { useEffect } from 'react';
import Edit_service from './Edit_service';


const Service_popup = ({setShowservice, id}) => {

    const [showEdit, setShowEdit] = useState(false);    

    const [service, setService] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchSingleService = () => {
        api
            .get(`v_single_services/${id}`)
            .then((res) => {
                console.log(res.data);
                setService(res.data);
                setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchSingleService();
    }, [id]);

    if (loading) {
        return 
        // <p>Loading...</p>;
    }


    const handleDelete = (id) => {
        api.delete(`delete_service/${id}`)
        .then((res) => {
            setShowservice(false);   // ← just close the popup, auto-refresh will update the list
            // alert("Service deleted successfully");
        })
        .catch((err) => {
            console.error(err);
            // alert(err.response?.data || "Something went wrong");
        });
    };

    

  return (
    <div 
        onClick={() => setShowservice(false)}
        className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur-sm bg-black/40"
    >
        <div onClick={(e) => e.stopPropagation()} className="bg-white h-[350px] w-[370px] p-6 flex flex-col gap-[20px] rounded-[20px] shadow-lg">

            

            <div className='space-y-5'>
                
                <div className="flex justify-between">
                    <div className='flex-col'>
                        <div className='flex items-center gap-1'>
                            <p className='text-[23px] font-bold'>{service.s_nme}</p>
                        </div>

                        <div className={`h-[20px] w-[100px] text-[13px] rounded-[10px] flex justify-center items-center ${
                        service.is_avail
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}>
                            <p>
                                {service.is_avail
                                ? "Available"
                                : "Not Available"}
                            </p>
                        </div>
                    </div>

                    <div>
                        <button onClick={() => setShowservice(false)}>
                            <RxCross2 />
                        </button>
                    </div>
                </div>
                

                <div className='flex justify-between'>
                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <IoTimeOutline />
                            <p className='text-[12px]'>Estimated</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>{service.estimated_t}</p>
                        </div>
                    </div>

                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <CiCalendar />
                            <p className='text-[12px]'>Created</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>{new Date(service.cr_at).toLocaleDateString()}</p>   
                        </div>
                    </div>

                    <div className='p-1 h-[50px] w-[100px] rounded-[10px] border-[1px] border-[#00000014] bg-[#EFF6FF]'>
                        <div className='flex items-center justify-center text-slate-500 gap-1'>
                            <RxUpdate />
                            <p className='text-[12px]'>Updated</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p>{new Date(service.up_st).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>

                <div className='space-y-2 h-[90px]'>
                    <div className='flex items-center gap-1'>
                        <TbFileDescription className='text-[#3B82F6]'/>
                        <p>Description</p>
                    </div>
                    <p className='text-[14px] text-slate-500'>{service.disc}</p>
                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="flex items-center justify-end gap-[15px] ">

                <button onClick={(e) => {e.stopPropagation(); setShowEdit(true);}} className='flex items-center justify-center gap-1 h-[30px] w-[60px] rounded-[10px] shadow'>
                    <FiEdit className='h-[20px]' />
                    <p className='text-[12px]'>Edit</p>
                </button>

                <button onClick={(e) => { e.stopPropagation(); handleDelete(id);}} className='flex items-center justify-center gap-1 h-[30px] w-[80px] bg-[#FEECEC] text-[#EF4444] rounded-[10px] shadow'>
                    <img className="h-[20px]" src="cp delete.svg" alt="" />
                    <p className='text-[12px]'>Delete</p>
                </button>
            </div>
        </div>

        {showEdit && (
                <Edit_service
                    serviceData={service}
                    onClose={() => setShowEdit(false)}
                    fetchServices={fetchSingleService}
                />
            )}
    </div>
  )
}

export default Service_popup
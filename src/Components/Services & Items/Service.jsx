import React, { useEffect, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Service_popup from './Service_popup';
import api from '../../api/Api';
import { useCallback } from 'react';
import { useOutletContext } from "react-router-dom";


const Service = () => {

  const { setFetchServices } = useOutletContext();

  const [showservice, setShowservice] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const [refresh, setRefresh] = useState(false);

  // useEffect(() => {
  //   api.get("view_services")
  //     .then((res) => {
  //       setService(res.data);
  //       setLoading(false);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       setLoading(false);
  //     });
  //   }, [refresh]);
  const fetchServices = useCallback(() => {
    api.get("view_services")
      .then((res) => {
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetchServices();
    setFetchServices(() => fetchServices);
    const interval = setInterval(fetchServices, 5000);
    return () => clearInterval(interval);
  }, [fetchServices]);


  const handleDelete = (id) => {
    api.delete(`delete_service/${id}`)
      .then((res) => {
        setService((prev) => prev.filter((s) => s.id !== id));
        // alert("Service deleted successfully");
      })
      .catch((err) => {
        console.error(err);
        // alert(err.response?.data || "Something went wrong");
      });
  };

  return (
    <div className="flex flex-col p-6">
      <div className='grid grid-cols-3 gap-6'>

        {service.map((src) => (
        <div key={src.id} onClick={() => {setShowservice(true);setSelectedId(src.id);}} className='h-[110px]  rounded-[10px] border-[1px] border-[#00000014] p-[5px]'>

            <div className='h-[60px] flex items-center gap-2'>
                <div className='flex items-center justify-center h-[40px] w-[40px] rounded-[10px] bg-[#BFD7ED]'>
                    <BsStars />
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                      <span className='h-[7px] w-[7px] rounded-[5px] bg-[#94A3B8]'></span> <p className='text-[14px]'>{src.s_nme}</p>
                    </div>
                    {/* <div className='flex items-center gap-1'>
                        <span className={`h-[7px] w-[7px] rounded-[5px] ${src.is_avail ? "bg-green-500" : "bg-red-500"}`}></span>
                        <p className='text-[14px]'>{src.s_nme}</p>
                    </div> */}

                    <div className={`h-[20px] w-[90px] text-[13px] rounded-[10px] flex justify-center items-center ${
                      src.is_avail
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}>
                        <p>{src.is_avail ? "Available" : "Not Available"}</p>
                    </div>
                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="h-[30px] flex items-center justify-between gap-[15px] pt-2">
              <div>
                <p className='text-[10px] font-bold'>PRICE</p>
                <p className='font-bold'>{src.pr}</p>
              </div>

              <div className='flex justify-end h-[30px] w-[40px]'>
                {/* <button>
                    <FiEdit className='h-[20px]' />
                </button> */}

                <button  onClick={(e) => { e.stopPropagation(); handleDelete(src.id);}}>
                    <img className="h-[20px]" src="/cp delete.svg" alt="" />
                </button>
              </div>
            </div>
            
        </div>
        ))}
          

      </div>
      {showservice && (
          <Service_popup
            setShowservice={setShowservice}
            id={selectedId}
            onDelete={fetchServices}
            />
        )}
    </div>
  )
}

export default Service
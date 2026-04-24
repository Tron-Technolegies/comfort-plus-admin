import React, { useEffect, useState } from 'react'
import { FiEdit } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import Service_popup from './Service_popup';
import api from '../../api/Api';


const Service = () => {

  const [showservice, setShowservice] = useState(false)

  const [service, setService] = useState([]);
  const [loading, setLoading] = useState(true);

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    api.get("view_services")
      .then((res) => {
        console.log(res.data);
        setService(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
    }, [refresh]);

  return (
    <div className="flex flex-col p-6">
      <div className='grid grid-cols-3 gap-6'>

        {service.map((src) => (
        <div key={src.id} onClick={() => setShowservice(true)} className='h-[110px] w-[300px] rounded-[10px] border-[1px] border-[#00000014] p-[5px]'>

            <div className='h-[60px] flex items-center gap-2'>

                <div className='flex items-center justify-center h-[40px] w-[40px] rounded-[10px] bg-[#BFD7ED]'>
                    <BsStars />
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <span className='h-[7px] w-[7px] rounded-[5px] bg-[#94A3B8]'></span>
                        <p className='text-[14px]'>{src.s_nme}</p>
                    </div>

                    <div className='h-[20px] w-[80px] text-[13px] rounded-[10px] flex justify-center items-center bg-blue-400'>
                        <p>available</p>
                    </div>
                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="h-[30px] flex items-center justify-end gap-[15px] ">

                <button>
                    <FiEdit className='h-[20px]' />
                </button>

                <button>
                    <img className="h-[20px]" src="cp delete.svg" alt="" />
                </button>
            </div>
            
        </div>
        ))}
        {showservice && (
          <Service_popup setShowservice={setShowservice}/>
        )}

      </div>
    </div>
  )
}

export default Service
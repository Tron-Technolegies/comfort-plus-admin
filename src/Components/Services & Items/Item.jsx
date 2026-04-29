import React from 'react'
import { FiEdit } from "react-icons/fi";
import { BsStars } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { useState } from 'react';
import api from '../../api/Api';
import { useEffect } from 'react';
import { useOutletContext } from "react-router-dom";
import Edit_item from './Edit_item';


const Item = () => {

  const [selectedItem, setSelectedItem] = useState(null);

  const [showEdit, setShowEdit] = useState(false);

  const { setFetchItems } = useOutletContext();

  const [items, setItems] = useState([]);

  const fetchItems = () => {
    api.get("view_items")
      .then((res) => {
        console.log(res.data[0]);
        setItems(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchItems();
    setFetchItems(() => fetchItems);
  }, []);

  const handleDelete = (id) => {
    api.delete(`delete_service_item/${id}`)
      .then((res) => {
        fetchItems(); // ← refresh after delete
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  return (
    <div className="flex flex-col p-6">

      <div className='grid grid-cols-3 gap-6'>

        {items.map((it, index) => (
        <div key={index}   className='h-[160px] w-[300px] rounded-[10px] border-[1px] border-[#00000014] p-[5px]'>

            <div className='h-[110px] flex-col items-center gap-2'>

                <div className='flex items-center justify-center h-[40px] w-[40px] rounded-[10px] bg-[#BFD7ED]'>
                    <FaBoxOpen />
                </div>

                <div>
                    <div className='flex items-center gap-1'>
                        <span className='h-[7px] w-[7px] rounded-[5px] bg-[#94A3B8]'></span>
                        <p className='text-[15px] font-semibold'>{it.item}</p>
                    </div>

                    <div>
                      <p className='text-[14px]'>Available service</p>
                      <p className='text-[13px] text-slate-500'>{it.service_name}</p>
                    </div>

                </div>
            </div>

            <hr className="my-1 border-t border-gray-300 w-full" />

            <div className="h-[30px] flex items-center justify-between gap-[15px] pt-2">

              <div>
                <p className='text-[10px] font-bold'>PRICE</p>
                <p className='font-bold'>{it.price}</p>
              </div>

              <div className='flex justify-between h-[30px] w-[40px]'>
                <button onClick={(e) => {e.stopPropagation(); setSelectedItem(it); setShowEdit(true);}}>
                    <FiEdit className='h-[20px]' />
                </button>

                <button onClick={() => handleDelete(it.id)}>
                    <img className="h-[20px]" src="/cp delete.svg" alt="" />
                </button>
              </div>
                
            </div>
            
        </div>
         ))}

      </div>

      {showEdit && (
                <Edit_item
                    itemData={selectedItem}
                    onClose={() => setShowEdit(false)}
                    fetchItems={fetchItems}
                />
            )}
    </div>
  )
}

export default Item
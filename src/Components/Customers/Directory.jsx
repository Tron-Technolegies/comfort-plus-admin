import React from "react";
import { FiEdit } from "react-icons/fi";
import { IoIosAdd } from "react-icons/io";
import api from "../../api/Api";
import { useState } from "react";
import { useEffect } from "react";

const Directory = () => {
  const [customerList, setCustomerList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
  api.get("view_users")
    .then((res) => {
      console.log(res.data);
      setCustomerList(res.data);
      setLoading(false);
    })
    .catch((err) => {
      console.error(err);
      setLoading(false);
    });
  }, [refresh]);

  return (
    // <div className="flex flex-col p-6">
    //   <div className="flex justify-between">
    //     <div className="relative h-[480px] w-[270px] border-[1px] border-[#00000014] rounded-[8px] shadow overflow-y-scroll overflow-x-hidden flex flex-col">
    //       <div className="sticky top-0 z-10 h-[53px] bg-white 270px border-b-[1px] border-[#00000014] p-[16px] flex items-center justify-between">
    //         <p className="text-[16px] font-semibold">Directory</p>
    //         <img className="h-[12px] w-[13px]" src="cp directory.svg" alt="" />
    //       </div>

    //       <div className="h-[73px] w-[270px] border-b-[1px] border-[#00000014] flex justify-around items-center">
    //         <div className="h-[40px] w-[40px] rounded-[20px] bg-red-500">
    //           <img src="" alt="" />
    //         </div>

    //         <div className="h-[36px] w-[100px]">
    //           <p className="text-[13px] font-semibold">John</p>
    //           <p className="text-[12px]">individual</p>
    //         </div>

    //         <div className="h-[36px] w-[60px] flex flex-col items-end">
    //           <p className="text-[13px] font-semibold">$999</p>
    //           <p className="text-[12px]">123 orders</p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="h-[480px] w-[650px] border-[1px] border-[#00000014] rounded-[8px] shadow">
    //       <div className="flex  justify-between p-[20px] h-[130px] w-[650px] border-b-[1px] border-[#00000014]">
    //         <div className="flex justify-between h-[88px] w-[250px]">
    //           <div className="h-[80px] w-[80px] rounded-[40px] bg-red-500">
    //             <img src="" alt="" />
    //           </div>

    //           <div className="h-[88px] w-[150px] flex flex-col justify-between">
    //             <p className="text-[24px] font-semibold">John</p>
    //             <p className="text-[13px]">Customer ID: CUST-8842</p>
    //             <div className="h-[23px] w-[127px] rounded-[12px] flex items-center-safe justify-center bg-[#FFB020]">
    //               <p className="text-[12px]">Business Account</p>
    //             </div>
    //           </div>
    //         </div>

    //         <div>
    //           <div className="flex gap-3">
    //             <button className="h-[33px] w-[96.86px] bg-[#3A82A4] text-white rounded text-[12px]">
    //               New Order
    //             </button>
    //           </div>
    //         </div>
    //       </div>

    //       <div className="h-[70px] w-[650px] border-b-[1px] border-[#00000014]"></div>

    //       <div className="flex flex-col justify-around items-center h-[280px] p-[15px] overflow-y-scroll overflow-x-hidden flex flex-col">
    //         <div className="h-[19px] w-[600px] text-[12px]">
    //           <p className="text-[16px] font-semibold">Recent Order History</p>
    //         </div>

    //         <div className="h-[200px] w-[600px]">
    //           <div className="flex justify-between items-center border-b-[1px] border-[#00000014]">
    //             <div className="h-[40px] w-[103.05px] flex  items-center p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">
    //                 Order ID
    //               </p>
    //             </div>
    //             <div className="h-[40px] w-[117.77px] flex items-center  p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">
    //                 Customer
    //               </p>
    //             </div>
    //             <div className="h-[40px] w-[134.72px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">Type</p>
    //             </div>
    //             <div className="h-[40px] w-[114.23px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">
    //                 Status
    //               </p>
    //             </div>
    //             <div className="h-[40px] w-[90.31px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">
    //                 Amount
    //               </p>
    //             </div>
    //             <div className="h-[40px] w-[115.92px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium text-[#94A3B8]">
    //                 Amount
    //               </p>
    //             </div>
    //           </div>

    //           <div className="flex justify-between items-center border-b-[1px] border-[#00000014]">
    //             <div className="h-[52px] w-[103.05px] flex  items-center p-[12px]">
    //               <p className="text-[13px] font-medium">ORD-5918</p>
    //             </div>
    //             <div className="h-[52px] w-[117.77px] flex items-center p-[12px]">
    //               <p className="text-[13px] font-medium">Oct 24, 2023</p>
    //             </div>
    //             <div className="h-[52px] w-[134.72px] flex items-center p-[12px]">
    //               <p className="text-[13px] font-medium">Routes</p>
    //             </div>
    //             <div className="h-[52px] w-[114.23px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium">Normal</p>
    //             </div>
    //             <div className="h-[52px] w-[90.31px] flex items-center p-[12px]">
    //               <p className="text-[13px] font-medium">$450.00</p>
    //             </div>
    //             <div className="h-[52px] w-[115.92px] flex items-center p-[12px]">
    //               <p className="text-[12px] font-medium">Completed</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>




    
    <div className="flex flex-col p-6 gap-10">

        <div className="border-[1px] border-[#00000014] items-center h-[500px] overflow-y-scroll overflow-x-hidden rounded-[16px]">
          <div className="sticky top-0 z-10 bg-white flex justify-between items-center border-b-[1px] border-[#00000014]">
            <div className="h-[40px] w-[80px] items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Id</p>
            </div>
            <div className="h-[40px] w-[117.77px] flex items-center  p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Customer</p>
            </div>
            <div className="h-[40px] w-[134.72px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Email</p>
            </div>
            <div className="h-[40px] w-[90.31px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Contact</p>
            </div>
            <div className="h-[40px] w-[114.23px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Order</p>
            </div>
            
            <div className="h-[40px] w-[115.92px] flex items-center p-[12px]">
              <p className="text-[12px] font-medium text-[#94A3B8]">Actions</p>
            </div>
          </div>

            <div>
              {customerList.map((customer)  => {
                return(
                  <div className="flex justify-between items-center border-b-[1px] border-[#00000014]">
                      <div className="h-[52px] w-[80px] flex items-center p-[12px]">
                        <p className="text-[13px] font-medium">{customer.id}</p>
                      </div>

                      <div className="h-[52px] w-[117.77px] flex items-center p-[12px]">
                        
                          <p className="text-[13px] font-medium">{customer.Name}</p>
                        
                      </div>

                      <div className="h-[52px] w-[134.72px] flex items-center p-[12px]">
                        <p className="text-[13px] font-medium">{customer.Email}</p>
                      </div>

                      <div className="h-[52px] w-[90.31px] flex items-center p-[12px]">
                        <p className="text-[13px] font-medium">{customer.Phone}</p>
                      </div>

                      <div className="h-[52px] w-[114.23px] flex items-center p-[12px]">
                          <p className="text-[13px] font-medium">

                          </p>
                      </div>

                      

                      <div className="h-[52px] w-[115.92px] flex items-center justify-end gap-[15px] p-[12px]">
                          
                          {/* <div>
                              
                              <button>
                              <FiEdit />
                              </button>
                          </div> */}

                          <button>
                              <img className="h-[23px]" src="cp delete.svg" alt="" />
                          </button>
                      </div>
                  </div>
                );
              })}
              
        </div>
      </div>
    </div>
  );
};

export default Directory;

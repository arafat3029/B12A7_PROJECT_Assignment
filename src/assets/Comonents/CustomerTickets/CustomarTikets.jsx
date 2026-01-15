import React, {  useEffect, useState,  } from "react";
import Date from "../../date.png";
import Ell from "../../Ell.png";
import { toast } from "react-toastify";
import TaskStatus from "../TaskStatus/TaskStatus";


const CustomarTikets = ({  takenTicket, setTakenTicket, removeTicket }) => {
 const [ticketsData, setTicketsData] = useState([])
 useEffect(() => {
  fetch("/Ticket.json").then(res => res.json()).then(data => setTicketsData(data))
}, [])



  return (
    <div className="bg-[#ffffff] flex justify-center container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5  w-3/4 ">

        {ticketsData.map((ticket) => (
          <div 
          key={ticket.id}
          className= "max-w-7xl mx-auto px-5" onClick={() =>
          {
            setTakenTicket([...takenTicket, ticket]);
            toast("In-Progress Task Added Successfully");
            return;
          }
          }>

            <div className="bg-white p-5 rounded-md shadow-sm mb-5">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium">{ticket.title}</h3>
                <button className="bg-[#baf7cf] text-[#0B5E06] px-4 py-2 rounded-4xl flex items-center gap-2">
                <img src={Ell} alt="" />
                    {ticket.status}
                </button>
              </div>

              <p className="text-gray-600">{ticket.description}</p>

              <div className="flex justify-between items-center pt-1.5">
                <div className="flex gap-4 items-center">
                  <div className="text-[#627382]">
                    <span>#</span>
                    <span>{ticket.id}</span>
                  </div>
                  <p className="text-[#F83044]">{ticket.priority}</p>
                </div>

                <div className="flex gap-4 items-center text[#627382]">
                  <div>
                    <p>{ticket.customer}</p>
                  </div>
                  <div className="flex items-center ">
                    <img src={Date} alt="date" />
                    <span>{ticket.date}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

      </div>

      <div className=" w-1/4 ">
        <div>

            <div className="mb-5">
                <h3 className="font-bold text-2xl text-[#34485A]">Task Status</h3>
                <span className="text-[#627382]">Select a ticket to add to Task Status</span>
            </div>
            <TaskStatus removeTicket={removeTicket} takenTicket={takenTicket}></TaskStatus>
            
            
        </div>


        <div className="mt-10">
            <h3 className="font-bold text-2xl text-[#34485A]">Resolved Task</h3>
            <span className="text-[#627382]">No resolved tasks yet.</span>
        </div>


      </div>
    </div>
  );
};

export default CustomarTikets;

import React from "react";
import { toast } from "react-toastify";

const TaskStatus = ({ takenTicket, removeTicket }) => {
  return (
    <div className="max-w-7xl mx-auto">
      {takenTicket.map((ticket) => (
        <div className="flex flex-col" key={ticket.id}>
          <span className="text-lg font-medium mb-2">
            {ticket.title}
          </span>
          <button className="btn bg-[#02a63b] text-[#ffffff]" onClick={() => {
            removeTicket(ticket.id);
            toast("Completed !!");
          } }>Complete</button>
        </div>
      ))}
    </div>
  );
};

export default TaskStatus;

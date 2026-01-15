import React from "react";

const Navber = () => {
  return (
    <div className="shadow-sm bg-white">
      <div className="navbar flex flex-col md:flex-row xl:flex-wrap justify-between items-center p-4 max-w-7xl mx-auto ">
        <div className="flex-1">
          <a className=" btn-ghost text-xl font-bold text-[#130B2D]">CS — Ticket System</a>
        </div>
        <div className=" flex-none">
          <button className="ml-5 text-[#1a1a1a]">Home</button>
          <button className="ml-5 text-[#1a1a1a]">FAQ</button>
          <button className="ml-5 text-[#1a1a1a]">Changelog</button>
          <button className="ml-5 text-[#1a1a1a]">Blog</button>
          <button className="ml-5 text-[#1a1a1a]">Download</button>
          <button className="ml-5 text-[#1a1a1a]">Contact</button>
          <button className="btn rounded-b-md ml-5 text-[#fff] bg-gradient-to-r from-[#632EE3] to-[#9F62F2]"> <span>+</span> Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Navber;

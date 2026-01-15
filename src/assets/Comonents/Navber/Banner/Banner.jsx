import React from "react";
import Victor from "../../../../assets/Vector1.png";
const Banner = ({ takenTicket,  }) => {
  return (
    <div className="bg-[#ffffff]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-5 py-10 ">
        
        <div className="card bg-base-100 image-full w-155 h-50 shadow-sm">
          <figure className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            <img className="absolute left-0 top-0 h-full"
              src={Victor}
              alt="Shoes"
            />
            <img className="absolute right-0 top-0 h-full scale-x-[-1]"
              src={Victor}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">In-Progress</h2>
            <h2 className="card-title text-6xl">{takenTicket.length}</h2>
          </div>
        </div>

        <div className="card bg-base-100 image-full w-155 h-50 shadow-sm">
          <figure className="bg-gradient-to-r from-[#54CF68] to-[#00827A]">
            <img className="absolute left-0 top-0 h-full"
              src={Victor}
              alt="Shoes"
            />
            <img className="absolute right-0 top-0 h-full scale-x-[-1]"
              src={Victor}
              alt="Shoes"
            />
          </figure>
          <div className="card-body flex justify-center items-center">
            <h2 className="card-title">Resolved</h2>
            <h2 className="card-title text-6xl">0</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

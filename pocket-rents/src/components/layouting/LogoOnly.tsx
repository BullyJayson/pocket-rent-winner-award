import React from "react";
import { useNavigate } from "react-router-dom";

const LogoOnly = () => {
  const navigate = useNavigate();
  return (
    <div className="border-[1px]">
      <div className="flex justify-between items-center h-20 mx-4 sm:mx-8 lg:mx-16">
        <div onClick={() => navigate("/")} className="flex">
          <span className="font-sm sm:font-md font-bold text-xl text-[#ff385c] cursor-pointer">
            Pocket Rents
          </span>
        </div>
      </div>
    </div>
  );
};

export default LogoOnly;

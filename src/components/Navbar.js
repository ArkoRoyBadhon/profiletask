import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="shadow-md">
      <div className="mx-5 md:max-w-screen-md xl:max-w-screen-xl md:mx-auto ">
        <div className="flex justify-between items-center h-16 mb-5">
          <div className="font-bold">Task</div>
          <div className="">
            <div
              onClick={() => navigate("/")}
              className="font-semibold cursor-pointer"
            >
              Profile List
            </div>
            {/* <div className="font-semibold">Profile View</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

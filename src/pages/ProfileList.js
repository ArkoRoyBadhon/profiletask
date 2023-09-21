import React from "react";
import { useGetAllProfileQuery } from "../app/redux/features/profile/profile";
import { useNavigate } from "react-router-dom";

const ProfileList = () => {
  const { data: profileList, isLoading, isSuccess } = useGetAllProfileQuery();

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/profile-view/${id}`);
  };

  if (isLoading) {
    return <div className="flex justify-center items-center">Loading....</div>;
  }

  return (
    <div className="mx-5 md:max-w-screen-md xl:max-w-screen-xl md:mx-auto">
      <div className="mx-5 md:mx-0">
        <div className="font-bold text-[20px] relative">
          <h1 className="capitalize">profile list</h1>
          <div className="absolute w-[100px] h-[2px] bg-blue-400 -bottom-2"></div>
          <div className="absolute w-[100px] h-[3px] bg-red-400 -bottom-3 left-5"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-32 md:gap-x-10 md:gap-y-44 lg:gap-x-10 lg:gap-y-56 mt-10 pb-10">
          {profileList &&
            profileList.map((item) => {
              return (
                <div
                  key={item?._id}
                  className="hover:bg-[#8d54f0] transition-all ease-in bg-blue-200 min-h-[35vh] mt-14 md:mt-0 relative w-full rounded-[14px]"
                >
                  <div className="absolute top-[6px]  z-5 bg-white min-h-[40vh] col-span-1 w-full rounded-xl shadow-lg">
                    <img
                      src={item?.img}
                      alt={item?.name}
                      className="w-full h-60 rounded-t-md"
                    />
                    <div className="px-5 pt-4 pb-4">
                      <h2 className="font-bold capitalize">{item?.name}</h2>
                      <p className="text-[14px] font-semibold">
                        Age: {item?.age}
                      </p>
                      <p className="text-[14px] font-semibold">
                        Address: {item?.address}
                      </p>
                      <div
                        onClick={() => handleNavigate(item?._id)}
                        className="bg-blue-400 flex justify-center items-center rounded-md mt-2 py-1 hover:bg-blue-500 font-semibold cursor-pointer"
                      >
                        View
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProfileList;

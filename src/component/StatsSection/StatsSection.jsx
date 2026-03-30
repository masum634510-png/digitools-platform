import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))]
     grid grid-cols-1 md:grid-cols-3 justify-center py-4 my-6 text-center">
      
      <div className="flex flex-col gap-2 md:gap-3 p-4 border-b md:border-b-0 md:border-r border-white/30">
        <h2 className="text-3xl font-bold text-white">50K+</h2>
        <p className="text-[#FFFFFF]">Active Users</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 p-4 border-b md:border-b-0 md:border-r border-white/30">
        <h2 className="text-3xl font-bold text-white">200+</h2>
        <p className="text-[#FFFFFF]">Premium Tools</p>
      </div>

      <div className="flex flex-col gap-2 md:gap-3 p-4">
        <h2 className="text-3xl font-bold text-white">4.9</h2>
        <p className="text-[#FFFFFF]">Rating</p>
      </div>

    </div>
  );
};

export default StatsSection;

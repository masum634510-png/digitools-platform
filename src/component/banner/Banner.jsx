import React from "react";
import bannerImg from '../../assets/banner.png'

const Banner = () => {
  return (
    <div className="banner-section w-10/12 mx-auto grid justify-between items-center gap-6 my-8 grid-cols-1 lg:grid-cols-2">
      <div className="left w-full flex flex-col justify-center lg:text-left space-y-4">
        <div>
          <img src={null} alt="" />
          <button className="btn btn-soft btn-primary rounded-3xl pointer-events-none">New: AI-Powered Tools Available</button>

        </div>
        <h2 className="text-3xl lg:text-6xl font-bold">Supercharge Your Digital Workflow</h2>
        <p className="text-[18px]">
          Access premium AI tools, design assets, templates, and productivity
          software—all in one place. Start creating faster today. <br></br> Explore
          Products
        </p>
        <div className="flex gap-2">
             <button className="btn btn-primary rounded-3xl btn-sm">Explore Products</button>
             <div>
                <img src={null} alt="" />
                <button className="btn btn-outline btn-sm btn-primary">Watch Demo</button>

             </div>
        </div>
      </div>
      <div className="right">
        <img src={bannerImg} alt="" className="w-full max-w-[500px] h-auto" />
      </div>
    </div>
  );
};

export default Banner;

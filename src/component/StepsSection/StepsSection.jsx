import React from 'react';
import userPng from '../../assets/user.png'
import packagePng from '../../assets/package.png'
import rocketPng from '../../assets/rocket.png'

const StepsSection = () => {
    return (
       <section className='w-10/12 mx-auto mt-20'>
         <div className='flex flex-col text-center'>
            <h2 className='text-3xl font-bold pb-3'>Get Started in 3 Steps</h2>
            <p>Start using premium digital tools in minutes, not hours.</p>
         </div>
         <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center my-5 lg:my-7'>
            <div className='bg-gray-100 p-3 relative rounded-xl py-15 flex flex-col  lg:my-10 justify-center items-center text-center   '>
               <div className='flex flex-end  justify-center w-10 h-10 text-center rounded-full items-center'>
                 <p className='text-white font-semibold absolute top-5 right-8 bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))] p-2 rounded-full w-10 h-10'>01</p>
               </div>
                <img src={userPng} alt="" className='w-[70px] h-[70px] bg-blue-100 rounded-full p-3'/>
                <h3 className='text-3xl font-bold py-3'>Create Account</h3>
                <p className='text-gray-500'>Sign up for free in seconds. No credit card required to get started.</p>
            </div>
            <div className='bg-gray-100 p-3 relative rounded-xl  py-15 flex flex-col  justify-center items-center text-center   '>
               <div className='flex flex-end  justify-center w-10 h-10 text-center rounded-full items-center'>
                 <p className='text-white font-semibold absolute top-5 right-8 bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))] p-2 rounded-full w-10 h-10'>02</p>
               </div>
                <img src={packagePng} alt="" className='w-[70px] h-[70px] bg-blue-100 rounded-full p-3'/>
                <h3 className='text-3xl font-bold py-3'>Choose Products</h3>
                <p className='text-gray-500'>Browse our catalog and select the tools that fit your needs.</p>
            </div>
            <div className='bg-gray-100 p-3 relative rounded-xl py-15 flex flex-col  justify-center items-center text-center   '>
               <div className='flex flex-end  justify-center w-10 h-10 text-center rounded-full items-center'>
                 <p className='text-white font-semibold absolute top-5 right-8 bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))] p-2 rounded-full w-10 h-10'>03</p>
               </div>
                <img src={rocketPng} alt="" className='w-[70px] h-[70px] bg-blue-100 rounded-full p-3'/>
                <h3 className='text-3xl font-bold py-3'>Start Creating</h3>
                <p className='text-gray-500'>Download and start using your premium tools immediately.</p>
            </div>
         </div>
       </section>
    );
};

export default StepsSection;
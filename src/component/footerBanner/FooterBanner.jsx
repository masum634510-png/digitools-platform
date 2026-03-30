import React from 'react';

const FooterBanner = () => {
    return (
        <div className=' flex flex-col text-center justify-center space-y-4 py-20 bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))]'>
            <h2 className='text-2xl md:text-5xl font-semibold text-white'>Ready to Transform Your Workflow?</h2>
            <p className='text-gray-300'> Join thousands of professionals who are already using Digitools to work
                 smarter.<br></br>Start your free trial today.
            </p>
            <div className='flex flex-col sm:flex-row justify-center items-center gap-2'>
              <button className="btn btn-active btn-white rounded-3xl text-blue-500">Explore Products</button>
              <button className="btn btn-active text-white rounded-3xl  bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))]">View Pricing</button>
            </div>  
            <p className='text-gray-300'>14-day free trial • No credit card required • Cancel anytime</p>   
        </div>
    );
};

export default FooterBanner;
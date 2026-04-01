import React from "react";
import productPng1 from '../../assets/products/1.png'

const ProductCard = ({ product }) => {
  return (
    <div className="card w-full shadow-2xl  ">
      <div className="card-body  relative">
        <img src={productPng1} alt="" className="w-10 h-10" />
        <span className="badge badge-xs badge-warning absolute top-4 right-9">{product.tagType}</span>
        <div className="flex justify-between">
          <h2 className="text-3xl font-bold">{product.name}</h2>

        </div>
        <p>{product.description}</p>
        <span className="text-xl font-bold">${product.price}/{product.period}</span>
       
        <ul className="mt-6 flex flex-col gap-2 text-sm">
          {
            product.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>{feature}</span>
              </li>
            ))
          }
        </ul>
        <div className="mt-6">
          <button className="btn btn-primary btn-block rounded-3xl">Buy Now</button>
        </div>
      </div>
    </div>


  );
};

export default ProductCard;

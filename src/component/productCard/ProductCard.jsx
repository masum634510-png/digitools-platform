import React from "react"
import img1 from '../../assets/products/1.png'
import img2 from '../../assets/products/2.png'
import img3 from '../../assets/products/3.png'
import img4 from '../../assets/products/4.png'
import img5 from '../../assets/products/5.png'
import img6 from '../../assets/products/6.png'

const images = {1: img1, 2: img2, 3: img3, 4: img4, 5: img5, 6: img6}

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="card w-full shadow-2xl  ">
      <div className="card-body  relative">
        <img src={images[product.id]} className="w-10 h-10" />
        <span className={`badge badge-xs badge-warning absolute top-4 right-9 ${product.tagType === 'popular' ? 'bg-yellow-300' : product.tagType === 'new' ? 'bg-green-300': product.tagType === 'Best Seller' ? 'bg-red-400' : 'bg-blue-300'}`}>{product.tagType}</span>
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
          <button onClick={() => handleAddToCart(product)} className="btn btn-primary btn-block rounded-3xl">Buy Now</button>
        </div>
      </div>
    </div>


  );
};

export default ProductCard;

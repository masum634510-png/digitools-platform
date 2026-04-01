import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'
import FooterSection from './component/footerSection/FooterSection'
import FooterBanner from './component/footerBanner/FooterBanner'
import PricingSection from './component/PricingSection/PricingSection'
import StepsSection from './component/StepsSection/StepsSection'
import ProductCard from './component/productCard/productCard'
import { useEffect, useState } from 'react'





function App() {

  

      const [products, setProducts] = useState([]);

      useEffect(() => {
        fetch('/Product.json')
          .then((res) => res.json())
          .then((data) => setProducts(data));
      },[]);
      
  return (
    <>

      
        
      <Navbar></Navbar>
      <Banner></Banner>
      <StatsSection></StatsSection>

      <div className='text-center my-10'>
        <h2 className='text-4xl font-bold'>Premium Digital Tools</h2>
        <p className='text-gray-600 mt-2'> Choose from our curated collection of premium digital products.</p>
        <div className='flex flex-row  gap-4 w-2/12 mx-auto p-2 bg-white shadow mt-2 rounded-3xl'>
          <button className='btn text-white bg-[linear-gradient(87.40deg,rgba(79,57,246,1),rgba(149,20,250,1))] rounded-3xl'>Products</button>
          <button className='cursor-pointer'>Cart(0)</button>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-10/12 mx-auto gap-5 my-15'>
        {
          products.map(product => (
          <ProductCard key={product.id} product={product}></ProductCard>
          ))
        }
      </div>
      
      <StepsSection></StepsSection>
      <PricingSection></PricingSection>
      <FooterBanner></FooterBanner>
      <FooterSection></FooterSection>
    </>
  )
}

export default App

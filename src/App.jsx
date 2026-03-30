import './App.css'
import Navbar from './component/navbar/Navbar'
import Banner from './component/banner/Banner'
import StatsSection from './component/StatsSection/StatsSection'
import FooterSection from './component/footerSection/FooterSection'
import FooterBanner from './component/footerBanner/FooterBanner'
import PricingSection from './component/PricingSection/PricingSection'

function App() {

  return (
    <>
   
    <Navbar></Navbar>
    <Banner></Banner>
    <StatsSection></StatsSection>
    <PricingSection></PricingSection>
    <FooterBanner></FooterBanner>
    <FooterSection></FooterSection>
    </>
  )
}

export default App

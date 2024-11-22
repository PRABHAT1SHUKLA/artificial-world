import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSec from './components/Feature'
import WorkFlow from './components/WorkFlow'
import Pricing from './components/Pricing'
import Testimonial from './components/Testimonial'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
        <div className='mx-auto px-6 pt-20 max-w-7xl'>
          <HeroSection/>
          <FeatureSec/>
          <WorkFlow/>
          <Pricing/>
          <Testimonial/>
          <Footer/>

        </div>
    </>



  
  )
}

export default App

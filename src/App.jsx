import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import FeatureSec from './components/Feature'
import WorkFlow from './components/WorkFlow'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
        <div className='mx-auto px-6 pt-20 max-w-7xl'>
          <HeroSection/>
          <FeatureSec/>
          <WorkFlow/>

        </div>
    </>



  
  )
}

export default App

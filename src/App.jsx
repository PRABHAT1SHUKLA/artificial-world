import { useState } from 'react'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <NavBar/>
        <div className='mx-auto px-6 pt-20 max-w-7xl'>
          <HeroSection/>

        </div>
    </>



  
  )
}

export default App

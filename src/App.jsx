import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Navbar } from './Navbar'
import { Header } from './Header'
import { AboutMe } from './AboutMe'
import { Experiance } from './Experiance'
import { Portfolio } from './Portfolio'
import { Footer } from './Footer'
import { ContactForm } from './ContactForm'
import { WhatsAppButton } from './WhatsAppButton'
import {Ratings} from './Ratings' 
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex flex-col '>
        <Navbar/>
         <Header/>
         <WhatsAppButton/>
         <AboutMe/>  
         <Experiance/>
         <Ratings/>
         <Portfolio/>
         <ContactForm/>
         <Footer/> 
      </div>
    </>
  )
}

export default App

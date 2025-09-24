import React from 'react'
import { motion } from "framer-motion";


export const Experiance = () => {
let experiances =[
    {
        timePeriod: "Sept 2014 - Now",
        role: "Lead iOS | Android | React Developer",
        company: "Smart Apps Planet",
    },
     {
        timePeriod: "Nov 2013 - Sep 2014",
        role: "iOS Developer",
        company: "IKF",
    },
     {
        timePeriod: "Jan 2013 - Nov 2013",
        role: "iOS Developer",
        company: "F9System",
    }
]

  return (
    <motion.div  

    initial={{ opacity: 0, x: -100 }}   // Starting point
    animate={{ opacity: 1, x: 0 }}      // Animate to
    transition={{ duration: 0.8 }}      // Animation speed

     className='  flex flex-col px-2 md:px-22 text-left mb-16 gap-4 mt-8'>
         {experiances.map((exp, idx) => (
            <ExperianceCell key={idx} experiance={exp} />
        ))} 
    </motion.div>
  )
} 

function ExperianceCell({experiance}) {
    return (  
        <div className='w-full  flex  flex-col  px-14  text-left  '>
           <h1 className='text-l font-light  text-black text-left mt-2'>
                {experiance.timePeriod}
            </h1>
             <h1 className=' text-2xl md:text-3xl font-bold  text-black text-left mt-2'>
                {experiance.role}
            </h1>
             <h1 className='text-xl font-normal  text-red-700 text-left mt-2'>
                {experiance.company}
            </h1>
        </div>   
    )  
}

export default Experiance
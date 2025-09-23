import React from 'react'
import { useState, useEffect , form } from 'react';
import { motion } from "framer-motion";

export const Portfolio = () => {
 const [portfolios, setPortfolios] = useState([]);
 useEffect(() => {
        fetch('https://smartappsplanet.com/api/get-all-portfolio-list')
            .then(response => response.json())
            .then(data => {
                setPortfolios(data?.data?.portfolio_list); 
                console.log(data);
                // Log the data after fetching and setting state
            });
    }, []);
  return (
    <div>
         <div>
          {portfolios.map((portfolioItem, index) => (
            <PortfolioCell 
                key={index} 
                portfolio={portfolioItem} 
                index={index} 
            /> 
            ))}
      </div>
    </div>
  )
}


function PortfolioCell({portfolio , index}){
  return(
    <motion.div 
    
    initial={{ opacity: 0, x: -100 }}   // Starting point
    animate={{ opacity: 1, x: 0 }}      // Animate to
    transition={{ duration: 0.8 }}      // Animation speed

    className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse '}  text-black mt-6 mx-4  md:mx-15 p-4 rounded-xl gap-8 justify-center overflow-hidden bg-white`}> 
    {/* <div className='w-full md:w-100 md:h-70  lg:w-140 lg:h-100 rounded-xl'>

    </div> */}
         <img className='w-full md:w-100 md:h-70  lg:w-140 lg:h-100 rounded-xl' src={`https://smartappsplanet.com/${portfolio.project_image}`} alt={portfolio.title} />
         <div className='flex flex-col pt-6 gap-2'>
            <h1 className='text-3xl md:text-4xl text-start'>{portfolio.project_name}</h1>
            <p className='text-start font-extralight'>{portfolio.project_description}</p>   
            <button  className='bg-black w-30 mt-2 px-2 rounded-sm text-white hover:bg-red-800 h-11 hover:text-white'>
             App store
               </button>
         </div>
     </motion.div>
  )
}

export default Portfolio


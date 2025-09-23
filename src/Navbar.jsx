import React from 'react'
import logo from "./assets/SAP2.png";

export const Navbar = () => {
  return (
    <div className='w-full shadow-lg py-4 md:flex hidden flex-row justify-between items-center bg-white px-22 fixed top-0 left-0'> 
        {/* <img className='w-60' src="https://smartappsplanet.com/assets/user/img/SmartApp_logo.png" alt="sap" />  */}
        <img className='w-75 h-15' src={logo} alt="sap" /> 
        <div className='flex flex-row items-center p-4 bg-white text-black gap-5'>
            <a href="#" class="relative inline-block text-black group text-xl font-bold hover:text-red-700">
                    Home          
            <span
                    class="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full text-xl font-bold"
                 ></span>
            </a> 
            <a href="#" class="relative inline-block text-black group text-xl font-bold hover:text-red-700">
                    About          
               <span
                     class="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full text-xl font-bold"
                 ></span>
            </a>

            <a href="#" class="relative inline-block text-black group text-xl font-bold hover:text-red-700">
                    Portfolio          
               <span
                     class="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full text-xl font-bold"
                 ></span>
            </a>

             <a href="#" class="relative inline-block text-black group text-xl font-bold hover:text-red-700">
                    Contact          
               <span
                     class="absolute left-0 -bottom-1 w-0 h-0.5 bg-red-700 transition-all duration-300 group-hover:w-full text-xl font-bold"
                 ></span>
            </a>           
        </div>
    </div>
  )
}

export default Navbar
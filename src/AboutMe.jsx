import React from 'react'
import profile from "./assets/profile3.jpg";


export const AboutMe = () => {
let linkdinLink = "https://www.linkedin.com/in/taimur-imam-7aa32486/"
  return (
    <div className='w-full  flex flex-col  lg:flex-row  p-2 md:p-8'>
        <div className='w-full  py-4 flex  px-4 md:px-22  '>
            <img className='w-120 h-120 object-cover mt-12 rounded-full border-8  border-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.2),0_2px_4px_-1px_rgba(0,0,0,0.02)] ' src={profile} alt="header" />
        </div>
        <div className='w-full  py-4 flex  flex-col  px-4  text-left  '>
            <h1 className='text-5xl font-extrabold  text-black text-left'>About Me</h1>
            <p className=' text-black text-left text-l font-extralight mt-2'>I have over 10 years of experience working with clients of all sizes. Social Networks, Games, Education, Retail, I have done it all! I especially love working on challenging, never-done-before projects!</p>  
            <p className=' text-black text-left text-l font-extralight mt-4'>
                My area of focus lies in creating beautifully designed apps for you and your customers. I can take your project from the concept stage right through to the final product release. My code is clean, documented, extensible, well tested and low maintenance. You will not get all that from an overseas dev shop!
            </p>     
            <p className=' text-black text-left text-l font-extralight mt-4'>
                If you would like a rough quote for your next project, try this great online tool: https://estimatemyapp.com, or get in contact for something more accurate!         
           </p>   
            <h1 className='text-5xl font-extrabold  text-black text-left mt-6'>Experience</h1>
            <p className=' text-black text-left text-l font-extralight mt-4'>
                With over a decade of experience since 2012, I’ve been designing and developing iOS, Android, and Web applications for companies across the globe. My focus is on creating impactful digital solutions that help businesses grow and make everyday life easier for people.
           </p>    
           <a className='w-40' href= {linkdinLink} target="_blank" rel="noopener noreferrer"> 
            <button className='bg-[#0A66C2] text-white px-6 py-3 rounded-sm w-40 mt-6 hover:bg-[#004182]'>Linkdin</button>
           </a>
        </div>  
    </div>
  )         
}



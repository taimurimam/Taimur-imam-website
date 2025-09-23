import React from 'react'

export const Ratings = () => { 
  let ratings = [
    {name:'Patti Hamaguchi' , 
      profession:'Hamaguchi Apps' , 
      rating: 5 , 
      image:'https://img1.wsimg.com/isteam/ip/decfcfd0-8af6-48d4-9915-b56825c1acf4/Like%20this.jpeg/:/cr=t:16.22%25,l:16.22%25,w:67.57%25,h:67.57%25/rs=w:730,h:730,cg:true,m',
      text : 'Another successful app project with Taimur and his company. I highly recommend him!'
    }, 
        {name:'Sarfaraj Biswas' , 
      profession:'iOS Developer' , 
      rating: 3,
      image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      text:'They went above and beyond to make the entire process smooth and stress-free. Their dedication, knowledge, and personal touch made all the difference.'
    },
        {name:'Salman Khan' , 
      profession:'iOS Developer' , 
      rating: 4,
      image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',

      text : 'Working with them was a seamless experience; they listened carefully to my needs and guided me every step of the way. Their professionalism and genuine care truly set them apart.'

    },
      {name:'Sk Azad' , 
      profession:'iOS Developer' , 
      rating: 4, 
      image:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D',
      text:'They went above and beyond to make the entire process smooth and stress-free. Their dedication, knowledge, and personal touch made all the difference.'

    },
      {name:'Ayaz' , 
      profession:'iOS Developer' , 
      rating: 0, 
     image:'https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=',
      text:'From the very first meeting, they understood my vision and helped me find the perfect property. '
    } 
  ]
  return ( 
    <div className='px-4 md:px-20 px-auto '>
         <div className='flex flex-col text-black font-light gap-2 mt-15 '>
                <h1 className='font-bold text-3xl text-black'>
                    Customer <span className='border-b-2 font-light underline underline-offset-6 '>Testimonials</span> 
                </h1 >
               <div className='w-65 text-center justify-center mx-auto mt-4'>
                  Real Stories from Those Who Found Home with Us
               </div>
            </div> 
        <div className='gap-4 flex flex-col lg:flex-row p-2  md:p-12 justify-center mx-auto md:flex-wrap items-center'>
          { // Rtatting list from the given Array
            ratings.map((rati)=>(
            <Rating rating={rati}/>
            ))}
        </div>
    </div>
    
  )
}

export default Ratings


function Rating({rating}){
    return(
        <div className='bg-white  w-full md:w-80 h-100 rounded-xl flex flex-col items-center p-4 shadow-l gap-2'>
            <img className='w-28 h-28 rounded-full mt-4' src={rating.image} alt="Profile image" />
            <div className='text-xl font-bold text-black'>
                {rating.name}
            </div>
            <div className='text-sm font-light text-black'>
                {rating.profession}
            </div> 
            <div className='text-sm font-light text-black mt-3'>
              {rating.text}
              </div> 
        </div>
    )
}


 function Star({ rating = 3, totalStars = 5 }) {
  return (
    <div className="flex space-x-1 text-white text-2xl">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>
          {index < rating ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

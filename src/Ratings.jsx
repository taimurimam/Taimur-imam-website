import React from "react";

export const Ratings = () => {
  let ratings = [
    {
      name: "Patti Hamaguchi",
      profession: "Hamaguchi Apps",
      rating: 7,
      image:
        "https://img1.wsimg.com/isteam/ip/decfcfd0-8af6-48d4-9915-b56825c1acf4/Like%20this.jpeg/:/cr=t:16.22%25,l:16.22%25,w:67.57%25,h:67.57%25/rs=w:730,h:730,cg:true,m",
      text: "Very good job. A very good developer who has the skills, knowledge and patience. He helped me successfully complete the iOS project. I'm very satisfied",
    },
    {
      name: "Bader Alghanim",
      profession: "CEO at Deema Apps",
      rating: 3,
      image:
        "https://media.licdn.com/dms/image/v2/D4D03AQHmoYY_j2_gIQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1720255059732?e=2147483647&v=beta&t=PRrAJ_mrLQN5eZq80QG6egODrAzvUn5YUJfsiqmkfSc",
      text: "We enjoyed working with Taimur. He did an excellent job with a very tight deadline! We will be using his services again.",
    },
    {
      name: "Esteban Salsano",
      profession: "CEO",
      rating: 4,
      image:
        "https://www.upwork.com/profile-portraits/c1tQ33p6_kNyCycRSgfmvLWvDC3l9Hj0NdeODdYRAGJe30wyyjCVmn6BRj4SXIEKhA",

      text: "Great Freelancer to work with, the apps made by him are high quality and easy to work with him.",
    },
    {
      name: "Eric Fernandez",
      profession: "CEO",
      rating: 4,
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFsYib7FHfp6w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1718290865491?e=1761782400&v=beta&t=igunyXrv-LOVJXIa1LIO0-heHUDa_M2jFJFEFPqPz_8",
      text: "I really appreciate the hard word and patience of Taimur and his team. Good job with everything.",
    },

    {
      name: "Matej S",
      profession: "Ljubljana, Slovenia",
      rating: 0,
      image:
        "https://media.istockphoto.com/id/1386479313/photo/happy-millennial-afro-american-business-woman-posing-isolated-on-white.jpg?s=612x612&w=0&k=20&c=8ssXDNTp1XAPan8Bg6mJRwG7EXHshFO5o0v9SIj96nY=",
      text: "Collaborating with Taimur on the development of the prototype of our mobile application was truly outstanding. His responsiveness and his professional approach made communication a breeze, and he swiftly grasped our project's objectives and our desired outcomes.",
    },
  ];
  return (
    <div id="Testinimial" className="px-4 md:px-20 px-auto ">
      <div className="flex flex-col text-black font-light gap-2 mt-15 ">
        <h1 className="font-bold text-3xl text-black">
          Client{" "}
          <span className="border-b-2 font-light underline underline-offset-6 ">
            Testimonials
          </span>
        </h1>
        <div className="w-65 text-center justify-center mx-auto ">
          Hear what our clients have to say about us.
        </div>
      </div>
      <div className="gap-4 flex flex-col lg:flex-row p-2  md:p-12 justify-center mx-auto md:flex-wrap items-center">
        {
          // Rtatting list from the given Array
          ratings.map((rati) => (
            <Rating rating={rati} />
          ))
        }
      </div>
    </div>
  );
};

export default Ratings;

function Rating({ rating }) {
  return (
    <div className="bg-white  w-full md:w-80 h-100 rounded-xl flex flex-col items-center p-4 shadow-l gap-2">
      <img
        className="w-28 h-28 rounded-full mt-4"
        src={rating.image}
        alt="Profile image"
      />
      <div className="text-xl font-bold text-black">{rating.name}</div>
      <div className="text-sm font-light text-black">{rating.profession}</div>
      <div className="text-sm font-light text-black mt-3">{rating.text}</div>
    </div>
  );
}

function Star({ rating = 3, totalStars = 5 }) {
  return (
    <div className="flex space-x-1 text-white text-2xl">
      {[...Array(totalStars)].map((_, index) => (
        <span key={index}>{index < rating ? "★" : "☆"}</span>
      ))}
    </div>
  );
}

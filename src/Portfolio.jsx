import React from "react";
import { useState, useEffect, form } from "react";
import { motion } from "framer-motion";
import axios from "axios"; 
import { UserList } from "./UserList";


export const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  let baseUrl = "https://smartappsplanet.in/api/get-all-portfolio-list"; 
  useEffect(() => {
  getPortFilios();
  }, []);

function getPortFilios() { // all API to get the portfolios ....... 
    axios
      .get(baseUrl)
      .then((res) => {
        setPortfolios(res?.data.data.portfolio_list)
      })
      .catch((err) => console.error(err));
  } 

  return (
    <div id="Portfolio">
      <div className="flex flex-col text-black font-light gap-2 mt-15 ">
        <h1 className="font-bold text-3xl text-black">
          My{" "}
          <span className="border-b-2 font-light underline underline-offset-6 ">
            Portfolio
          </span>
        </h1>
        <div className="w-65 text-center justify-center mx-auto ">
          Hear are some my recent works.
        </div>
      </div>
      <div>
        {portfolios.map((portfolioItem, index) => (
          <PortfolioCell key={index} portfolio={portfolioItem} index={index} />
        ))}
      </div>
      {/* <UserList/> */}
    </div>
  );
};

function PortfolioCell({ portfolio, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }} // Starting point
      animate={{ opacity: 1, x: 0 }} // Animate to
      transition={{ duration: 0.8 }} // Animation speed
      viewport={{ once: true, amount: 0.25 }} // amount = what fraction must be visible
      className={`flex flex-col ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse "
      }  text-black mt-6 mx-4  md:mx-15 p-4 rounded-xl gap-8 justify-center overflow-hidden bg-white`}
    >
      {/* <div className='w-full md:w-100 md:h-70  lg:w-140 lg:h-100 rounded-xl'>

    </div> */}
      <img
        className="w-full md:w-100 md:h-70  lg:w-140 lg:h-100 rounded-xl"
        src={`https://smartappsplanet.in/${portfolio.project_image}`}
        alt={portfolio.title}
      />
      <div className="flex flex-col pt-6 gap-2">
        <h1 className="text-3xl md:text-4xl text-start">
          {portfolio.project_name}
        </h1>
        <p className="text-start font-extralight">
          {portfolio.project_description}
        </p>
        <button className="bg-black w-30 mt-2 px-2 rounded-sm text-white hover:bg-gray-800 h-11 hover:text-white">
          App store
        </button>
      </div>
    </motion.div>
  );
}

export default Portfolio;

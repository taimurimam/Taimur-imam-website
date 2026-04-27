import React from "react";
import { Home } from "lucide-react";
import sapLogo from "./assets/home.png";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Header = () => {
  let myUpworkLinlk =
    "https://www.upwork.com/freelancers/~01e19fb95a97128be7?mp_source=share";

  return (
    <motion.div
      initial={{ opacity: 0, y: +100 }} // Starting point
      animate={{ opacity: 1, y: 0 }} // Animate to
      transition={{ duration: 1.1 }} // Animation speed
      className="w-full  flex flex-col lg:flex-row mt-1 md:mt-25"
    >
      <div id="Home" className="w-full  py-4 flex flex-col px-4 md:px-22 text-left mt-10 md:mt-30">
        <h1 className="text-5xl font-extrabold  text-black text-left">
          Hello, I'm Taimur Imam.
        </h1>
        <p className=" text-black text-left text-xl font-light mt-2">
          Full Stack Developer | iOS | Android | Web Dev.{" "}
        </p>
        <p className=" text-black text-left text-xl font-light mt-8">
          I am a Top Rated Plus developer with a 100% job success rate.
        </p>
        <button
          onClick={() =>
            window.open(
              myUpworkLinlk,
              "_blank"
            )
          }
          className="bg-[#14A800]  text-white px-6 py-3 rounded-sm w-40 mt-2 hover:bg-[#128700]"
        >
          Upwork
        </button>

        <SocialIcons />
      </div>
      <div className="w-full  py-4 flex  px-4 md:px-22  ">
        <img
          className="hidden md:block w-full h-96 object-cover mt-16"
          src={sapLogo}
          alt="header"
        />
      </div>
    </motion.div>
  );
};

function SocialIcons() {
  let linkdinLink = "https://www.linkedin.com/in/taimur-imam-7aa32486/";
  let gitHubLink = "https://github.com/taimurimam";
  let twitterLink = "https://x.com/IMAMTAIMUR"; 

  return (
    <div className="flex space-x-4 mt-14">
      <a href={gitHubLink} target="_blank" rel="noopener noreferrer">
        <FaGithub className="w-6 h-6 hover:text-red-700 transition-colors" />
      </a>
      <a href={linkdinLink} target="_blank" rel="noopener noreferrer">
        <IoLogoLinkedin className="w-6 h-6 hover:text-red-700 transition-colors" /> 
      </a>

      {/* <a href={twitterLink} target="_blank" rel="noopener noreferrer">
        <FaTwitter className="w-6 h-6 hover:text-red-700 transition-colors" />
      </a> */}
    </div>
  );
}

export default Header;

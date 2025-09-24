
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Footer = () =>{
    let linkdinLink = "https://www.linkedin.com/in/taimur-imam-7aa32486/"
    let gitHubLink = "https://github.com/taimurimam"
    let twitterLink = "https://x.com/IMAMTAIMUR"
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Menu */}
        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <ul className="flex flex-wrap gap-6 text-sm uppercase tracking-wide">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#portfolio" className="hover:text-white transition">Portfolio</a></li>
            <li><a href="#experience" className="hover:text-white transition">Testimonials</a></li>
            <li><a href="#experience" className="hover:text-white transition">Experience</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact Us</a></li>
          </ul>

          {/* Social icons */}
          <div className="flex gap-4 mt-6 md:mt-0">
            <a href={linkdinLink} target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-2xl hover:text-white transition" />
            </a>
            <a href={linkdinLink} target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-2xl hover:text-white transition" />
            </a>
            <a href={twitterLink} target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-2xl hover:text-white transition" />
            </a>
          </div>
        </div> 

        <div className="text-center mt-6 text-sm">
          📍 ASO 526 Astra Tower, Rajarhat Main Rd, Action Area II, Newtown,  
          New Town, West Bengal 700161
        </div>

        {/* Bottom text */}
        <div className="text-center text-sm mt-6">
          © {new Date().getFullYear()} Taimur imam. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer
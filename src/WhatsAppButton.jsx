

import { FaWhatsapp } from "react-icons/fa";
import { motion } from "framer-motion";

export const WhatsAppButton = () =>{
  return ( 
    < motion.div 
     initial={{ opacity: 0, x: 100 }}   // Starting point
     animate={{ opacity: 1, x: 0 }}      // Animate to
    transition={{ duration: 0.8 }}      // Animation speed
    >
    <a
      href="https://wa.me/919836465657?text=Hi%20I%20visited%20your%20website%20and%20want%20to%20connect"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="hidden md:inline">Chat on WhatsApp</span>
    </a>
    </motion.div>
   
  );
}

export default WhatsAppButton
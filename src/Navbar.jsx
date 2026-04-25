import React, { useEffect, useState } from "react";
import logo from "./assets/SAP2.png";

export const Navbar = () => {
  const NAVBAR_HEIGHT = 90; // adjust if your navbar height differs
  const [active, setActive] = useState("Home");

  const links = [
    { id: "Home", label: "Home" },
    { id: "About", label: "About" },
    { id: "Testinimial", label: "Testimonials" },
    { id: "Portfolio", label: "Portfolio" },
    { id: "Contact", label: "Contact" },
  ];

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
    window.scrollTo({ top, behavior: "smooth" });
    setActive(id);
    // update URL hash without jumping
    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    // Scroll-spy using IntersectionObserver
    const observerOptions = {
      root: null,
      rootMargin: `-${NAVBAR_HEIGHT}px 0px 0px 0px`, // account for fixed navbar
      threshold: 0.5, // adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className="w-full shadow-lg py-4 md:flex hidden flex-row justify-between items-center bg-white fixed top-0 left-0 z-50"
      style={{ height: NAVBAR_HEIGHT }}
    >
      {/* logo */}
      <img className="w-75 h-15 ml-6" src={logo} alt="sap" />

      {/* nav links */}
      <div className="flex flex-row items-center p-4 bg-white text-black gap-7 mr-6">
        {links.map((link) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={(e) => handleClick(e, link.id)}
            className={`relative inline-block group text-xl font-bold ${
              active === link.id ? "text-red-700" : "text-black"
            }`}
            // optional inline fallback color (if needed)
            style={{ color: active === link.id ? "#b91c1c" : undefined }}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 bg-red-700 transition-all duration-300 ${
                active === link.id ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  );
};






export default Navbar;


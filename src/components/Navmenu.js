// components/Navmenu.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo1.png";
import MegaMenu from "./MegaMenu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMegaMenu, setShowMegaMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  let navbarClasses = ["navbar"];
  if (scrolled) {
    navbarClasses.push("", "rounded-full", "mt-2");
  } else {
    navbarClasses.push("bg-transparent", "mt-0");
  }

  const handleMegaMenuToggle = () => {
    setShowMegaMenu((prevShowMegaMenu) => !prevShowMegaMenu);
  };

  return (
    <nav
      className={`${navbarClasses.join(
        " "
      )} fixed w-full top-0 z-50 transition duration-300 py-2`}
    >
      <div
        className={`transition duration-300 ${
          scrolled
            ? "max-w-2xl mx-auto bg-gray-800 rounded-full"
            : "max-w-6xl mx-auto"
        } px-4 py-2 flex justify-between items-center`}
      >
        <Link to="/">
          <img src={logo} alt="Logo" className="h-10" />
          
          {" "}
          {/* Adjust the height as needed */}
        </Link>
        <div className="hidden md:flex space-x-10 justify-center items-center flex-grow">
          <Link
            to="/"
            className={`text-base ${
              scrolled ? "text-white" : "text-red-500"
            } link-fill-effect tracking-widest font-semibold`}
          >
            Home
          </Link>

          <div className="relative">
            <button
              onClick={handleMegaMenuToggle}
              className={`text-base ${
                scrolled ? "text-white" : "text-red-500"
              } link-fill-effect tracking-widest focus:outline-none flex items-center justify-center font-semibold`}
            >
              <span className="flex items-center">
                <span>Products</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  fill={scrolled ? "white" : "red"}
                  className="bi bi-chevron-down ml-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </span>
            </button>

            {showMegaMenu && <MegaMenu />}
          </div>
          <Link
            to="/services"
            className={`text-base ${
              scrolled ? "text-white" : "text-red-500"
            } link-fill-effect tracking-widest font-semibold`}
          >
            About Us
          </Link>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`text-xl ${scrolled ? "text-black" : "text-red-500"}`}
          >
            {menuOpen ? "x" : "☰"}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <Link
            to="/"
            className="block px-4 py-2"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="block px-4 py-2"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="/services"
            className="block px-4 py-2"
            onClick={() => setMenuOpen(false)}
          >
            About Us
        
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect, useRef } from "react";
import "./Navbar.css";

function Navbar() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(); // Create a ref to refer to the hamburger menu

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="container">
        <a className="title-font" href="#about">
          Muna Toktobolotova
        </a>
        {isMobile ? (
          <div ref={menuRef}>
            <button className="hamburger-menu" onClick={toggleMenu}>
              <i className="fas fa-bars"></i>
            </button>
            {isMenuOpen && (
              <nav className="mobile-nav">
                <a href="#skills" className="link" onClick={toggleMenu}>
                  Skills
                </a>
              </nav>
            )}
          </div>
        ) : (
          <nav>
            <a href="#skills" className="link">
              Skills
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;

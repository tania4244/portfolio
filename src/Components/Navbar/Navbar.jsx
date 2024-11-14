import { useState, useEffect } from "react";
import { FaDownload } from "react-icons/fa";
import { HiRectangleGroup } from "react-icons/hi2";
import { IoLogoAmplify, IoMenu } from "react-icons/io5";
import { RiCloseLargeFill } from "react-icons/ri";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 50; // Adjust offset for fixed navbar height
      const sectionPosition =
        section.getBoundingClientRect().top + window.scrollY; // Get the absolute position
      const offsetPosition = sectionPosition - offset; // Subtract the offset
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (id) => {
    setActiveLink(id);
    scrollToSection(id);
  };

  const navLinks = (
    <>
      <NavLink
        to="/"
        onClick={() => handleNavClick("home")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "home"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="#about"
        onClick={() => handleNavClick("about")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "about"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        About
      </NavLink>
      <NavLink
        to="#skills"
        onClick={() => handleNavClick("skills")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "skills"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        Skills
      </NavLink>
      <NavLink
        to="#works"
        onClick={() => handleNavClick("works")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "works"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        My Works
      </NavLink>
      <NavLink
        to="#blogs"
        onClick={() => handleNavClick("blogs")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "blogs"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        Blogs
      </NavLink>
      <NavLink
        to="#contact"
        onClick={() => handleNavClick("contact")}
        className={({ isActive }) =>
          `nav-link px-2 cursor-pointer capitalize hover:text-[#2b69be] pb-1 border-b-[2px] border-transparent ${
            activeLink === "contact"
              ? "text-white border-b-[#2b69be]"
              : "text-zinc-50"
          }`
        }
      >
        Contact Me
      </NavLink>
    </>
  );

  // Set default active link when the component mounts
  useEffect(() => {
    setActiveLink("home");
  }, []);

  return (
    <div
      id="navbar"
      className="fixed top-0 left-0 w-full h-24 flex items-center z-40 bg-gradient-to-b from-zinc-900 to-zinc-900/0 px-6"
    >
      <div className="max-w-screen-2xl mx-auto w-full flex items-center justify-between md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
        {/* Logo */}
        <div className="flex-shrink-0 flex justify-start">
          <a
            href="#home"
            className="flex items-center justify-center hover:shadow-lg duration-300 hover:scale-[1.25] transition-all"
          >
            <IoLogoAmplify className="text-6xl text-[#0a61db] mr-2 bg-zinc-100 px-1 rounded-2xl" />
          </a>
        </div>

        {/* Menu Button (visible on mobile) */}
        <div className="relative md:justify-self-center flex items-center justify-end gap-2 flex-1">
          <button
            onClick={() => setNavOpen((prev) => !prev)}
            className="btn md:hidden bg-zinc-50/10 rounded-xl hover:bg-zinc-50/15"
          >
            <span className="text-2xl">
              {navOpen ? <RiCloseLargeFill /> : <IoMenu />}
            </span>
          </button>

          {/* Navigation Items (hidden on mobile, visible on medium and larger) */}
          <div className="hidden md:flex items-center gap-4 bg-zinc-900/90 px-6 py-3 rounded-xl hover:shadow-lg duration-300 hover:scale-[1.05] transition-all">
            {navLinks}
          </div>
        </div>

        {/* Mobile Navigation (visible only if navOpen is true) */}
        {navOpen && (
          <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-3/4 md:hidden flex flex-col items-center py-4 text-xl font-medium font-poppins tracking-wide text-zinc-50/50 gap-4 bg-zinc-900/95 rounded-lg shadow-2xl animate__animated animate__zoomIn">
            {navLinks}
          </div>
        )}

        {/* Contact Button (hidden on mobile) */}
        <div className="flex-shrink-0 flex justify-end">
          <Link to="#contact" onClick={() => handleNavClick("contact")}>
            <button className="btn bg-[#2b69be] hover:bg-[#07469e] text-white hidden md:block">
              <span className="flex items-center justify-center gap-2">
                <HiRectangleGroup className="text-xl" /> Hire Me
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

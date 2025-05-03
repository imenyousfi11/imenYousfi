import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggleButton from "../../ui/ThemeToggleButton";
import logo from "../../../assets/images/Imen Yousfi.png"
import "./header.css";
import { Layout } from 'antd';

const { Header } = Layout;

function Navbar() {
  const navRef = useRef();

  const toggleNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  const handleClick = (anchor) => (e) => {
    e.preventDefault();
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      toggleNavbar(); 
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      window.history.pushState(null, null, `#${anchor}`); 
    }
  };
  

  return (
    <Header className="header">
      <div style={{ width: '33vw', maxWidth: '100%' }}>
        <a href="#home">
          <img src={logo} className="logo" alt="Imen Yousfi Logo"  />
        </a>
      </div>

      <nav ref={navRef}>
        <a href="#home" onClick={handleClick("home")}>
          Home
        </a>
        <a href="#about" onClick={handleClick("about")}>
          About
        </a>
        <a href="#services" onClick={handleClick("services")}>
          Services
        </a>
        <a href="#skills" onClick={handleClick("skills")}>
          Skills
        </a>
        <a href="#Previous-Work" onClick={handleClick("Previous-work")}>
          Previous Work
        </a>

        <button className="nav-btn nav-close-btn" onClick={toggleNavbar}>
          <FaTimes />
        </button>
      </nav>

      <ThemeToggleButton />

      <button className="nav-btn" onClick={toggleNavbar}>
        <FaBars />
      </button>
    </Header>
  );
}

export default Navbar;

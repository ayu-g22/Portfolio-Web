import Logo from "../assets/logo.png";
import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-10 flex item-center justify-between">
        <div className="flex flex-shrink-0 item-center">
            
            <img src={Logo} alt="logo" className="mx-2 h-20"/>
        </div>
        <div className="m-8 flex item-center justify-center gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/the-ayush-gupta/" target="_blank"><FaLinkedin /></a>
            <a href="https://github.com/ayu-g22" target="_blank"><FaGithub /></a>
            <a href="https://x.com/AyuG225" target="_blank"><FaSquareXTwitter /></a>
            <a href="https://www.instagram.com/_shhayushh_/" target="_blank"><FaInstagram /></a>
        </div>
    </nav>
  )
}

export default Navbar

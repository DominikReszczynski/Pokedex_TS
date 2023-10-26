import "./footer.css";
import Logo from "../../assets/PokeLab_Logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_ul">
        <li className="footer_li">
          <Link to="/contact">KONTAKT</Link>
        </li>
        <li className="footer_li">|</li>
        <li className="footer_li">
          <a href="https://www.figma.com/file/GOqvXex3UWUjmmV7Wmyq2i/Untitled?type=design&node-id=0-1&mode=design&t=BUfOWef2motmaByP-0">
            <img src={Logo} alt="" />
          </a>
        </li>
        <li className="footer_li">|</li>
        <li className="footer_li">TWÓRCY</li>
      </ul>
    </footer>
  );
};

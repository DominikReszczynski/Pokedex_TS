import "./footer.css";
import Logo from "../../assets/PokeLab_Logo.png";
import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer_ul">
        <li className="footer_li">KONTAKT</li>
        <li className="footer_li">|</li>
        <li className="footer_li">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </li>
        <li className="footer_li">|</li>
        <li className="footer_li">TWÓRCY</li>
      </ul>
    </footer>
  );
};

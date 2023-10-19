import "./footer.css";
import Logo from "../../assets/PokeLab_Logo.png";
export const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>KONTAKT</li>
        <li>|</li>
        <li>
          <img src={Logo} alt="" />
        </li>
        <li>|</li>
        <li>TWÓRCY</li>
      </ul>
    </footer>
  );
};

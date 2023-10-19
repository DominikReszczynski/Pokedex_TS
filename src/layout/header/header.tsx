import { Link } from "react-router-dom";
import Hamburger from "../../assets/Hamburger_icon.svg.png";
import Logo from "../../assets/PokeLab_Logo.png";
import "./header.css";
export const Header = () => {
  return (
    <header>
      <section className="top-nav">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo" />
        </Link>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <img src={Hamburger} alt="" />
        </label>
        <ul className="menu">
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/games">GAMES</Link>
          </li>
          <li>
            <Link to="/pokedex">POKEDEX</Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

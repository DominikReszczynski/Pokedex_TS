import { Link } from "react-router-dom";
import Hamburger from "../../assets/Hamburger_icon.svg.png";
import Logo from "../../assets/PokeLab_Logo.png";
import "./header.css";
import { useState } from "react";
export const Header = () => {
  const [activePage, setActivePage] = useState(0);
  console.log(activePage);
  return (
    <header>
      <section className="top-nav">
        <Link to="/">
          <img
            className="logo"
            onClick={() => setActivePage(0)}
            src={Logo}
            alt="logo"
          />
        </Link>
        <input id="menu-toggle" type="checkbox" />
        <label className="menu-button-container" htmlFor="menu-toggle">
          <img src={Hamburger} alt="" />
        </label>
        <ul className="menu">
          <li
            className={`menu_button ${activePage === 1 ? "activeSite" : ""}`}
            onClick={() => setActivePage(1)}
          >
            <Link to="/about">ABOUT</Link>
          </li>
          <li
            className={activePage === 2 ? "activeSite" : ""}
            onClick={() => setActivePage(2)}
          >
            <Link to="/games">GAMES</Link>
          </li>
          <li
            className={activePage === 3 ? "activeSite" : ""}
            onClick={() => setActivePage(3)}
          >
            <Link to="/pokedex">POKEDEX</Link>
          </li>
        </ul>
      </section>
    </header>
  );
};

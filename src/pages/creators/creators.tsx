import pokeLabLogo from "../../assets/PokeLab_Logo.png";
import "./creators.scss";

export const Creators = () => {
  return (
    <main className="site_conteiner">
      <div className="creators__wrapper">
        <h1 className="creators__title">
          TWÓRCY <img src={pokeLabLogo} alt="logo pokelab" />
        </h1>
        <div>
          Programiści:
          <br />
          Dominik Reszczyński
          <br />
          Paweł Dowgiałło
        </div>
        <div>
          Pomysłodawca i projektant:
          <br />
          Dominik Reszczyński
        </div>
        <div>
          PokeAPI:
          <br />
          link: <a href="https://pokeapi.co/">https://pokeapi.co/</a>
        </div>
      </div>
    </main>
  );
};

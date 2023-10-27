// @ts-nocheck
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Games } from "./pages/games/games";
import { Pokedex } from "./pages/pokedex/pokedex";
import { Contact } from "./pages/contact/contact";
import { useEffect, useState } from "react";
import { PokemonInfo } from "./pages/pokedex/pokemonInfo";

function App() {
  const [getPokemons, setPokemons] = useState([]);
  const [getError, setError] = useState("");
  const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=1015";

  useEffect(() => {
    fetch(BASE_POKEMON_API_URL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const pokemonList = data.results;

        const pokemonPromises = pokemonList.map((pokemon) => {
          setPokemons((prevPokemons) => [...prevPokemons, pokemon.name]);
        });
        // Promise.all(pokemonPromises)
        //   .then((pokemonsData) => {
        //     setPokemons(pokemonsData);
        //     setIsLoading(false);
        //   })
        // .catch((error) => {
        //   setError(error?.message);
        //   // setIsLoading(false);
        // });
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);
  console.log(getPokemons);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/pokedex" element={<Pokedex />} />
            {getPokemons.map((pokemon) => {
              return (
                <Route
                  key={pokemon}
                  path={"/pokedex/" + pokemon}
                  element={<PokemonInfo pokemon={pokemon} />}
                />
              );
            })}

            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

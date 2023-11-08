// @ts-nocheck
import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./layout/layout";
import { Home } from "./pages/home/home";
import { About } from "./pages/about/about";
import { Games } from "./pages/games/games";
import { Pokedex } from "./pages/pokedex/pokedex";
import { PokemonInfo } from "./pages/pokedex/pokemonInfo/pokemonInfo";
import { Contact } from "./pages/contact/contact";
import { SinglePost } from "./pages/posts/SinglePost";

function App() {
  const [getPokemons, setPokemons] = useState([]);
  const [getError, setError] = useState("");
  const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon?limit=2000";

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
  console.log('getPokemons: ', getPokemons);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
            <Route path="/pokedex" element={<Pokedex getPokemonsName={getPokemons} />} />
            {getPokemons.map((pokemon, index) => {
              return (
                <Route
                  key={pokemon}
                  path={"/pokedex/" + pokemon}
                  element={<PokemonInfo key={index} getPokeLength={getPokemons} pokemonName={pokemon} pokemonIndex={index + 1} />}
                />
              );
            })}

            <Route path="/contact" element={<Contact />} />
            <Route path="/posts/:index" element={<SinglePost />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

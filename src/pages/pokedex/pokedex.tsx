// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pokedex.css";

import { OnePokemon } from "./onePokemon";
import { PokedexInput } from "./PokedexInput/PokedexInput";
import { Link } from "react-router-dom";

export function Pokedex({ getPokemonsName }) {
  const pokemonsInAvaryGenaration = [0, 151, 251, 386, 493, 649, 721, 809, 905];
  const pokemonsOnPage = [151, 100, 135, 107, 156, 72, 88, 96, 105];
  const [getPokemons, setPokemons] = useState([]);
  const [pokemonName, setPokemonName] = useState('');
  const [getIsLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [setError] = useState(null);
  const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
  const pokedexOffset = pokemonsInAvaryGenaration[currentPage - 1];
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `${BASE_POKEMON_API_URL}?limit=${pokemonsOnPage[currentPage - 1]
      }&offset=${pokedexOffset}`,
      // {
      //   cache: "force-cache",
      // }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const pokemonList = data.results;
        const pokemonPromises = pokemonList.map((pokemon) =>
          fetch(pokemon.url).then((response) => response.json())
        );
        Promise.all(pokemonPromises)
          .then((pokemonsData) => {
            // console.log("pokemonsData: ", pokemonsData);
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error?.message);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, [pokedexOffset]);

  // const pokedexPages = () => {
  //   const pagesCount = Math.ceil(getPokemonsName.length/pokemonsOnPage)
  //   const
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];

  //   }
  // }

  // console.log('pages: ',pokedexPages)

  const nextPage = () => {
    currentPage >= 1 ? setCurrentPage(currentPage + 1) : null;
  };

  const prevPage = () => {
    currentPage <= 1 ? null : setCurrentPage(currentPage - 1);
  };

  return (
    <div className="site_conteiner ">
      <div className="pokedex__header">
        <PokedexInput getPokemonsName={getPokemonsName}/>              
      </div>
      <div className="pokedex_page_index">
        {pokemonsInAvaryGenaration.map((numberOfPokemons, index) => {
          return (
            <button
              key={index}
              disabled={currentPage === index + 1}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <div className="container--grid-wrapper">
        <h1>{getIsLoading && <div className="loader" />}</h1>
        {getPokemons.map((pokemon) => (
          
          <Link key={pokemon.name} to={`/pokedex/${pokemon.name}`}>            
            <OnePokemon pokemon={pokemon} />
          </Link>
        ))}
      </div>
      <div className="pokedex_page_index">
        <button disabled={currentPage === 0} onClick={prevPage}>
          ←
        </button>
        <div className="pokedex_page_number"></div>
        <button
          disabled={currentPage === pokemonsInAvaryGenaration.length}
          onClick={nextPage}
        >
          →
        </button>
      </div>
    </div>
  );
}

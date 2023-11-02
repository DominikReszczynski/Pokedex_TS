// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./pokedex.css";

import { OnePokemon } from "./onePokemon";
import { Link } from "react-router-dom";

export function Pokedex({ getPokemonsName }) {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokemonsOnPage, setPokemonsOnPage] = useState(40);
  const [setError] = useState(null);
  const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon";
  const pokedexOffset = (currentPage - 1) * pokemonsOnPage;
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `${BASE_POKEMON_API_URL}?limit=${pokemonsOnPage}&offset=${pokedexOffset}`,
      {
        cache: "force-cache",
      }
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
            console.log("pokemonsData: ", pokemonsData);
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

  const find = (e) => {
    const searchPokemon = e.target.value;
    const result = getPokemonsName.find((pokemon) => pokemon === searchPokemon);
    if (result) navigate(`/pokedex/${searchPokemon}`);
  };

  const nextPage = () => {
    currentPage >= 1 ? setCurrentPage(currentPage + 1) : null;
  };

  const prevPae = () => {
    currentPage <= 1 ? null : setCurrentPage(currentPage - 1);
  };

  return (
    <div className="site_conteiner ">
      <div className="pokedex__header">
        <div className="pokedex_input">
          <input
            type="text"
            placeholder="...wpisz nazwę szukanego pokemona"
            onChange={find}
          />
        </div>
      </div>
      <div className="pokedex_page_index">
        <button onClick={prevPae}>Poprzednie</button>
        <div className="pokedex_page_number"></div>
        <button onClick={nextPage}>Następne</button>
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
        <button onClick={prevPae}>Poprzednie</button>
        <div className="pokedex_page_number"></div>
        <button onClick={nextPage}>Następne</button>
      </div>
    </div>
  );
}

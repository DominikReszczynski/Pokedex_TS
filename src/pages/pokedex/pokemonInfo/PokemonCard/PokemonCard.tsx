// @ts-nocheck
import { useEffect, useState } from "react";
import { StatsBar } from "./pokemonStatsBar/statsBar.jsx";
import "./PokemonCard.scss";

export const PokemoCard = ({
  ONE_POKEMON_API_URL,
  pokemonName,
  getPokemonIndex
}: {
  ONE_POKEMON_API_URL: any,  
  pokemonName: string,
  getPokemonIndex: number
}) => {
  const [pokemon, setPokemon] = useState<any | null>(null);

  useEffect(() => {
    fetch(ONE_POKEMON_API_URL)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, [getPokemonIndex]);

  return (
    <>
      {pokemon ? (
        <>
          <img
            src={pokemon.sprites?.front_default}
            alt={`pokemon ${pokemonName}`}
          />
          <p className="pokemon_name">{pokemonName}</p>
          <div className="card_container">
            <div className="pokemon_status_bar">
              <p className="stat_bar_title">STATS</p>
              {pokemon?.stats.map((pokemonStat, index) => (
                <div className="single_stat_bar" key={index}>
                  <p className="single_stat">
                    <p>{pokemonStat.stat.name}:</p>
                    <p>{pokemonStat.base_stat}</p>
                  </p>
                  <StatsBar stats={pokemonStat.base_stat} />
                </div>
              ))}
            </div>
            <div className="pokemon_card">
              <div className="pokemon_base_info">
                <div className="info_title">
                  <p>ID:</p>
                  <p>Type:</p>
                  <p>Height:</p>
                  <p>Weight:</p>
                </div>
                <div className="info_data">
                  <p>{pokemon.id}</p>
                  <p>
                    <span>
                      {pokemon && pokemon.types && pokemon.types[0].type.name}
                    </span>
                    <span>
                      {pokemon && pokemon.types && pokemon.types[1]?.type.name}
                    </span>
                  </p>
                  <p>{pokemon.height}</p>
                  <p>{pokemon.weight}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

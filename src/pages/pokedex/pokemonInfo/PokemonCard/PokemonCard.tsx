// @ts-nocheck
import { useEffect, useState } from "react";
import { StatsBar } from './pokemonStatsBar/statsBar.jsx'
import "./PokemonCard.scss";

export const PokemoCard = ({
  ONE_POKEMON_API_URL,
  pokemonName,
}: {
  getPokemon: string;
  pokemonName: string;
}) => {
  const [pokemon, setPokemon] = useState<any | null>(null);
  // -------vvvvvvv------ kod z dol ale ma za duzo danych o atakach i nie ma za bardzo jak wykozystac na ta chwile

  //   <div>Pokémon moves:
  //   <div>{pokemon && pokemon.moves && pokemon.moves.map((pokemon: any, index: number) => (
  //     <p key={index}>{pokemon.move.name.replace(/-.*/, "")}</p>
  //   ))}</div>
  // </div>
  useEffect(() => {
    fetch(ONE_POKEMON_API_URL)
      .then((response) => response.json())
      .then((data) => setPokemon(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <>
      {pokemon ? (
        <>
          <img
            src={pokemon.sprites?.front_default}
            alt={`pokemon ${pokemonName}`}
          />
          <p className="pokemon_name">{pokemonName}</p>
          <ol>
            {pokemon?.stats.map((pokemonStat, index) => (
              <li key={index}>{pokemonStat.stat.name}: <StatsBar stats={pokemonStat.base_stat} /></li>
            ))}
          </ol>
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
        </>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
};

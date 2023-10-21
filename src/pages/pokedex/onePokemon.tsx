// @ts-nocheck
import { useState } from "react";
export const OnePokemon = ({ pokemon, getIconTypeOfPokemon, setCssClass }) => {
  let totatlPokemonStats = 0;
  console.log(pokemon);
  pokemon.stats.map((stat) => {
    console.log(typeof stat.base_stat);
    totatlPokemonStats += stat.base_stat;
  });
  return (
    <div key={pokemon.id} className={setCssClass(pokemon)}>
      <div>{getIconTypeOfPokemon(pokemon?.types)} </div>
      <img
        className="pokemon_img"
        src={pokemon.sprites.front_default}
        alt={pokemon.name}
      />
      <h3>
        No.{pokemon.id} {pokemon?.name?.replace(/-.*/, "")}
      </h3>
      <h3>Stats {totatlPokemonStats}</h3>
    </div>
  );
};

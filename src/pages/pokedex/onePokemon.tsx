// @ts-nocheck
import { useState } from "react";
import { getIconTypeOfPokemon } from "./typeFunctions";
import { setCssClass } from "./typeFunctions";
export const OnePokemon = ({ pokemon }) => {
  return (
    <>
      {" "}
      <div key={pokemon.id} className={setCssClass(pokemon)}>
        <div>
          {getIconTypeOfPokemon(pokemon?.types).type1}{" "}
          {getIconTypeOfPokemon(pokemon?.types).type2}N.{pokemon.id}
        </div>
        <img
          className="pokemon_img"
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
        <div id="pokemon_info">
          <h3>{pokemon?.name?.replace(/-.*/, "")}</h3>
          {/* <h3>Stats {totatlPokemonStats}</h3> */}
        </div>
      </div>
    </>
  );
};

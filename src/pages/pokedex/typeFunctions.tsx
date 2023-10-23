// @ts-nocheck
import grassIcone from "./types/Grass_icon_SwSh.png";
import darkIcone from "./types/96px-Dark_icon_SwSh.png";
import dragonIcone from "./types/96px-Dragon_icon_SwSh.png";
import electricIcone from "./types/96px-Electric_icon_SwSh.png";
import fairyIcone from "./types/96px-Fairy_icon_SwSh.png";
import fightIcone from "./types/96px-Fighting_icon_SwSh.png";
import flyingIcone from "./types/96px-Flying_icon_SwSh.png";
import ghostIcone from "./types/96px-Ghost_icon_SwSh.png";
import groundIcone from "./types/96px-Ground_icon_SwSh.png";
import iceIcone from "./types/96px-Ice_icon_SwSh.png";
import normalIcone from "./types/96px-Normal_icon_SwSh.png";
import poisonIcone from "./types/96px-Poison_icon_SwSh.png";
import psyhicIcone from "./types/96px-Psychic_icon_SwSh.png";
import rockIcone from "./types/96px-Rock_icon_SwSh.png";
import steelIcone from "./types/96px-Steel_icon_SwSh.png";
import bugIcone from "./types/Bug_icon_SwSh.png";
import fireIcone from "./types/Fire_icon_SwSh.png";
import waterIcone from "./types/Water_icon_SwSh.png";
const getTypeOfPokemon = (typeOfPokemon = []) => typeOfPokemon[0].type.name;
export const getIconTypeOfPokemon = (typeOfPokemon = []) => {
  return {
    type1: typesIcon[typeOfPokemon[0]?.type.name],
    type2: typesIcon[typeOfPokemon[1]?.type.name],
  };
};

export const setCssClass = (pokemonData) =>
  `container--grid-tile pokemon-type-${getTypeOfPokemon(pokemonData?.types)}`;

const typesIcon = {
  grass: <img alt="grass" className="pokemon-type" src={grassIcone}></img>,
  fire: <img alt="fire" className="pokemon-type" src={fireIcone}></img>,
  water: <img alt="water" className="pokemon-type" src={waterIcone}></img>,
  bug: <img alt="bug" className="pokemon-type" src={bugIcone}></img>,
  psychic: <img alt="psychic" className="pokemon-type" src={psyhicIcone}></img>,
  ghost: <img alt="ghost" className="pokemon-type" src={ghostIcone}></img>,
  fly: <img alt="flying" className="pokemon-type" src={flyingIcone}></img>,
  rock: <img alt="rock" className="pokemon-type" src={rockIcone}></img>,
  electric: (
    <img alt="electric" className="pokemon-type" src={electricIcone}></img>
  ),
  normal: <img alt="normal" className="pokemon-type" src={normalIcone}></img>,
  fighting: (
    <img alt="fighting" className="pokemon-type" src={fightIcone}></img>
  ),
  poison: <img alt="poison" className="pokemon-type" src={poisonIcone}></img>,
  ground: <img alt="ground" className="pokemon-type" src={groundIcone}></img>,
  steel: <img alt="steel" className="pokemon-type" src={steelIcone}></img>,
  ice: <img alt="ice" className="pokemon-type" src={iceIcone}></img>,
  dragon: <img alt="dragon" className="pokemon-type" src={dragonIcone}></img>,
  dark: <img alt="dark" className="pokemon-type" src={darkIcone}></img>,
  fairy: <img alt="fairy" className="pokemon-type" src={fairyIcone}></img>,
};

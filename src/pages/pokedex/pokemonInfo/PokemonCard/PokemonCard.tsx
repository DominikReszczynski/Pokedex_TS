import { useEffect, useState } from "react";
import "./PokemonCard.scss";

export const PokemoCard = ({
  getPokemon,
  pokemonName,
}: {
  getPokemon: any;
  pokemonName: string;
}) => {  
    const [pokemon, setPokemon] = useState<any | null>(null)    
  
    const pokemonData = () => {
        setPokemon(getPokemon)               
    }

useEffect(() => {
    pokemonData()   
}) 

// -------vvvvvvv------ kod z dol ale ma za duzo danych o atakach i nie ma za bardzo jak wykozystac na ta chwile

//   <div>Pokémon moves: 
//   <div>{pokemon && pokemon.moves && pokemon.moves.map((pokemon: any, index: number) => (
//     <p key={index}>{pokemon.move.name.replace(/-.*/, "")}</p>
//   ))}</div>
// </div>

  return (
    <>{pokemon ? 
      (<div className="pokemon_card">
      <p className="pokemon_name">{pokemonName}</p>
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
            <span>{pokemon && pokemon.types && pokemon.types[0].type.name}</span>
            <span>{pokemon && pokemon.types && pokemon.types[1]?.type.name}</span>
            </p>
          <p>{pokemon.height}</p>
          <p>{pokemon.weight}</p>
        </div>
      </div>
      <img
        src={pokemon.sprites?.front_default}
        alt={`pokemon ${pokemonName}`}
      />      
    </div>) : <div>Loading...</div>
    }
      
    </>
  );
};




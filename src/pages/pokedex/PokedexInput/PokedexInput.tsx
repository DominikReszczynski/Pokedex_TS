
import { useState} from "react";
import { useNavigate } from "react-router-dom";

export const PokedexInput = ({getPokemonsName}: {getPokemonsName: string[]}) => {
    const [pokemonName, setPokemonName] = useState('');
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPokemonName(e.target.value)
      };
      const findPokemon = (pokemon: string) => {
        setPokemonName(pokemon)
      };

    const searchPokemon = () => {       
        
        const result = getPokemonsName.find((pokemon: string) => pokemon === pokemonName)
        if (result) navigate(`/pokedex/${pokemonName}`)
      }      

    return (
        <>
                <div className="pokedex_input">
          <div className="search_bar">
            <input
              type="text"
              placeholder="...wpisz nazwę szukanego pokemona"
              value={pokemonName}
              onChange={onChange}
            />
            <button type="submit" onClick={() => searchPokemon()}>
              <i className="fa fa-search">&#x1F50E;</i>
            </button>
          </div>
          <div className="pokedex_dropdown">
            {getPokemonsName.filter((pokemon: string) => {
              const searchName = pokemon.toLowerCase();
              const pokeName = pokemonName.toLowerCase()

              return pokeName && searchName.includes(pokemonName) && pokemonName !== searchName
            })
              .map((pokemon: string, index: number) => (
                <div className="dropdown_row" key={index} onClick={() => findPokemon(pokemon)}>{pokemon}</div>
              ))}</div>
        </div>
        </>
    )
}
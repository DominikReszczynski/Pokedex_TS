import './PokemonCard.scss'

export const PokemoCard = ({ getPokemons, pokemonName }: {getPokemons: any, pokemonName: string}) => {

console.log('pokoemon getPokemons: ', getPokemons)

  return (
    <>
      <div>
        <img
          src={getPokemons?.sprites?.front_default}
          alt={`pokemon ${pokemonName}`}
        />
      </div>
      <p>{pokemonName}</p>
    </>
  );
};

import { Pokedex } from "pokeapi-js-wrapper";
import { useState } from "react";
const Gamecard = ({ pokemonName }: {pokemonName: string}) => {
    // TODO: Move fetch function into Gameboard
  const [pokemonSprite, setPokemonSprite] = useState<string | null>();
  const fetchPokemonImg = async () => {
    const P = new Pokedex();
    const pokemon = await P.getPokemonByName(pokemonName);
    setPokemonSprite(pokemon.sprites.front_default);
  };
  fetchPokemonImg();
  return (
    <>
      <div>Gamecard</div>
      {!pokemonSprite ? (
        <div>Loading...</div>
      ) : (
        <img src={pokemonSprite} alt={pokemonName}></img>
      )}
    </>
  );
};

export default Gamecard;

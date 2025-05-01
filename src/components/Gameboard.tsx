import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react";
import Gamecard from "./Gamecard";
const Gameboard = () => {
  // TODO: Move fetch function into Gameboard
  const [pokemonData, setPokemonData] = useState();
  useEffect(() => {
    const fetchPokemonData = async () => {
      const P = new Pokedex();
      const pokemonNames = [
        "golduck",
        "psyduck",
        "charmander",
        "squirtle",
        "bulbasaur",
        "pikachu",
      ];
      const data = [];
      for (const pokemonName of pokemonNames) {
        const pokemon = await P.getPokemonByName(pokemonName);
        const pokemonSprite = pokemon.sprites.front_default;
        data.push({ name: pokemonName, sprite: pokemonSprite });
      }
      setPokemonData(data);
    };
    fetchPokemonData();
  }, []);

  return (
    <>
      {!pokemonData ? (
        <div>Loading...</div>
      ) : (
        pokemonData.map((pokemon) => (
          <Gamecard
            key={pokemon.name}
            pokemonName={pokemon.name}
            pokemonSprite={pokemon.sprite}
          />
        ))
      )}
      <div>Gameboard</div>
    </>
  );
};

export default Gameboard;

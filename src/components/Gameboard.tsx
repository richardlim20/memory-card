import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react";
import Gamecard from "./Gamecard";
const Gameboard = () => {
  // TODO: Move fetch function into Gameboard
  const [pokemonData, setPokemonData] = useState();

  //Shuffle array elements function to randomise placement
  const shuffle = (array: string[]) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  useEffect(() => {
    const fetchPokemonData = async () => {
      const pokemonNames = [
        "golduck",
        "psyduck",
        "charmander",
        "squirtle",
        "bulbasaur",
        "pikachu",
        "lotad",
        "magikarp",
      ];
      const P = new Pokedex();
      const data = [];
      const shuffledPokemon = shuffle(pokemonNames)
      for (const pokemonName of shuffledPokemon) {
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
      <div id="gameboard">
        <div id="card-container">
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
        </div>
        <button >Restart Game</button>
      </div>
    </>
  );
};

export default Gameboard;

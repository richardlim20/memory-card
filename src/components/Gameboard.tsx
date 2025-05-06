import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react";
import Gamecard from "./Gamecard";
const Gameboard = () => {
  const [pokemonData, setPokemonData] = useState();
  const [clickedPokemon, setClickedPokemon] = useState<string[]>([]);
  const [score, setScore] = useState<number>(0);
  const [highscore, setHighscore] = useState<number>(0);

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
      const shuffledPokemon = shuffle(pokemonNames);
      for (const pokemonName of shuffledPokemon) {
        const pokemon = await P.getPokemonByName(pokemonName);
        const pokemonSprite = pokemon.sprites.front_default;
        data.push({ name: pokemonName, sprite: pokemonSprite });
      }
      setPokemonData(data);
    };
    fetchPokemonData();
  }, []);

  //Shuffle array elements function to randomise placement
  const shuffle = (array: string[]) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  const shufflePokemon = () => {
    if (pokemonData) {
      setPokemonData(shuffle(pokemonData));
    }
  };

  const calculateHighscore = (score) => {
    if (highscore < score) {
      setHighscore(score);
    }
    return highscore;
  };

  const handlePokemonClick = (pokemonName: string) => {
    if (clickedPokemon.includes(pokemonName)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      clickedPokemon.push(pokemonName);
      setScore(clickedPokemon.length);
    }
    shufflePokemon();
  };

  const restartGame = () => {
    setClickedPokemon([]);
    setScore(0);
    setHighscore(0);
    shufflePokemon();
  };

  return (
    <>
      <div>Score: {score}</div>
      <div>Highscore: {calculateHighscore(score)}</div>
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
                onClick={() => handlePokemonClick(pokemon.name)}
              />
            ))
          )}
        </div>
        <button onClick={restartGame}>Restart Game</button>
      </div>
    </>
  );
};

export default Gameboard;

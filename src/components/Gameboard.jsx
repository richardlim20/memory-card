import { Pokedex } from "pokeapi-js-wrapper";
import { useState, useEffect } from "react";
import Gamecard from "./Gamecard";

const Gameboard = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [clickedPokemon, setClickedPokemon] = useState([]);
  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);

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

  const shuffle = (array) => {
    return array
      .map((a) => ({ sort: Math.random(), value: a }))
      .sort((a, b) => a.sort - b.sort)
      .map((a) => a.value);
  };

  const shufflePokemon = () => {
    if (pokemonData) {
      setPokemonData(shuffle([...pokemonData]));
    }
  };

  const calculateHighscore = (score) => {
    if (highscore < score) {
      setHighscore(score);
    }
    return highscore;
  };

  const handlePokemonClick = (pokemonName) => {
    if (clickedPokemon.includes(pokemonName)) {
      setScore(0);
      setClickedPokemon([]);
    } else {
      setClickedPokemon((prev) => [...prev, pokemonName]);
      setScore((prev) => prev + 1);
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
      <div id="scoreboard">
        <div>Score: {score}</div>
        <div>Highscore: {calculateHighscore(score)}</div>
      </div>
      <div id="gameboard">
        <div id="card-container">
          {!pokemonData.length ? (
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
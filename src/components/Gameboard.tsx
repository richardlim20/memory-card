import Gamecard from "./Gamecard"
const Gameboard = () => {
  // TODO: Move fetch function into Gameboard
  return(
    <>
    <Gamecard pokemonName={"golduck"}></Gamecard>
    <Gamecard pokemonName={"psyduck"}></Gamecard>
    <Gamecard pokemonName={"charmander"}></Gamecard>
    <Gamecard pokemonName={"squirtle"}></Gamecard>
    <Gamecard pokemonName={"bulbasaur"}></Gamecard>
    <Gamecard pokemonName={"pikachu"}></Gamecard>
    <div>Gameboard</div>
    </>
  )
}

export default Gameboard

import { Pokedex } from "pokeapi-js-wrapper"
const Gamecard = () => {
  const P = new Pokedex();
  (async () => {
    const golduck = await P.getPokemonByName("golduck")
    console.log(golduck)
  })()
  return(
    <>
    <div>Gamecard</div>
    </>
  )
}

export default Gamecard

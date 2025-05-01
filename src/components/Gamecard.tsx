const Gamecard = ({ pokemonName, pokemonSprite }: {pokemonName: string; pokemonSprite: string;}) => {
  return (
    <>
      <div>Gamecard</div>
        <img src={pokemonSprite} alt={pokemonName}></img>
    </>
  );
};

export default Gamecard;

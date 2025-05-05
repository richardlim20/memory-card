const Gamecard = ({
  pokemonName,
  pokemonSprite,
}: {
  pokemonName: string;
  pokemonSprite: string;
}) => {
  return (
    <>
      <div className="card">
        <img src={pokemonSprite} alt={pokemonName}></img>
        <div style={{ textTransform: "capitalize" }}>{pokemonName}</div>
      </div>
    </>
  );
};

export default Gamecard;

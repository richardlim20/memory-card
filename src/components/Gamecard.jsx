const Gamecard = ({ pokemonName, pokemonSprite, onClick }) => {
  return (
    <>
      <div className="card" onClick={onClick}>
        <img src={pokemonSprite} alt={pokemonName}></img>
        <div style={{ textTransform: "capitalize" }}>{pokemonName}</div>
      </div>
    </>
  );
};

export default Gamecard;
import "../Memory-Game/MemoryGame.css"

function MemoryCardComponent({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src="/Images/cover.png"
          onClick={handleClick}
          alt="card-back"
        />
      </div>
    </div>
  );
}

export default MemoryCardComponent;

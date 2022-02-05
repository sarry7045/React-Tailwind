import React, { useState, useEffect } from "react";
import "../Memory-Game/MemoryGame.css";
import MemoryCardComponent from "../Memory-Game/MemoryCardComponent.jsx";

const cardImages = [
  { src: "./Images/helmet-1.png", match: false },
  { src: "./Images/potion-1.png", match: false },
  { src: "./Images/ring-1.png", match: false },
  { src: "./Images/scroll-1.png", match: false },
  { src: "./Images/shield-1.png", match: false },
  { src: "./Images/sword-1.png", match: false },
];

function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // const handleClick = (card) => {
  //   console.log(card);
  //   choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  // };

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <>
      <div className="MemoryGame">
        <div className="MemoryGame-Container">
          <h1 className="py-4">Magic Match</h1>
          <button onClick={shuffleCards} className="my-4">
            New Game
          </button>

          <div className="card-grid">
            {cards.map((card) => (
              // <div className="card" key={card.id}>
              //   <div>
              //     <img className="front" src={card.src} />
              //     <img
              //       onClick={handleClick}
              //       flipped ={card === choiceOne || card === choiceTwo ||  card.matched }
              //       className="back"
              //       src="/Images/cover.png"
              //       alt="Card Back"
              //     />
              //   </div>
              // </div>

              <MemoryCardComponent
                key={card.id}
                card={card}
                handleChoice={handleChoice}
                flipped={
                  card === choiceOne || card == choiceTwo || card.matched
                }
                disabled={disabled}
              />
            ))}
          </div>
          <p className="mt-10">Turns:{turns}</p>
        </div>
      </div>
    </>
  );
}

export default MemoryGame;

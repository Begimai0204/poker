import './App.css';
import './Card.tsx';
import './lib/Card.ts';
import './lib/CardDeck.ts';
import CardDesk from './lib/CardDeck.ts';
import React, {useState} from 'react';
import Card from './Card.tsx';

function App() {
  interface CardInfo {
    rank: string;
    suit: string;
  }

  const [cardState, setCardState] = useState<CardInfo[]>([]);
  const showCards = () => {
    const cardBlock = new CardDesk();
    const randomCards = cardBlock.getCards(5);
    console.log(randomCards);
    setCardState(randomCards.map(card => ({
      rank: card.rank,
      suit: card.suit,
    })));

  };
  if (cardState.length === 0) {
    return (
        <>
          <div>
            <button onClick={showCards}>Показать карты</button>
          </div>
          <p>Карты еще не розданы!</p>
        </>

    );
  } else {
    return (<>
          <div>
            <button onClick={showCards}>Показать карты</button>
          </div>
          <div className="playingCards faceImages">
            {cardState.map((card, index) => (
                <Card key={index} rank={card.rank} suit={card.suit}/>
            ))}
          </div>
        </>
    );
  }

}
export default App

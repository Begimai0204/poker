import './App.css';
import './Card.tsx';
import './lib/Card.ts';
import './lib/CardDeck.ts';
import CardDesk from './lib/CardDeck.ts';
import {useState} from 'react';
import Card from './Card.tsx';
import PokerHand from './lib/PokerHand.ts';


function App() {
  interface CardInfo {
    rank: string;
    suit: string;
  }

  const [cardsState, setCardsState] = useState<CardInfo[]>([]);
  const showCards = () => {
    const cardBlock = new CardDesk();
    const randomCards = cardBlock.getCards(5);
    setCardsState(randomCards.map(card => ({
      rank: card.rank,
      suit: card.suit,
    })));
  };
  const handPoker = new PokerHand(cardsState);
  const currentHand = handPoker.getOutcome();
  if (cardsState.length === 0) {
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
            {cardsState.map((card, index) => (
                <Card key={index} rank={card.rank} suit={card.suit}/>
            ))}
          </div>
          <div className="current-hand">{currentHand}</div>
        </>
    );
  }
}
export default App

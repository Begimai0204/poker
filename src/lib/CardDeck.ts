import Card from './Card.ts';

class CardDesk {
  cardBlock: Card[] = [];
  ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  suits = ['hearts', 'diams', 'clubs', 'spades'];

  constructor() {
    this.suits.forEach((suit) => {
      this.ranks.forEach((rank) => {
        const card = new Card(rank, suit);
        this.cardBlock.push(card);

      });
    });
  }

  getCard() {
    const randomIndex = Math.floor(Math.random() * this.cardBlock.length);
    return this.cardBlock.splice(randomIndex, 1)[0];
  }

  getCards(howMany: number) {
    const randomCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const randomCard = this.getCard();
      randomCards.push(randomCard);
    }
    return randomCards;
  }
}

export default CardDesk;
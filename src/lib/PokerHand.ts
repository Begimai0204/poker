interface CardInfo {
  rank: string;
  suit: string;
}

class PokerHand {
  cardsState;

  constructor(cardsState: CardInfo[]) {
    this.cardsState = cardsState;


  }

  countRanks() {
    const ranksCount: { [key: string]: number } = {};
    for (const card of this.cardsState) {
      ranksCount[card.rank] = (ranksCount[card.rank] || 0) + 1;
    }
    return ranksCount;
  }

  countSuits() {
    const suitsCount: { [key: string]: number } = {};
    for (const card of this.cardsState) {
      suitsCount[card.suit] = (suitsCount[card.suit] || 0) + 1;
    }
    return suitsCount;
  }

  private hasStraight() {
    const uniqueRanks = Array.from(new Set(this.cardsState.map((card) => card.rank))).sort((a, b) => parseInt(b) - parseInt(a));
    return (
        (uniqueRanks.length === 5 && parseInt(uniqueRanks[0]) - parseInt(uniqueRanks[4]) === 4) ||
        (uniqueRanks.length === 4 && uniqueRanks.includes('2') && uniqueRanks.includes('14'))
    );
  }

  getOutcome() {
    const ranksCount = this.countRanks();
    const suitsCount = this.countSuits();
    const uniqueRanks = Object.keys(ranksCount).sort((a, b) => parseInt(b) - parseInt(a));

    if (uniqueRanks.length === 5) {
      const isStraight = this.hasStraight();
      const isFlush = Object.values(suitsCount).some((count) => count === 5);

      if (isStraight && isFlush) {
        return 'Стрит-флэш';
      } else if (isStraight) {
        return 'Стрит';
      } else if (isFlush) {
        return 'Флэш';
      }
    }

    for (const rank of uniqueRanks) {
      if (ranksCount[rank] === 4) {
        return 'Каре';
      } else if (ranksCount[rank] === 3) {
        for (const otherRank of uniqueRanks) {
          if (otherRank !== rank && ranksCount[otherRank] === 2) {
            return 'Фулл-хаус';
          }
        }
        return 'Тройка';
      } else if (ranksCount[rank] === 2) {
        for (const otherRank of uniqueRanks) {
          if (otherRank !== rank && ranksCount[otherRank] === 2) {
            return 'Две пары';
          }
        }
        return 'Одна пара';
      }
    }


    return 'Старшая карта';
  }
}


export default PokerHand;
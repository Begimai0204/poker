import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const Card: React.FC<Props> = ({rank, suit}) => {
  return (
      <span className={`card rank-${rank.toLowerCase()} ${suit}`}>
        <span className="rank">{rank}</span>
      <span className="suit">{suit === 'hearts' ? '♥' : suit === 'diams' ? '♦' : suit === 'clubs' ? '♣' : '♠'}</span>
      </span>
  );
};

export default Card;
import React from 'react';

const Card = props => {
  let { card } = props;

  return(
    <li className="card">
      {card.value}
    </li>
  )
}

export default Card;
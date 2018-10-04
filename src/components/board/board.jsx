import React, { Component } from 'react';
import Card from './card';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {

    };
  }
  
  render() {    
    let { cards } = this.props;
  
    return(
      <div className="board-container">
        <div className="playing-area">
          <ul className="card-index">
            {cards.map(card => (
              <Card
                key={card.id}
                card={card}
                flipCard={this.props.flipCard}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Board;
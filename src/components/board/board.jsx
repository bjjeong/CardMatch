import React, { Component } from 'react';

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
          <ul>
            {cards.map(card => (
              <li key={card}>
                {card}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
};

export default Board;
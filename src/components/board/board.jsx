import React, { Component } from 'react';
import Card from './card';

class Board extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: 60,
      counter: 30,
      numMatches: 0
    };
    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({ timer });
  }

  componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

  shouldComponentUpdate(nextProps) { // Rerender if there is a change in the cards
    return (this.props.cards !== nextProps.cards);
  }

  tick() {
    this.setState({
      counter: this.state.counter - 1
    });
  }
  
  render() {    
    let { cards } = this.props;

    if(this.state.counter <= 0) {
      return(
        <div className="board-container">
          <div className="message">
            YOU HAVE FAILED. PLEASE REFRESH PAGE TO PLAY AGAIN
          </div>
        </div>
      );
    }
  
    return(
      <div className="board-container">
        <div className="timer">
          Time Left: {this.state.counter}
        </div>
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
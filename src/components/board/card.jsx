import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(card) {
    this.setState({clicked: !this.state.clicked})
    this.props.flipCard(card);
  }

  render() {
    let { card } = this.props;

    return (
      <li className={"card"} onClick={() => this.flipCard(card)}>
        <div className={`card-value ${this.state.clicked ? 'up' : 'down'}`}>
          {card.value}
        </div>
      </li>
    )
  }
}

export default Card;
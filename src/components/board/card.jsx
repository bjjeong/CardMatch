import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }

    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(id) {
    this.setState({clicked: !this.state.clicked})
  }

  render() {
    let { card } = this.props;

    return (
      <li className={"card"} onClick={() => this.flipCard(card.id)}>
        <div className={`card-value ${this.state.clicked ? 'up' : ''}`}>
          {card.value}
        </div>
      </li>
    )
  }
}

export default Card;
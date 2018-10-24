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
    if(card.matched || card.up) return;
    this.setState({clicked: !this.state.clicked})
    this.props.flipCard(card);
  }

  render() {
    let { card } = this.props;

    return (
      <li className={"card"} onClick={() => this.flipCard(card)}>
        <div className={`card-value ${card.matched ? 'matched' : ''} ${card.up ? 'up' : 'down'}`}>
          <img src={`${card.photoURL}`} alt=""/>
        </div>
      </li>
    )
  }
}

export default Card;
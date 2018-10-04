import { connect } from 'react-redux';
import Board from './board';
import { flipCard } from '../../actions/game_actions';

const mapStateToProps = state => ({
  cards: state.game.cards
});

const mapDispatchToProps = dispatch => ({
  flipCard: id => dispatch(flipCard(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
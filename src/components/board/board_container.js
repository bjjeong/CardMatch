import { connect } from 'react-redux';
import Board from './board';

const mapStateToProps = state => ({
  cards: state.game.cards
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
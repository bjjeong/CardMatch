import React from 'react';
import Board from '../board/board_container';

const Homepage = props => {

  return(
    <div className="homepage">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left">
            <div className="logo"></div>
          </a>
          <ul id="nav-mobile" className="right">
            <li><a class="modal-trigger" href="#modal1">How To Play</a></li>
            <li><a 
              href="https://www.github.com/bjjeong"
              rel="noopener noreferrer"
              target="_blank">Github</a></li>
            <li><a
              href="https://www.linkedin.com/in/bjjeong"
              rel="noopener noreferrer"
              target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </nav>
      <Board />
      <div id="modal1" class="modal">
        <div class="modal-content">
          <h4><strong>How to Play!</strong></h4>
          <p>
            This is a simple card-matching game built with React and Redux, created by me as a coding exercise for Factr.
            <br/>
            <br/>
            The rules of the game are simple - find all matching pairs of cards within the given time limit. Once a set of cards are matched, they will turn green.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
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
    </div>
  );
};

export default Homepage;
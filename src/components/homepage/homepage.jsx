import React from 'react';

const Homepage = props => {

  return(
    <div className="homepage">
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            <div className="logo">

            </div>
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="/">Info</a></li>
            <li><a href="https://www.github.com/bjjeong" target="_blank">Github</a></li>
            <li><a href="https://www.linkedin.com/in/bjjeong" target="_blank">LinkedIn</a></li>
          </ul>
        </div>
      </nav>
      <div>
        hello
      </div>
    </div>
  );
};

export default Homepage;
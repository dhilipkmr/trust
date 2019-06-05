import React from 'react';
import childPic from '../images/baby.png';

const Home = () => (
  <div name="home" className="posRel">
    <div className="pickgradient">
      <img className="gradientImg" src={childPic} />
    </div>
    {/* <div className="textCenter gradientImg"></div> */}
    <div className="textCenter posAbs top0">
      <div className="textCenter quote colorWhite">
        <div className="">
          <span className="d-inbl pad10">Giving</span>
          <span className="d-inbl pad10 quoteHighlight">Hope</span>
        </div>
        <div className="d-inbl pad10">to the</div>
        <div className="d-inbl pad10 quoteHighlight">Homeless</div>
      </div>
    </div>
  </div>
);

export default Home;
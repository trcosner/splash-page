import React, { Component } from 'react';
import Hero from '../compositions/Hero';
import BackgroundImage from '../assets/images/spiderweb3.jpg';
import Banner from '../compositions/Banner';
import * as constants from '../constants/TextBlocks.js';

class AppContainer extends Component {
  render() {
    return (
      <div>
        <Banner navItems={['section1', 'section2']}/>
        <Hero
          tagline="Life Calls For A Stronger Web"
          name="Tyler Cosner"
          email="trcosner@gmail.com"
          overlay={.4}
          backgroundImage={BackgroundImage}
          story={constants.HERO_TEXT}/>
          <div style={{height: '2000px'}}></div>
      </div>
    );
  }
}
export default AppContainer;

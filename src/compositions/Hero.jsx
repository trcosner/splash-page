import React from 'react';
import styled from 'styled-components';
import { media } from '../styles.js';

const Hero = props => (
  <Background backgroundImage={props.backgroundImage}>
    <Overlay overlay={props.overlay}>
      <Tagline>
        <b>{props.tagline.toUpperCase()}</b>
        <HeroStory>{props.story}</HeroStory>
      </Tagline>
      <Contact>
        <div><b>{props.name}</b></div>
        <div>{props.email}</div>
      </Contact>
      <NavDown className="fa fa-chevron-down fa-inverse"/>
    </Overlay>
  </Background>
);

export default Hero;

const Background = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${props => props.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => !!props.overlay
    ? 'rgba(0,0,0,' + props.overlay + ')'
    : null};
  color: #FFFFFF;
  position: relative;
  display: flex;
  justify-content: center;
`

const Tagline = styled.div`
  font-size: 62px;
  font-weight: 400;
  top: 20%;
  letter-spacing: 2px;
  line-height: 72px;
  position: absolute;
  z-index: 1;
  width: 50%;
  text-align: center;
  ${media.tablet`
    font-size: 42px;
    line-height: 48px;
    width: 60%;
  `}
  ${media.phone`
    font-size: 32px;
    line-height: 42px;
    width: 70%;
  `}
`

const HeroStory = styled.div`
  position: absolute;
  margin-top: 30px;
  font-weight: 300;
  font-size: 18px;
  line-height: 24px;
  ${media.phone`
    font-size: 14px;
    line-height: 20px;
  `}
`

const Contact = styled.div`
  position: absolute;
  z-index: 2;
  width: 200px
  text-alight: left;
  bottom: 70px;
  right: 30px;
  letter-spacing: 3px;
`

const NavDown = styled.i`
  position: absolute;
  z-index: 2;
  bottom: 40px;
  cursor: pointer;
`

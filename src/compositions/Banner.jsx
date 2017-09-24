import React, { Component } from 'react';
import styled from 'styled-components';
import { media } from '../styles.js';
import UIPopover from '../components/UIPopover';

class Banner extends Component {
  constructor(props){
    super(props);
    this.state = {
      menuOpen: false,
      menu: null
    };
    this._getNavList = this._getNavList.bind(this);
  }

  componentDidMount(){
        const elem = this.hamburgerElem._reactInternalInstance._currentElement;
        console.log(elem);
        this.setState({menu: elem});
  }

  render(){
    return(
      <Container>
        <Logo>{this.props.logo}</Logo>
        <Nav>
          {this._getNavList()}
          <Hamburger
            id="hamburgerMenu"
            ref={(Hamburger) => { return this.hamburgerElem = Hamburger; }}
            className="fa fa-bars fa-inverse"
            onClick={this._openMenu.bind(this)}
          />
          <UIPopover
            anchorEl={this.state.menu}
            open={this.state.menuOpen}
            anchorOrigin={{"horizontal":"left","vertical":"bottom"}}
            targetOrigin={{"horizontal":"left","vertical":"top"}}
            close={this._closeMenu.bind(this)}
          >
            <div>Test</div>
          </UIPopover>
        </Nav>
      </Container>
    );
  }

  _getNavList(){
    return this.props.navItems.map((item, index) => {
      return (
        <NavItem key={index} href={"#" + item.toLowerCase()}>
          {item.toUpperCase()}
        </NavItem>
      );
    });
  }

  _openMenu(){
    if(!!this.state.menuOpen){
      return;
    }
    this.setState({menuOpen: true});
  }

  _closeMenu(){
    if(!this.state.menuOpen){
      return;
    }
    this.setState({menuOpen: false});
  }
}



const Container = styled.div`
  position: absolute;
  top: 0;
  z-index: 2;
  width: 100%;
  height: 60px;
  line-height: 60px;
  color: white;
  display: flex;
`

const Logo = styled.div`
  flex: 1;
  align-self: flex-start;
`

const Nav = styled.div`
  flex: 1;
  align-self: flex-end;
  text-align: right;
  margin-right: 25px;
  margin-left: 25px;

`

const Hamburger = styled.i`
  position: absolute;
  top: 22px;
  right: 33px;
  display: none;
  visibility: hidden;
  cursor: pointer;
  ${media.phone`
     display: block;
     visibility: visible;
  `}
`

const NavItem = styled.a`
  color: white;
  text-decoration: none;
  margin-left: 15px;
  align: right;
  letter-spacing: 2px;
  font-size: 14px;
  padding: 6px;
  &:hover {
    border: 1px solid white;
    border-radius: 5px;
    padding: 5px;
  }
  ${media.phone`
      display: none;
      visibility: hidden;
  `}
`

export default Banner;

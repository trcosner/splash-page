import React, { Component } from 'react';
import { Popover } from 'material-ui';

class UIPopover extends Component {
  componentWillMount(){
    window.addEventListener("scroll", () => {
      this.props.close();
    });

    window.addEventListener("resize", () => {
      this.props.close();
    });
  }

  render(){
    console.log(this.props.anchorEl)
    return (
      <Popover
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        anchorOrigin={this.props.anchorOrigin}
        targetOrigin={this.props.targetOrigin}
        onRequestClose={this.props.close}
      >
        {this.props.children}
      </Popover>
    );
  }
}

export default UIPopover;

import React, { Component } from "react";
import { BadgeContainer } from "./index.style";
export default class Bage extends Component {
  render() {
    return (
      <BadgeContainer color="#00B278" fontColor="#00B278">
        {this.props.children}
      </BadgeContainer>
    );
  }
}

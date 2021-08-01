import React, { Component } from "react";
import {
  ProfileAvatarBody,
  ProfileContainer,
  ProfileWrapper,
  ProfileEditIcon,
} from "./index.style";

import Bage from "../badge";
import Avatar from "boring-avatars";
import { EditIcon } from "../EditIcon";
export default class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
    };
    this.onHover = this.onHover.bind(this);
  }

  onHover = (val) => {
    this.setState({ hover: val });
  };

  render() {
    return (
      <ProfileWrapper
        onMouseEnter={() => {
          this.onHover(!this.state.hover);
        }}
        onMouseLeave={() => {
          this.onHover(!this.state.hover);
        }}
      >
        <ProfileContainer>
          <ProfileAvatarBody>
            <div className="profile-avatar">
              <Avatar
                size={30}
                name="Vitaly"
                variant="beam"
                colors={this.props.colors}
              ></Avatar>
            </div>
            <div className="profile-name">{this.props.name}</div>
          </ProfileAvatarBody>
          <p>{this.props.email}</p>
          <div className="profile-session">
            {this.props.badge == true ? (
              <Bage>New</Bage>
            ) : (
              <p>{this.props.session} sessions</p>
            )}
            <ProfileEditIcon>
              {this.state.hover != true ? <></> : <EditIcon></EditIcon>}
            </ProfileEditIcon>
          </div>
        </ProfileContainer>
      </ProfileWrapper>
    );
  }
}

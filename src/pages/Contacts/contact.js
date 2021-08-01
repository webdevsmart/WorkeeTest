import React, { Component } from "react";
import { ContactBody, ContactContainer, ContactHeader } from "./contact.style";

import { NewButton } from "../../components/NewButton";

import Profile from "../../components/profile";
import faker from "faker";
import color from "nice-color-palettes/1000";

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: [],
      loader: true,
    };
    this.onCreateNewClick = this.onCreateNewClick.bind(this);
  }

  componentDidMount() {
    this.RandomDataGenerator();
  }

  RandomDataGenerator = () => {
    let temp = [];
    for (let i = 0; i < 10; i++) {
      let object = {};
      object.name = faker.name.findName();
      object.email = faker.internet.email();
      console.log(parseInt(Math.random() * 10000) % 1000);
      object.colors = color[parseInt(Math.random() * 10000) % 1000];
      object.badge =
        (parseInt(Math.random() * 10000) % 1000) % 5 == 0 ? true : false;
      object.session = parseInt(Math.random() * 10000) % 100;
      temp.push(object);
    }
    this.setState({ profile: temp, loader: false });
  };

  onCreateNewClick = () => {
    this.RandomDataGenerator();
  };

  render() {
    let content;
    if (this.state.loader) {
      content = <p>loading...</p>;
    } else {
      content = this.state.profile.map((item, key) => {
        return (
          <Profile
            key={key}
            colors={item.colors}
            name={item.name}
            badge={item.badge}
            email={item.email}
            session={item.session}
          ></Profile>
        );
      });
    }
    return (
      <ContactContainer>
        <ContactHeader>
          <h3>Contacts</h3>
          <NewButton onClick={this.onCreateNewClick}>Create New</NewButton>
        </ContactHeader>
        <ContactBody>{content}</ContactBody>
      </ContactContainer>
    );
  }
}

import React, { Component } from 'react';
import { Image } from 'react-native';

const icon = require('../images/menu_servico.png');

class HeaderComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);

    return (
      <Image style={{ width: 30, height: 30 }} source={icon} />
    );
  }
}

export default HeaderComponent;

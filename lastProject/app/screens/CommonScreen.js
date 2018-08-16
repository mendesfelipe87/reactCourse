import React, { Component } from 'react';
import { Text, View } from 'react-native';
import instructions from '../class/CommonClass';
import styles from '../styles/CommonStyle';

class CommonScreen extends Component {
  constructor(newStyles) {
    super();
    this.styles = styles;

    if (newStyles) {
      this.styles = newStyles;
    }
  }  

  render() {
    return (
      <View style={this.styles.container}>
        <Text style={this.styles.welcome}>Welcome to React Native</Text>
        <Text style={this.styles.instructions}>To get started, edit App.js</Text>
        <Text style={this.styles.instructions}>{instructions}</Text>
      </View>
    );
  }
}

export default CommonScreen;

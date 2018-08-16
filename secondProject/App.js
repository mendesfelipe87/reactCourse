import React, { Component } from 'react';
import { View } from 'react-native';
import Styles from './Style';

export default class App extends Component {
  render() {
    return (
      <View style={[Styles.flex1, Styles.container]}>
        <View style={[Styles.flex1, Styles.flexRow]}>
          <View style={[Styles.flex1, Styles.redContainer]} />
          <View style={[Styles.flex1, Styles.tanContainer]} />
          <View style={[Styles.flex1, Styles.redContainer]} />
          <View style={[Styles.flex1, Styles.tanContainer]} />
          <View style={[Styles.flex1, Styles.redContainer]} />
        </View>
        <View style={[Styles.flex1, Styles.flexRow]}>

        </View>
        <View style={[Styles.flex1, Styles.flexRow]}>

        </View>
        <View style={[Styles.flex1, Styles.flexRow]}>

        </View>
        <View style={[Styles.flex1, Styles.flexRow]}>
        </View>
      </View>
    );
  }
}

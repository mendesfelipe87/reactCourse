import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      colors: [
        { name: 'red', style: styles.redContainer },
        { name: 'orange', style: styles.orangeContainer },
        { name: 'yellow', style: styles.yellowContainer },
        { name: 'green', style: styles.greenContainer },
        { name: 'blue', style: styles.blueContainer },
        { name: 'indigo', style: styles.indigoContainer },
        { name: 'violet', style: styles.violetContainer }
      ]
    }
  }

  componentDidMount() {
    setInterval(() => {
      const lastColor = this.state.colors.slice(-1);
      const listWithoutLast = this.state.colors.slice(0, -1);      
      const newList = lastColor.concat(listWithoutLast);

      this.setState({ colors: newList });
    }, 500)
  }
 
  render() {
    const views = 
      this.state.colors.map(viewStyles => (
        <View key={viewStyles.name} style={[styles.container, styles[`${viewStyles.name}Container`]]} />
      ));

    return (
      <View style={styles.container}>
        {views}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  redContainer: {
    backgroundColor: '#FF0000'
  },
  orangeContainer: {
    backgroundColor: '#FF7F00'
  },
  yellowContainer: {
    backgroundColor: '#FFFF00'
  },
  greenContainer: {
    backgroundColor: '#00FF00'
  },
  blueContainer: {
    backgroundColor: '#0000FF'
  },
  indigoContainer: {
    backgroundColor: '#4B0082'
  },
  violetContainer: {
    backgroundColor: '#8B00FF'
  }
});

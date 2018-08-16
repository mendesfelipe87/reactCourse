import React, { Component } from 'react';
import { View, Text } from 'react-native';

class MeuComponent extends Component {

  render() {
    return(
      <View>
        <Text>{this.props.param1}</Text>
        <Text>{this.props.param2}</Text>
      </View>
    )
  }
}

export default MeuComponent;

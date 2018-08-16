import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from '../styles/CatalogoStyle'
import ListaItens from '../components/ListaItens'

class CatalogoScreen extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <ListaItens />
      </View>
    );
  }
}

export default CatalogoScreen;

import React, { Component } from 'react';
import { View, Button, TouchableOpacity, Text, Image, Alert } from 'react-native';
import styles from '../styles/AppStyle';
import MeuComponent from '../components/MeuComponent';

const image = require('../images/FFVII-Remake.png');

const botaoPressionado = () => {
  Alert.alert('Botão Pressionado');
  alert('Botão pressionado 2');
};

class AppScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      texto: 'maçã'
    };
  }

  alteraTexto() {
    this.setState({texto: 'azeitona'});
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={botaoPressionado} title="Button Test" />
        <TouchableOpacity style={styles.botao} onPress={botaoPressionado}>
          <Text style={styles.textoBotao}> Test New Button </Text>
        </TouchableOpacity>

        <Image source={image} style={{ width: 150, height: 150 }} />

        <MeuComponent param1="banana" param2={this.state.texto}></MeuComponent>
        <Button onPress={() => {this.alteraTexto()}} title="Change State" />
      </View>
    );
  }
}

export default AppScreen;

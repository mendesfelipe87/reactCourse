import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import styles from '../styles/ClientStyle'

const clientDetails = require('../images/detalhe_cliente.png');
const client1 = require('../images/cliente1.png');
const client2 = require('../images/cliente2.png');

class ClientScreen extends Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    headerRight: null
  };

  render() {
    return (
      <View>
        <View style={styles.nossosClientes}>
          <Image source={clientDetails} />
          <Text style={styles.textoNossosClientes}>Nossos Clientes</Text>
        </View>

        <View style={styles.clientes}>
          <Image source={client1} />
          <Text style={styles.textoClientes}>Lorem ipsur dolorem</Text>
        </View>

        <View style={styles.clientes}>
          <Image source={client2} />
          <Text style={styles.textoClientes}>Lorem ipsur dolorem</Text>
        </View>
      </View>
    );
  }
}

export default ClientScreen;

import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import styles from '../styles/PrincipalStyle';

const logo = require('../images/logo.png');
const menuCliente = require('../images/menu_cliente.png');
const menuContato = require('../images/menu_contato.png');
const menuEmpresa = require('../images/menu_empresa.png');
const menuServico = require('../images/menu_servico.png');

class PrincipalScreen extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.logo}>
        <Image source={logo} />
        <View>
          <View style={styles.menuGrupo}>
            <TouchableOpacity onPress={() => navigate('Client', { name: 'Jane' })}>
              <Image style={styles.imgMenu} source={menuCliente} />
            </TouchableOpacity>
            <Image style={styles.imgMenu} source={menuContato} />
          </View>

          <View style={styles.menuGrupo}>
            <Image style={styles.imgMenu} source={menuEmpresa} />
            <Image style={styles.imgMenu} source={menuServico} />
          </View>
        </View>
      </View>
    );
  }
}

export default PrincipalScreen;

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import styles from '../styles/ItensStyle'

class Itens extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={ styles.item }>
        <View style={ styles.foto }>
          <Image style={{width: 100, height: 100}} source={{ uri: this.props.item.foto }} />
        </View>

        <View style={ styles.texto }>
          <Text style={ styles.textoTitulo }>{ this.props.item.titulo }</Text>
          <Text style={ styles.textoValor }>R$ { this.props.item.valor }</Text>
          <Text>Local: { this.props.item.local_anuncio }</Text>
          <Text>Data Publicação: { this.props.item.data_publicacao }</Text>
        </View>
      </View>
    );
  }
}

export default Itens;

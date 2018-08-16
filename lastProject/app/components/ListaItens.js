import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import styles from '../styles/ListaItensStyle'
import Itens from '../components/Itens'
import axios from 'axios'

class ListaItens extends Component {
  constructor(props) {
    super(props);

    this.state = { listaItens: [] };
  }

  componentWillMount() {
    //faus.com.br/recursos/c/dmairr/api/itens.html
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then((response) => {
      this.setState({ listaItens: response.data });
    })
    .catch((error) => {
        console.log('BAD' + error);
    });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
          { this.state.listaItens.map(item => <Itens key={item.titulo} item={item} /> )}
      </ScrollView>
    );
  }
}

export default ListaItens;

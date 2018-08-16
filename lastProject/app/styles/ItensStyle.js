import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  item: {
    borderWidth: 0.5,
    borderColor: '#999999',
    margin: 10,
    padding: 10,
    flexDirection: 'row'
  },
  foto: {
    width: 102,
    height: 102
  },
  texto: {
    marginLeft: 15,
    flex: 1,
    fontSize: 16
  },
  textoTitulo: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 5
  },
  textoValor: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});

export default styles;

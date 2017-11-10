import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default class Item extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => Alert.alert(this.props.item.titulo+' foi selecionado!')}>
      <View style={styles.item}>
      <View style={styles.photo}>
      <Image style={{ width: 100, height: 100, }} source={{ uri: this.props.item.foto }}/>
      </View>
      <View style={styles.details}>
      <Text style={styles.txtTitle}>{this.props.item.titulo}</Text>
      <Text style={styles.txtValue}>Valor: {this.props.item.valor}</Text>
      <Text style={styles.txtDetails}>Local: {this.props.item.local_anuncio}</Text>
      <Text style={styles.txtDetails}>Data: {this.props.item.data_publicacao}</Text>
      </View>
      </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#9FF781',
    borderWidth: 2,
    borderColor: '#999',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  photo: {
    width: 105,
    height: 105,
    borderWidth: 2,
    borderColor: '#000',
  },
  details: {
    marginLeft: 20,
    flex: 1,
  },
  txtTitle: {
    fontSize: 20,
    color: '#29088A',
    marginBottom: 5,
  },
  txtValue: {
    color: '#B18904',
    fontSize: 16,
    fontWeight: 'bold'
  },
  txtDetails: {
    color: '#000',
    fontSize: 14
  }
});

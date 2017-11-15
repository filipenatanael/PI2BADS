import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Item from './Item';
import DefaultStyles from './Styles';

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = { itemList: [] };
  }

  componentWillMount() {
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
    .then(response => { this.setState({ itemList: response.data }); })
    .catch(() => { console.log('Error to require data.'); });
  }

  render() {
    return (
      <View style={DefaultStyles.container}>
      <View style={DefaultStyles.navbar}>
      <View style={DefaultStyles.icon}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
      <Image style={DefaultStyles.img} source={require('../images/icones.png')} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={DefaultStyles.content}>
      <ScrollView style={styles.ScrollView}>
      { this.state.itemList.map(item => { return (<Item key={item.titulo} item={item} />)})}
      </ScrollView>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  ScrollView: {
    backgroundColor: '#EAECEE',
  }
});

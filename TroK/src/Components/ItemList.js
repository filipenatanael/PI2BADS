import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import Item from './Item';
import DefaultStyles from './Styles';
import NavBarCustom from './NavBarCustom';

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
    const { state } = this.props.navigation;
    let idUserDescription;
    try {
      idUserDescription = state.params.idUserDescription;
    } catch (error) {
      idUserDescription = 'Bicicleta';
    }
    return (
      <View style={DefaultStyles.container}>
      <NavBarCustom myDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />

      <View style={DefaultStyles.content}>
      <ScrollView style={styles.ScrollView}>
      {
        this.state.itemList.map(item =>
          {
            if (item.titulo === idUserDescription) {
              return (<Item key={item.titulo} item={item} />);
            }


          })
        }
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

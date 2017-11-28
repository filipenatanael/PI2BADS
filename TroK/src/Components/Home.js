import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import CardScreen from './CardScreen';

import styles from './Styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.navbar}>
      <View style={styles.icon}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
      <Image style={styles.img} source={require('../images/icones.png')} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={styles.content}>

      <CardScreen />
      
      </View>
      </View>
    );
  }
}

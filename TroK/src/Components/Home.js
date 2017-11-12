import React, { Component } from 'react';
import { View, StyleSheet, Image, Dimensions, TouchableOpacity } from 'react-native';
import CardScreen from './CardScreen';

const { width, height } = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAECEE'
  },
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#29088A',
  },
  content: {
    flex: 10
  },
  img: {
    width: width / 10,
    height: height / 14,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10
  }
});

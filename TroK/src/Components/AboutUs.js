import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DefaultStyles from './Styles';

export default class AboutUs extends Component {
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
      <Text style={styles.title}>TroK</Text>
      <Text style={styles.description}>This application was created to people...</Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  description: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 17
  }
});

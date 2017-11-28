import React, { Component } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems } from 'react-navigation';

import ItemList from './ItemList';
import CardScreen from './CardScreen';
import AboutUs from './AboutUs';
import Home from './Home';

const Drawer = DrawerNavigator(
  {
    Home: {
      path: '/sent',
      screen: Home,
    },
    'My Items': {
      path: '/',
      screen: ItemList,
    },
    'Screen 3': {
      path: '/sent',
      screen: CardScreen,
    },
    'Screen 4': {
      path: '/sent',
      screen: CardScreen,
    },
    'About Us': {
      path: '/sent',
      screen: AboutUs,
    }
  },
  {
    initialRouteName: 'My Items',
    drawerPosition: 'left',
    drawerWidth: 270,
    drawerBackgroundColor: 'transparent',
    contentOptions: {
      activeTintColor: 'red',
    },
    contentComponent: props =>
    <View>
    <View style={styles.container}>

    <View style={styles.drawerIconContainer}>
    <Image source={require('../images/profile.png')} style={{ width: 70, height: 70 }} />
    </View>

    <View style={styles.drawerTextContainer}>
    <Text style={styles.name}>TroK</Text>
    <Text style={styles.email}>trok@hotmail.com</Text>
    </View>
    </View>
    <DrawerItems {...props} />
    </View>
  });

export default class ProfileScreen extends Component {
  render() {
    return (

      <Drawer />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: '#000',
    padding: 10,
    flexDirection: 'row',
  },
  drawerIconContainer: {
  },
  drawerTextContainer: {
    marginTop: 13,
    marginLeft: 15
  },
  name: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18
  },
  email: {
    color: '#fff'
  }
});

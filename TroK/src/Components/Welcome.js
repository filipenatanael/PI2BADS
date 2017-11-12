import React, { Component } from 'react';
import { View, Text, Button, Icon, Image, TouchableHightlight, StyleSheet, ScrollView } from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';


import ItemList from './ItemList';
import CardScreen from './CardScreen';
import AboutUs from './AboutUs';

const Drawer = DrawerNavigator(
  {
    'First Screen': {
      path: '/',
      screen: AboutUs,
    },
    'Second Screen': {
      path: '/sent',
      screen: ItemList,
    },
    Third: {
      path: '/sent',
      screen: CardScreen,
    }
  },
  {
    initialRouterName: 'First',
    drawerPosition: 'left',
    drawerWidth: 300,
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
    <Text style={styles.name}>Trok</Text>
    <Text style={styles.email}>trok@hotmail.com</Text>
    </View>

    </View>
    <DrawerItems {...props} />
    </View>
  });

  export default class Welcome extends Component {
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
      marginTop: 15,
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

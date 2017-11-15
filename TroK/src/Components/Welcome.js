import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';

import ItemList from './ItemList';
import CardScreen from './CardScreen';
import AboutUs from './AboutUs';
import Home from './Home';
import LoginScreen from './LoginScreen';

const Stack = StackNavigator({
  CardScreen: {
    screen: CardScreen,
  },
  ItemList: {
    screen: ItemList,
  }
},
{
  headerMode: 'none',
});

const Drawer = DrawerNavigator(
  {
    Home1: {
      screen: Stack,
      navigationOptions: {
        drawer: {
          label: 'testesdsf',
        },
      }
    },
    'My Items': {
      path: '/sent',
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
    initialRouteName: 'Home1',
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

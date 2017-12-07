import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { DrawerNavigator, DrawerItems, StackNavigator } from 'react-navigation';

import ItemList from './ItemList';
import CardScreen from './CardScreen';
import AboutUs from './AboutUs';
import Home from './Home';
import LoginScreen from './LoginScreen';
import PostsRegister from './PostsRegister';

const PROFILE_NAME = "TroK";
const PROFILE_EMAIL = "Trok@trok.com";

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
    Home: {
      screen: Stack,
      navigationOptions: {
        drawer: {
          label: 'StackLabel',
        },
      }
    },
    'Postar Produto': {
      path: '/sent',
      screen: PostsRegister,
    },
    'Configurações': {
      path: '/sent',
      screen: CardScreen,
    },
    'Suporte': {
      path: '/sent',
      screen: CardScreen,
    },
    'Sobre nos': {
      path: '/sent',
      screen: AboutUs,
    }
  },
  {
    initialRouteName: 'Home',
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
    <Text style={styles.name}>{PROFILE_NAME}</Text>
    <Text style={styles.email}>{PROFILE_EMAIL}</Text>
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

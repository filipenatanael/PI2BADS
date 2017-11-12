import React, { Component } from 'react';
import { View, Text, Button, Icon, Image, TouchableHightlight, StyleSheet, ScrollView } from 'react-native';

import { StackNavigator, DrawerNavigator, DrawerItems } from 'react-navigation';


import ItemList from './ItemList';
import CardScreen from './CardScreen';
import AboutUs from './AboutUs';



const Drawer = DrawerNavigator(
  {
    First: {
      path: '/',
      screen: AboutUs,
      navigationOptions: {
        drawerLabel: <View><Text style={{ color: '#fff' }}>Menu do aplicativo TroK </Text></View>,
        drawerIcon: <Image source={require('../images/Background.png')} size={20} style={{ height: 100 }} />
      },
    },
    List: {
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
    contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>,
    drawerBackgroundColor: 'transparent',
    contentOptions: {
      activeTintColor: 'red',
    }
  });



  export default class Welcome extends Component {
    render() {
      return (

        <Drawer />

      );
    }
  }


  /*
  import React from 'react';
  import { View, Text, Button, Image } from 'react-native';
  import { Actions } from 'react-native-router-flux';

  export default props => (
  <Image style={{ flex: 1, width: null }} source={require('../images/Background.png')}>
  <View style={{ flex: 1, padding: 15 }}>
  <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center' }}>
  <Image style={{ width: 150, height: 150 }} source={require('../images/logoTrok.jpeg')} />
  <Text style={{ color: '#fff', fontSize: 15, textAlign: 'center', marginTop: 10 }}>Welcome to TroK!</Text>
  </View>
  <View style={{ flex: 1 }}>
  <Button title="Get in" onPress={() => Actions.loginScreen()} />
  </View>
  </View>
  </Image>
);


*/

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

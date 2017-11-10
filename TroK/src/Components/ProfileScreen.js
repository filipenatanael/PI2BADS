import React, { Component } from 'react';
import { View } from 'react-native';
import ItemList from './ItemList';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };

  render() {
    return (
      <View>
      <ItemList />
      </View>

    );
  }
}

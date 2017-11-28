import React, { Component } from 'react';
import {
  View,
  ScrollView,
  Text
} from 'react-native';
import DefaultStyles from './Styles';
import NavBarCustom from './NavBarCustom';

export default class PostsRegister extends Component {
  render() {
    return (
      <View style={DefaultStyles.container}>
      <NavBarCustom myDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
      <View style={DefaultStyles.content}>
      <ScrollView>
      <Text>sdasdasdas</Text>
      </ScrollView>
      </View>
      </View>
    );
  }
}

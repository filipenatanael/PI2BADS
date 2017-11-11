import React, { Component } from 'react';
import { Text } from 'react-native';

export default class SecondScreen extends Component {
        render() {
          return (
            <Text onPress={() => this.props.navigation.navigate('DrawerOpen')}>Menu sdf</Text>

          );
        }
}

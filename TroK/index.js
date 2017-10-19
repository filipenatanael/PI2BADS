import React, { Component } from 'react';
import { AppRegistry, Text, View, Button, StyleSheet, Image, PanResponder, Animated, Dimensions, } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './src/CustomComponents/ProfileScreen';

const { width, height } = Dimensions.get('window')

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'TroK',
  };

  state = {
    profileIndex: 0,
  }

  nextCard = () => {
    this.setState({profileIndex: this.state.profileIndex + 1})
  }
  render() {
    const {profileIndex} = this.state;
    const { navigate } = this.props.navigation;
    return (

      <View style={{flex:1}}>
      <View style={styles.btnProfile}>
      <Button onPress={() => navigate('Profile')} title="Go to Profile Screen!" />
      </View>
      {profiles.slice(profileIndex, profileIndex + 4).reverse().map((profile) => {
        return (
          <Card
          key={profile.id}
          profile={profile}
          onSwipeOff={this.nextCard}
          />
        )
      })}
      </View>

    );
  }
}

AppRegistry.registerComponent('TroK', () => App);

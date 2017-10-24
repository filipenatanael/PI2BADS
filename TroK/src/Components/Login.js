import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/logoTrok.jpeg')}
          />
          <Text style={styles.title}>Hello, Welcome to the TroK.</Text>
        </View>
        <View style={styles.form} />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
  title: {
    color: '#000',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.5,
  },
  form: {

  }
});

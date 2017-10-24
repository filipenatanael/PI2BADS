import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image
          style={styles.logo}
          source={require('../images/logoTrok.jpeg')} />
        </View>
        <View style={styles.form} />

      </View>
    );
  }
}

<View></View>

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {

  },
  logo: {
    width: 100,
    height: 100,
  },
  form: {

  }
});

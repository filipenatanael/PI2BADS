import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';

import RegisterForm from './RegisterForm';

export default class RegisterScreen extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <Image style={{ flex: 1, width: null }} source={require('../images/Background.png')}>
      <View style={styles.logoContainer}>
      <Image
      style={styles.logo}
      source={require('../images/logoTrokRegister.png')}
      />
      <Text style={styles.title}>Hello, Welcome to the TroK.</Text>
      </View>

      <View>
      <RegisterForm />
      </View>
      </Image>
      </KeyboardAvoidingView>
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
    width: 150,
    height: 150,
  },
  title: {
    color: '#fff',
    marginTop: 10,
    textAlign: 'center',
    opacity: 0.5,
    fontSize: 12
  }
});

import React, { Component } from 'react';
import { View, StyleSheet, Image, Text, KeyboardAvoidingView } from 'react-native';

import SignUpForm from './SignUpForm';

export default class SignUp extends Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.logoContainer}>

      <Image
      style={styles.logo}
      source={require('../images/logoTrok.jpeg')}
      />
      <Text style={styles.title}>Hello, Welcome to the TroK.</Text>
      </View>
      <View style={styles.form}>

      <SignUpForm />

      </View>
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

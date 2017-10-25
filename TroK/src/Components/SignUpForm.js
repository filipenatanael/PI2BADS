import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <TextInput
      placeholder="Name"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      />

      <TextInput
      placeholder="Email"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      />

      <TextInput
      placeholder="Telefone"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      />
      <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnLogin}>Login</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 50,
    backgroundColor: '#D5D8DC',
    marginBottom: 15,
    color: '#000',
    paddingHorizontal: 12.5
  },
  btnContainer: {
    backgroundColor: '#D5D8DC',
    paddingVertical: 12.5,
    marginBottom: 5
  },
  btnLogin: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700'
  }
});

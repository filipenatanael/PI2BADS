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
      placeholder="Username or email"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      onSubmitEditing={() => this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      auto
      style={styles.input}
      />
      <TextInput
      placeholder="Password"
      placeholderTextColor="#E59866"
      returnKeyType="go"
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
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

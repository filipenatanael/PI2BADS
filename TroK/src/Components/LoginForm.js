import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

export default class LoginForm extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TextInput style={styles.input} />
        <TextInput style={styles.input} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
  input: {
    height: 50,
    backgroundColor: '#D5D8DC',
    marginBottom: 25,
    color: '#000',
    paddingHorizontal: 12.5,
  }
});

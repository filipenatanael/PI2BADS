import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar
} from 'react-native';
import { connect } from 'react-redux';
import { changeEmail, changePassword, registerUser } from '../actions/AuthenticationActions';

class RegisterForm extends Component {

  _registerUser() {
    const { email, password } = this.props;
    this.props.registerUser({ email, password });
  }

  render() {
    return (

      <View style={styles.container}>
      <Text style={{ color: '#ff0000', fontSize: 15, textAlign: 'center', marginBottom: 15 }}>{this.props.errorRegister}</Text>
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
      value={this.props.email}
      placeholder="Email"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      onChangeText={(email) => this.props.changeEmail(email)}
      />

      <TextInput
      value={this.props.password}
      placeholder="Telefone"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      onChangeText={(password) => this.props.changePassword(password)}
      />

      <TextInput
      placeholder="Password"
      placeholderTextColor="#E59866"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      />

      <TouchableOpacity style={styles.btnContainer} onPress={() => this._registerUser()}>
      <Text style={styles.btnRegister}>Registrar-se</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return (
    {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    errorRegister: state.AuthenticationReducer.errorRegister
    }
  );
}

export default connect(mapStateToProps, { changeEmail, changePassword, registerUser })(RegisterForm);


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
  btnRegister: {
    textAlign: 'center',
    color: '#000',
    fontWeight: '700'
  }
});

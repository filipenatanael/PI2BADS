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
import { changeEmail, changePassword, changeName, registerUser } from '../actions/AuthenticationActions';

class RegisterForm extends Component {

  _registerUser() {
    const { name, email, password } = this.props;
    this.props.registerUser({ name, email, password });
  }


  render() {
    let colorAlerts = 'transparent';
    if (this.props.errorRegister !== '') {
      colorAlerts = '#F7BE81';
    }
    return (
      <View style={styles.container}>
      <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', marginBottom: 20, backgroundColor: colorAlerts }}>
      <Text style={{ color: '#1C1C1C', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>{this.props.errorRegister}</Text>
      </View>
      <StatusBar barStyle="light-content" />
      <TextInput
      value={this.props.name}
      placeholder="Name"
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      onChangeText={(name) => this.props.changeName(name)}
      />

      <TextInput
      value={this.props.email}
      placeholder="Email"
      placeholderTextColor="#585858"
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
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      onChangeText={(password) => this.props.changePassword(password)}
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
      name: state.AuthenticationReducer.name,
      errorRegister: state.AuthenticationReducer.errorRegister
    }
  );
}

export default connect(mapStateToProps, { changeEmail, changePassword, changeName, registerUser })(RegisterForm);


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
    backgroundColor: '#29088A',
    paddingVertical: 12.5,
    marginBottom: 5
  },
  btnRegister: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 15
  }
});

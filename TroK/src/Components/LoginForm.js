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
import { changeEmail, changePassword, authenticationUser } from '../actions/AuthenticationActions';

class LoginForm extends Component {

  _authenticationUserUser() {
    const { email, password } = this.props;
    this.props.authenticationUser({ email, password });
  }
  render() {
    let colorAlerts = 'transparent';
    if (this.props.errorLogin !== '') {
      colorAlerts = '#F7BE81';
    }
    return (
      <View style={styles.container}>
      <View style={{ height: 35, justifyContent: 'center', alignItems: 'center', marginBottom: 20, backgroundColor: colorAlerts }}>
      <Text style={{ color: '#1C1C1C', fontSize: 13, fontWeight: 'bold', textAlign: 'center' }}>{this.props.errorLogin}</Text>
      </View>
      <StatusBar barStyle="light-content" />
      <TextInput
      value={this.props.email}
      onChangeText={(email) => this.props.changeEmail(email)}
      placeholder="Username or email"
      placeholderTextColor="#585858"
      returnKeyType="next"
      onSubmitEditing={() => this.passwordInput.focus()}
      keyboardType="email-address"
      autoCapitalize="none"
      autoCorrect={false}
      style={styles.input}
      underlineColorAndroid='transparent'
      />
      <TextInput
      value={this.props.password}
      onChangeText={(password) => this.props.changePassword(password)}
      placeholder="Password"
      placeholderTextColor="#585858"
      returnKeyType="go"
      secureTextEntry
      style={styles.input}
      ref={(input) => this.passwordInput = input}
      underlineColorAndroid='transparent'
      />
      <TouchableOpacity style={styles.btnContainer} onPress={() => this._authenticationUserUser()}>
      <Text style={styles.btnLogin}>Log in</Text>
      </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => (
  {
    email: state.AuthenticationReducer.email,
    password: state.AuthenticationReducer.password,
    errorLogin: state.AuthenticationReducer.errorLogin
  }
)

export default connect(mapStateToProps, { changeEmail, changePassword, authenticationUser })(LoginForm);


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
  btnLogin: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 15
  }
});

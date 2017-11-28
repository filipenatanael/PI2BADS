import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput
} from 'react-native';
import DefaultStyles from './Styles';
import NavBarCustom from './NavBarCustom';

export default class PostsRegister extends Component {
  render() {
    return (
      <View style={DefaultStyles.container}>
      <NavBarCustom myDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
      <View style={DefaultStyles.content}>

      <View style={styles.form}>
      <ScrollView>

      <TextInput
      value={this.props.name}
      placeholder="Titulo"
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid='transparent'
      style={styles.input}
      onChangeText={(name) => this.props.changeName(name)}
      />

      </ScrollView>

      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    backgroundColor: '#D5D8DC',
    marginBottom: 15,
    color: '#000',
    paddingHorizontal: 12.5
  },
  form: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15
  }
});

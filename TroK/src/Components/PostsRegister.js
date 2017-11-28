import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
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
      value={this.props.title}
      placeholder="Titulo"
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid='transparent'
      style={styles.title}
      onChangeText={(title) => this.props.changeTitle(title)}
      />

      <TextInput
      value={this.props.description}
      multiline
      numberOfLines={4}
      maxLength={50}
      placeholder="Descrição"
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid='transparent'
      style={styles.description}
      onChangeText={(description) => this.props.changeDescription(description)}
      />

      <TextInput
      value={this.props.photo}
      placeholder="Foto do produto (links)"
      placeholderTextColor="#585858"
      returnKeyType="next"
      keyboardType="default"
      autoCapitalize="none"
      autoCorrect={false}
      underlineColorAndroid='transparent'
      style={styles.title}
      onChangeText={(photo) => this.props.changePhoto(photo)}
      />

      <TouchableOpacity style={styles.btnContainer}>
      <Text style={styles.btnRegister}>Publicar</Text>
      </TouchableOpacity>

      </ScrollView>

      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    height: 50,
    backgroundColor: '#D5D8DC',
    marginBottom: 15,
    color: '#000',
    paddingHorizontal: 12.5
  },
  description: {
    height: 100,
    backgroundColor: '#D5D8DC',
    marginBottom: 15,
    color: '#000',
    paddingHorizontal: 12.5
  },
  form: {
    marginTop: 50,
    marginLeft: 15,
    marginRight: 15
  },
  btnContainer: {
    marginTop: 15,
    height: 50,
    backgroundColor: '#29088A',
    paddingVertical: 12.5,
  },
  btnRegister: {
    textAlign: 'center',
    color: '#fff',
    fontWeight: '700',
    fontSize: 15
  }
});

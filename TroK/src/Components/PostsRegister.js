import React, { Component } from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text
} from 'react-native';
import { connect } from 'react-redux';
import { changeTitle, changeDescription, changePhoto, registerPosts } from '../actions/AuthenticationActions';
import DefaultStyles from './Styles';
import NavBarCustom from './NavBarCustom';

class PostsRegister extends Component {

  _registerPosts() {
    const { title, description, photo } = this.props;
    this.props.registerPosts({ title, description, photo });
  }

  render() {
    return (
      <View style={DefaultStyles.container}>
      <NavBarCustom myDrawerOpen={() => this.props.navigation.navigate('DrawerOpen')} />
      <View style={DefaultStyles.content}>

      <View style={styles.form}>
      <ScrollView>

      <Text style={{ marginBottom: 18, textAlign: 'center', fontSize: 25, color: '#000', fontWeight: '700', }}>Publicar produto</Text>

      <TextInput
      value={this.props.title}
      maxLength={20}
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

      <TouchableOpacity style={styles.btnContainer} onPress={() => this._registerPosts()}>
      <Text style={styles.btnRegister}>Publicar</Text>
      </TouchableOpacity>

      </ScrollView>

      </View>
      </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return (
    {
      title: state.AuthenticationReducer.title,
      description: state.AuthenticationReducer.description,
      photo: state.AuthenticationReducer.photo
    }
  );
}

export default connect(mapStateToProps, { changeTitle, changeDescription, changePhoto, registerPosts })(PostsRegister);


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

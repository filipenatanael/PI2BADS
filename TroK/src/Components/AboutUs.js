import firebase from 'firebase';
import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import DefaultStyles from './Styles';

export default class AboutUs extends Component {

  render() {
    return (
      <View style={DefaultStyles.container}>
      <View style={DefaultStyles.navbar}>
      <View style={DefaultStyles.icon}>
      <TouchableOpacity onPress={() => this.props.navigation.navigate('DrawerOpen')}>
      <Image style={DefaultStyles.img} source={require('../images/icones.png')} />
      </TouchableOpacity>
      </View>
      </View>
      <View style={DefaultStyles.content}>
      <View style={styles.form}>
      <Text style={styles.title}>TroK</Text>
      <Text style={styles.description}>O aplicativo TroK propõe realizar trocas de forma fácil e rápida, no aplicativo o usuário cadastra sua conta e os produtos que deseja trocar.</Text>
      <Text style={styles.description}>O usuario visualizará os produtos cadastrados por outros usuários, e terá a oportunidade de sinalizar interesse neste produto, este sinal de interesse chegará como uma notificação para o proprietário do produto. que poderá visualizar o perfil do interessado e seus produtos cadastrados, se ele se interessar em algum produto, sinalizando interesse, será disponibilizado um chat, para negociarem ou combinarem como será feita a troca.</Text>
      <Text style={styles.description}>O TroK ainda terá várias funcionalidades, mas essa é a ideia básica do produto.</Text>
      </View>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginTop: 50,
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold'
  },
  form: {
    padding: 10
  },
  description: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 17
  }
});

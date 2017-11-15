import React, { Component } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default class NavBarCustom extends Component {
  render() {
    return (
      <View style={styles.navbar}>
      <View style={styles.icon}>
      <TouchableOpacity onPress={() => this.props.myDrawerOpen()}>
      <Image style={styles.img} source={require('../images/icones.png')} />
      </TouchableOpacity>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#29088A',
  },
  img: {
    width: width / 10,
    height: height / 14,
  },
  icon: {
    justifyContent: 'center',
    marginLeft: 10
  }
});

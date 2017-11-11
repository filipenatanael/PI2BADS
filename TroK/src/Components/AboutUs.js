import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class AboutUs extends Component {
        render() {
          return (
            <View style={styles.container}>
            <View style={styles.navbar}>

            </View>
            <View style={styles.content}>
             <Text>Body oof application</Text>
            </View>
            </View>
          );
        }
}

//  <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff', padding: 12 }} onPress={() => this.props.navigation.navigate('DrawerOpen')}></Text>
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EAECEE'
    },
    navbar: {
      flex: 1,
      backgroundColor: '#29088A'
    },
    content: {
      flex: 10
    }

});

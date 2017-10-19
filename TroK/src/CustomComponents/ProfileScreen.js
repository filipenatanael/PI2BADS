import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };
  render() {
    return (
      <View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/react-native-img.png')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Product</Text>
      <Text>Advert: description about product</Text>
      <Text>Advert: description about product</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/react-native-img.png')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Product</Text>
      <Text>Advert: description about product</Text>
      <Text>Advert: description about product</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/react-native-img.png')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Product</Text>
      <Text>Advert: description about product</Text>
      <Text>Advert: description about product</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/react-native-img.png')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Product</Text>
      <Text>Advert: description about product</Text>
      <Text>Advert: description about product</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/react-native-img.png')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Product</Text>
      <Text>Advert: description about product</Text>
      <Text>Advert: description about product</Text>
      </View>
      </View>

      </View>

    );
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    //width: width - 20,
    //height: height * 0.7,
    //top: (height * 0.3) / 10,
    marginTop: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderRadius: 10,
  },
  adverts: {
    borderColor: '#d6d7da',
    borderRadius: 4,
    borderWidth: 0.5,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    height: 120,
  },
  advertsText: {
    textAlign: 'right',
    fontSize: 20,
    margin: 10

  },
});

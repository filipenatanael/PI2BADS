import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Alert, } from 'react-native';
import { StackNavigator } from 'react-navigation';


export default class ProfileScreen extends Component {
  static navigationOptions = {
    title: 'Profile Screen',
  };

  render() {

    const alertConteudo = () => {
      Alert.alert(
        'Anuncio selecionado',
        'Fotos e mais informaçôes.',
        [
          {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        { cancelable: false }
      )
    }
    return (
      <View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/iPhone.jpg')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} onPress={() => {alertConteudo()}}>Fone de ouvido</Text>
      <Text style={{ width: 250, fontSize: 12}}>Troco iPhone 7 em otimo estado, usado poucas vezes carregado e fone de ouvido.</Text>
      <Text style={{ width: 250, fontSize: 12 }}>Bairro: Santo Antonio - Belo Horizonte</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/SenseBike.jpg')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Sense Bike</Text>
      <Text style={{ width: 250, fontSize: 12}}>Troco Bike Sense em otimo estado de conservação.</Text>
      <Text style={{ width: 250, fontSize: 12 }}>Bairro: Buritis- Belo Horizonte</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/Books-1.jpg')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Livros</Text>
      <Text style={{ width: 250, fontSize: 12}}>Troco livros, varios titulos em otimo estado de conservação.</Text>
      <Text style={{ width: 250, fontSize: 12 }}>Bairro: Calafate- Belo Horizonte</Text>
      </View>
      </View>

      <View style={styles.adverts}>
      <View>
      <Image
      style={{ width: 100, height: 100, margin: 10 }}
      source={ require('../images/watch.jpg')}
      />
      </View>
      <View style={{ height: 100, margin: 10 }}>
      <Text style={{ fontSize: 25, marginBottom: 5, }} >Relogio</Text>
      <Text style={{ width: 250, fontSize: 12}}>Troco relogio em otimo estado de conservação.</Text>
      <Text style={{ width: 250, fontSize: 12 }}>Bairro: Belvedere- Belo Horizonte</Text>
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

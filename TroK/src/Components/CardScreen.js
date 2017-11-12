import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Card from './Card';

export default class Welcome extends Component {
  state = {
    profileIndex: 0,
  }

  nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }

  render() {
    const { profileIndex } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: '#EAECEE' }}>
      <View style={{ flex: 10 }}>
      {profiles.slice(profileIndex, profileIndex + 4).reverse().map((profile) => {
        return (
          <Card
          key={profile.id}
          profile={profile}
          onSwipeOff={this.nextCard}
          />
        )
      })}
      </View>

      <View style={{ flex: 1, backgroundColor: '#29088A' }}>
      <Text style={{ textAlign: 'center', fontSize: 20, fontWeight: 'bold', color: '#fff', padding: 12 }} onPress={() => alert('Under development')}>Menu do aplicativo</Text>
      </View>
      </View>

    );
  }
}

const profiles = [
  {
    id: 'https://cdn.pixabay.com/photo/2015/01/29/11/36/mobile-616012_960_720.jpg',
    name: 'Leandro Araujo',
    bio: 'Troco iPhone 7 em otimo estado, usado poucas vezes + carregado e fone de ouvido.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2017/07/03/11/52/sound-2467421_960_720.jpg',
    name: 'Claudio Palas',
    bio: 'Vendo HeadSet semi-novo em otimo estado de conservação.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2014/05/02/21/50/home-office-336378_960_720.jpg',
    name: 'Antonio dos santos',
    bio: 'Troco MacBook por computador desktop.',
  },
  {
    id: 'https://cdn.pixabay.com/photo/2016/02/02/21/27/stack-of-books-1176150_960_720.jpg',
    name: 'Amanda Oliveira',
    bio: 'Troco livros colecionais, varios titulos e generos diferentes.',
  },
]

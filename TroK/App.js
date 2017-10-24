import React, { Component } from 'react';
import { AppRegistry,
  Text,
  View,
  Button,
  StyleSheet,
  Image,
  PanResponder,
  Animated,
  Dimensions,
  } from 'react-native';
import { StackNavigator } from 'react-navigation';
import ProfileScreen from './src/Components/ProfileScreen';

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends Component {
  static navigationOptions = {
    title: 'TroK',
  };

  state = {
    profileIndex: 0,
  }

  nextCard = () => {
    this.setState({ profileIndex: this.state.profileIndex + 1 });
  }
  render() {
    const { profileIndex } = this.state;
    const { navigate } = this.props.navigation;
    return (

      <View style={{ flex: 1 }}>
      <View style={styles.btnProfile}>
      <Button onPress={() => navigate('Profile')} title="Go to Profile Screen!" />
      </View>
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

    );
  }
}



class Card extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY()

    this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        { dx: this.pan.x, dy: this.pan.y },
      ]),
      onPanResponderRelease: (e, { dx }) => {
        const absDx = Math.abs(dx)
        const direction = absDx / dx

        if (absDx > 120) {
          Animated.decay(this.pan, {
            velocity: { x: 3 * direction, y: 0 },
            deceleration: 0.995,
          }).start(this.props.onSwipeOff)
        } else {
          Animated.spring(this.pan, {
            toValue: { x: 0, y: 0 },
            friction: 4.5,
          }).start()
        }
      },
    })
  }


  render() {
    const { name, bio, id } = this.props.profile
    const fbImage = id;

    const rotateCard = this.pan.x.interpolate({
      inputRange: [-200, 0, 200],
      outputRange: ['10deg', '0deg', '-10deg'],
    })
    const animatedStyle = {
      transform: [
        { translateX: this.pan.x },
        { translateY: this.pan.y },
        { rotate: rotateCard },
      ],
    }

    return (
      <Animated.View
      {...this.cardPanResponder.panHandlers}
      style={[styles.card, animatedStyle]}>
      <Image
      style={{ flex: 1 }}
      source={{ uri: fbImage }}
      />
      <View style={{ margin: 20 }}>
      <Text style={{ fontSize: 20 }}>{name}</Text>
      <Text style={{ fontSize: 17, marginTop: 10, color: 'black' }}>{bio}</Text>
      </View>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    position: 'absolute',
    width: width - 20,
    height: height * 0.7,
    //top: (height * 0.3) / 10,
    marginTop: 50,
    overflow: 'hidden',
    backgroundColor: 'white',
    margin: 10,
    borderWidth: 1,
    borderColor: 'lightgrey',
  },
  btnProfile: {
    margin: 10,
  }
});

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




export const App = StackNavigator({
  Home: { screen: HomeScreen },
  Profile: { screen: ProfileScreen },
});


AppRegistry.registerComponent('TroK', () => App);

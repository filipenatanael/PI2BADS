import React from 'react';
import { View, Text, Button } from 'react-native';

export default props => (
  <View style={{ flex: 1, padding: 15 }}>
  <View style={{ flex: 2 }}>
  <Text>Welcome to TroK!</Text>
  </View>
  <View style={{ flex: 1 }}>
  <Button title="Get in" onPress={() => false} />
  </View>
  </View>
);

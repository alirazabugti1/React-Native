import React from 'react';
import { View, Text, Button } from 'react-native';

export default function SignupScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Signup Screen</Text>
      <Button title="Register & Go to Home" onPress={() => navigation.replace('Home')} />
    </View>
  );
}

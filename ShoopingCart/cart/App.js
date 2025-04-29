import React from 'react';
import { View, StyleSheet } from 'react-native';
import ShoopingCartScreen from './ShoopingCartScreen';  // Import ShoppingCartScreen component

export default function App() {
  return (
    <View style={styles.container}>
      <ShoopingCartScreen />  {/* Render the ShoopingCartScreen */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,  // Adjust to fit your UI needs
  },
});

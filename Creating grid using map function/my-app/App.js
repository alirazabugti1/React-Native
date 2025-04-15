import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function App() {
  const data = [
    'Apple', 'Banana', 'Cherry', 'Date',
    'Elderberry', 'Fig', 'Grapes', 'Honeydew',
    'Ice Apple', 'Jackfruit', 'Kiwi', 'Lemon'
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {
        data.map((item, index) => (
          <View key={index} style={styles.box}>
            <Text style={styles.text}>{item}</Text>
          </View>
        ))
      }
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  box: {
    width: '48%', 
    height: 100,
    backgroundColor: '#FF5733',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

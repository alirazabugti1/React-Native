import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const Mainscreen = ({ items }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Items in the Cart:</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>Name: {item.name}</Text>
            <Text style={styles.itemText}>Price: ${item.price}</Text>
            <Text style={styles.itemText}>Quantity: {item.Quantity}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Mainscreen;

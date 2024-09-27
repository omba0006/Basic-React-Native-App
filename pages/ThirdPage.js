

import React from 'react';
import { SafeAreaView, FlatList, Pressable, Text, StyleSheet } from 'react-native';

const data = [
  { id: '1', title: 'Item 1' },
  { id: '2', title: 'Item 2' },
  { id: '3', title: 'Item 3' },
];

export default function ThirdPage({ navigation }) {
  const renderItem = ({ item }) => (
    <Pressable style={styles.item} onPress={() => alert(`You pressed ${item.title}`)}>
      <Text style={styles.itemText}>{item.title}</Text>
    </Pressable>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data} renderItem={renderItem} keyExtractor={item => item.id} />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Go to Home Page</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Second')}>
        <Text style={styles.buttonText}>Go to Second Page</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  item: {
    padding: 20,
    backgroundColor: 'lightgray',
    marginVertical: 8,
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    padding: 15,
    backgroundColor: 'dodgerblue',
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

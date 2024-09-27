
import React from 'react';
import { SafeAreaView, Text, Button, StyleSheet } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Welcome to the Home Page!</Text>
      <Button title="Go to Second Page" onPress={() => navigation.navigate('Second')} />
      <Button title="Go to Third Page" onPress={() => navigation.navigate('Third')} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});
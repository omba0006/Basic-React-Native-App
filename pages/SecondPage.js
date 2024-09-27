
import React from 'react';
import { SafeAreaView, ScrollView, Image, Button, StyleSheet, Text } from 'react-native';

export default function SecondPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Text style={styles.text}>This is the Second Page!</Text>
        <Image source={require('../assets/dog.png')} style={styles.image} />
        <Button title="Go to Home Page" onPress={() => navigation.navigate('Home')} />
        <Button title="Go to Third Page" onPress={() => navigation.navigate('Third')} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
  },
});

import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Title from './Title';
import Logo from '../assets/logo.png';

export default function Top() {
  return (
    <View style={styles.top}>
      <View style={styles.logo}>
        <Image source={Logo} style={styles.logoImage} />
        <Title>Native Tracker</Title>
      </View>

      <Text style={styles.subtitle}>Organize suas tarefas e visualize seus hábitos</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  top: {
    backgroundColor: '#EBF8FF',
    padding: 24,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12
  },
  logoImage: {
    width: 50,
    height: 50,
    marginRight: 12
  },
  subtitle: {
    fontSize: 16,
    color: '#000000'
  }
});

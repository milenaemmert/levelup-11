import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Home from './src/screens';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EBFFEE'
  }
})

export default App
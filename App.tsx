import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, StyleSheet} from 'react-native';
import AppRoutes from './src/routes/AppRoutes';

function App() {
  return (
    <SafeAreaView style={styles.screen}>
      {/* <StatusBar /> */}
      <AppRoutes />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#EBFFEE',
  },
});

export default App;

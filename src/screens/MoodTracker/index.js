import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../../components/Header';
import MoodSelection from './components/MoodSelection';
import CustomButton from '../../components/Button';
import ActivitySelection from './components/ActivitySelection';

const MoodTracker = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Header />
        <Text style={styles.date}>July 24, 2023</Text>
        <MoodSelection />
        <ActivitySelection />
        <CustomButton />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  date: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    paddingVertical: 16,
  },
});

export default MoodTracker;

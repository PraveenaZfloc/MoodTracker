import React from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import {moodData} from '../../../data/moodData';

const MoodSelection = () => {
  const renderItem = ({item, index}) => {
    return (
      <View style={styles.mood}>
        <Image source={item.image} />
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <Text style={styles.selectMood}>Select Mood:</Text>
      <FlatList
        numColumns={5}
        data={moodData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingBottom: 16,
  },
  selectMood: {
    paddingBottom: 16,
    fontWeight: 'bold',
    fontSize: 14,
    color: '#101828',
  },
  mood: {
    flex: 1 / 5,
    alignItems: 'center',
  },
});
export default MoodSelection;

import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  Dimensions,
} from 'react-native';
import {ActivityData} from '../../../data/activityData';

const ActivitySelection = () => {
  const renderActivity = ({item, index}) => {
    return (
      <View style={styles.flatlistContent}>
        <View style={styles.activitystyle}>
          <Image source={item.image} />
          <Text style={styles.activitytext}>{item.name}</Text>
        </View>
      </View>
    );
  };
  return (
    <View style={styles.content}>
      <Text style={styles.selectMood}>
        What has Betty done today? Select all that apply:
      </Text>
      <FlatList
        numColumns={4}
        data={ActivityData}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderActivity}
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
  flatlistContent: {
    flex: 1 / 4,
    alignItems: 'center',
    marginBottom: 8,
  },
  activitystyle: {
    width: (Dimensions.get('screen').width - 32) / 4 - 8,
    height: (Dimensions.get('screen').width - 32) / 4 - 8,
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  activitytext: {
    fontSize: 12,
    marginTop: 10,
  },
});

export default ActivitySelection;

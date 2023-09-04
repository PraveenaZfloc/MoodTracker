import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.profileContainer}>
      <View style={styles.row}>
        <Image
          source={require('../assets/images/betty.png')}
          style={styles.profileImage}
        />
        <View style={styles.textContainer}>
          <Text style={styles.name}>Betty Smith</Text>
          <Text style={styles.email}>bettysmith@gmail.com</Text>
        </View>
      </View>
      <Image
        source={require('../assets/images/health.png')}
        style={styles.health}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EAECF0',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
  },
  email: {},
  health: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});
export default Header;

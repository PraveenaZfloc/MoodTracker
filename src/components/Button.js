import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const CustomButton = () => {
  return (
    <TouchableOpacity style={styles.button}>
      <Text style={styles.buttontext}>Continue</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#EAECF0',
    borderRadius: 6,
    padding: 10,
  },
  buttontext: {
    textAlign: 'center',
    color: '#EAECF0',
  },
});
export default CustomButton;

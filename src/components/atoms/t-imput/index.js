import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS } from '../../../constants/style.contstants';

const styles = StyleSheet.create({
  input: {
    borderBottomColor: COLORS.textLight,
    borderBottomWidth: 1,
    color: COLORS.textLight,
    marginVertical: 12,
    padding: 12,
    paddingBottom: 6,
  },
});

function AddTextInput({ placeholder, placeholderTextColor, onChangeText, value }) {
  return (
    <TextInput
      style={styles.input}
      placeholder={placeholder}
      placeholderTextColor={placeholderTextColor || COLORS.textLight}
      onChangeText={onChangeText}
      value={value}
    />
  );
}

export default AddTextInput;

// Atom: ButtonAtom.js
import React from 'react';
import { Button } from '@rneui/base'; // Asegúrate de importar el Button correcto
import { StyleSheet } from 'react-native';
import { COLORS, COMPONENT, FONT } from '../../../constants/style.contstants';

const styles = StyleSheet.create({
  send: {
    ...COMPONENT.button.highlight,
    width: '40%',
    alignSelf: 'flex-end',
    marginTop: 24,
  },
  sendTitle: {
    ...FONT.button,
    color: COLORS.main,
  },
});

function AddButton({ title, onPress }) {
  return (
    <Button
      titleStyle={styles.sendTitle}
      buttonStyle={styles.send}
      title={title}
      onPress={onPress}
    />
  );
}

export default AddButton;

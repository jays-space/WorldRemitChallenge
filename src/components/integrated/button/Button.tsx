import React from 'react';
import {Pressable} from 'react-native';

// COMPONENTS
import {Text} from 'components/atomic';

// STYLES
import {styles} from './Button.styles';

interface IButton {
  onPress: () => void;
  label: string;
}

/**
 *
 * @param onPress a function to be executed on button press
 * @returns a custom pressable RN component
 */

const Button = ({label, onPress}: IButton) => {
  return (
    <Pressable onPress={onPress} style={styles.root}>
      <Text copy={label} size="sm" bold capitalize />
    </Pressable>
  );
};

export default Button;

import {Text as RNText} from 'react-native';
import React from 'react';
import {genFontSize, genFontWeight, genTextTransform} from './utils';

interface IText {
  copy: string;
  size?: 'default' | 'sm' | 'lg';
  bold?: boolean;
  capitalize?: boolean;
}

const Text = ({
  copy,
  size = 'default',
  bold = false,
  capitalize = false,
  ...restOfProps
}: IText) => {
  return (
    <RNText
      {...restOfProps}
      style={[
        genFontSize(size),
        genFontWeight(bold),
        genTextTransform(capitalize),
      ]}>
      {copy}
    </RNText>
  );
};

export default Text;

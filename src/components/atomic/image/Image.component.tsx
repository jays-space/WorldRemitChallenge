import React from 'react';
import {ImageStyle, Image as RNImage, StyleProp} from 'react-native';
import {getImageSize} from './utils';
import {ImageSizeType} from './Image.types';

interface IImage {
  source: string;
  size?: ImageSizeType;
  style?: StyleProp<ImageStyle>;
  testID?: string;
}

/**
 *
 * @param source uri of image source
 * @param size (optional) image size options: sm, md, or lg
 * @param style (optional) custom styles to pass on
 *
 * @returns custom image component
 */

const Image = ({
  source,
  size = 'sm',
  style = undefined,
  testID = '',
}: IImage) => {
  return (
    <RNImage
      alt={source}
      style={[style, getImageSize(size)]}
      source={{uri: source}}
      testID={testID}
    />
  );
};

export default Image;

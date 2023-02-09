import React from 'react';
import {ImageStyle, Image as RNImage, StyleProp} from 'react-native';
import {getImageSize} from './utils';
import {ImageSizeType} from './Image.types';

interface IImage {
  source: string;
  size?: ImageSizeType;
  style?: StyleProp<ImageStyle>;
}

/**
 *
 * @param source uri of image source
 * @param size (optional) image size options: sm, md, or lg
 * @param style (optional) custom styles to pass on
 *
 * @returns custom image component
 */

const Image = ({source, size = 'sm', style = undefined}: IImage) => {
  return <RNImage style={[style, getImageSize(size)]} source={{uri: source}} />;
};

export default Image;

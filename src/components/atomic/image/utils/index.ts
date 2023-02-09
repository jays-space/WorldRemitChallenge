// TYPES
import {ImageSizeType} from '../Image.types';

// THEME
import {THEME_IMAGES} from '@theme';

export const getImageSize = (size: ImageSizeType) => {
  switch (size) {
    case 'sm':
      return THEME_IMAGES.sm;

    case 'md':
      return THEME_IMAGES.md;

    case 'lg':
      return {...THEME_IMAGES.lg, marginTop: 20, marginBottom: 8};

    default:
      return THEME_IMAGES.sm;
  }
};

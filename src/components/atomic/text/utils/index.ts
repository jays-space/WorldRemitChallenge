export const genFontSize = (size: 'default' | 'sm' | 'lg') => {
  if (size === 'sm') {
    return {fontSize: 16};
  }

  if (size === 'lg') {
    return {fontSize: 20};
  }

  return {fontSize: 18};
};

export const genFontWeight = (bold: boolean) =>
  bold ? {fontWeight: 'bold'} : {fontWeight: 'normal'};

export const genTextTransform = (capitalize: boolean) =>
  capitalize ? {textTransform: 'uppercase'} : {textTransform: 'none'};

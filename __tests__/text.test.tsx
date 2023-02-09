import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import {Text} from 'components/atomic';

// const textTestID = 'testTextID';
const textCopy =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.';

describe('<Text/>', () => {
  it('renders correct copy', () => {
    render(<Text copy={textCopy} />);
    const imageComponent = screen.getByText(textCopy);

    expect(imageComponent).toBeTruthy();
  });
});

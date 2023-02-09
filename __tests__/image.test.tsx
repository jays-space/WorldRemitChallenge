import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import {Image} from 'components/atomic';

const imageTestID = 'thaImage';
const imageSource = 'thaImage';

describe('<Image/>', () => {
  it('uses correct source', () => {
    render(<Image source={imageSource} testID={imageTestID} />);
    const imageComponent = screen.getByTestId(imageTestID);

    expect(imageComponent.props.source.uri).toContain(imageSource);
  });
});

import React from 'react';
import {SafeAreaView, Button} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Button onPress={() => console.log('Click me')} title="Click me!" />
    </SafeAreaView>
  );
};

export default App;

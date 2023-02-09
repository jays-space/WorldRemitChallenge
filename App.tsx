import React from 'react';

// CONTEXTS
import {UsersContextProvider} from 'context';

// SCREENS
import {HomeScreen} from '@screens';

const App = () => {
  return (
    <UsersContextProvider>
      <HomeScreen />
    </UsersContextProvider>
  );
};

export default App;

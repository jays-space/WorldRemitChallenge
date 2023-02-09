import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  StatusBar,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useNetInfo} from '@react-native-community/netinfo';

import {useUsersContext} from 'context';
import {UsersList} from 'components/templates';
import {UserService} from 'services';
import {UserType} from 'types';

const HomeScreen = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const {
    users,
    loading,
    apiError,
    setLoading,
    setApiError,
    setUsers,
  } = useUsersContext();

  const {isInternetReachable} = useNetInfo();

  useEffect(() => {
    const GetUsers = async () => {
      try {
        setLoading(true);
        setApiError(undefined);

        // service call
        const res: {
          users: UserType[];
          status: number;
        } = await UserService.getUsersList();
        setUsers(res.users);
      } catch (error: any) {
        setApiError(error);
      } finally {
        setLoading(false);
      }
    };

    GetUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInternetReachable]);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  if (loading) {
    return <ActivityIndicator />;
  }

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <UsersList
        isInternetReachable={isInternetReachable}
        users={users}
        apiError={apiError}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

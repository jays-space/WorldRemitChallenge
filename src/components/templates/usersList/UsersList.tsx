import {View, FlatList} from 'react-native';
import React, {useEffect} from 'react';
import {AxiosError} from 'axios';

// COMPONENTS
import {UserListItem} from '@components/integrated';

// STYLES
import {styles} from './UsersList.styles';
import {Text} from 'components/atomic';
import {UserType} from 'types';

interface IUsersList {
  users: UserType[];
  apiError?: AxiosError;
  isInternetReachable: boolean | null;
}

const genPlaceholderUsers = (nOfUsers: number) => {
  const emptyUser: UserType = {
    badge_counts: {
      bronze: 0,
      silver: 0,
      gold: 0,
    },
    account_id: 0,
    is_employee: false,
    last_modified_date: 0,
    last_access_date: 0,
    reputation_change_year: 0,
    reputation_change_quarter: 0,
    reputation_change_month: 0,
    reputation_change_week: 0,
    reputation_change_day: 0,
    reputation: 0,
    creation_date: 0,
    user_type: '',
    user_id: 0,
    accept_rate: 0,
    location: '',
    website_url: '',
    link: '',
    profile_image: 'none',
    display_name: '',
    isBlocked: false,
    isFollowed: false,
  };

  let arr: UserType[] = [];

  for (let i: number = 0; i <= nOfUsers; i++) {
    arr.push({...emptyUser, account_id: i});
  }

  return arr;
};

const placeholderUsers: UserType[] = genPlaceholderUsers(11);

const UsersList = ({users, apiError, isInternetReachable}: IUsersList) => {
  useEffect(() => {}, [isInternetReachable, apiError]);

  return (
    <View style={styles.root}>
      <FlatList
        keyExtractor={item => item?.account_id.toString()}
        data={
          users.length < 1 || !isInternetReachable ? placeholderUsers : users
        }
        ListHeaderComponent={
          apiError || !isInternetReachable ? (
            <View style={styles.listHeader}>
              <Text copy={apiError?.message || 'Network offline'} />
            </View>
          ) : null
        }
        renderItem={({item}) => (
          <UserListItem
            item={item}
            isPlaceholder={item?.profile_image === 'none'}
          />
        )}
      />
    </View>
  );
};

export default UsersList;

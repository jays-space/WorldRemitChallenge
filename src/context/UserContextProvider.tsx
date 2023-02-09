import React, {useContext} from 'react';
import {ReactNode, createContext, useState} from 'react';
import {AxiosError} from 'axios';

import {UserContextType, UserType} from '@types';

export const UsersContext = createContext<UserContextType>({
  users: [],
  apiError: undefined,
  loading: false,
  setUsers: () => ({}),
  setApiError: () => ({}),
  setLoading: () => ({}),

  //   toggleBlockUser: () => ({}),
  //   toggleFollowUser: () => ({}),
  //   unFollowUser: () => ({}),
});

const UsersContextProvider = ({children}: {children: ReactNode}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [apiError, setApiError] = useState<AxiosError | undefined>(undefined);

  return (
    <UsersContext.Provider
      value={{
        setUsers,
        users,
        apiError,
        loading,
        setApiError,
        setLoading,
      }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
export const useUsersContext = () => useContext(UsersContext);

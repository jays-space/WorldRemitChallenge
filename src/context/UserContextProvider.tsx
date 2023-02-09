import React, {useContext} from 'react';
import {ReactNode, createContext, useState} from 'react';
import {UserContextType, UserType} from '@types';

export const UsersContext = createContext<UserContextType>({
  users: [],
  setUsers: () => ({}),
  //   toggleBlockUser: () => ({}),
  //   toggleFollowUser: () => ({}),
  //   unFollowUser: () => ({}),
});

const UsersContextProvider = ({children}: {children: ReactNode}) => {
  const [users, setUsers] = useState<UserType[]>([]);

  return (
    <UsersContext.Provider
      value={{
        setUsers,
        users,
      }}>
      {children}
    </UsersContext.Provider>
  );
};

export default UsersContextProvider;
export const useUsersContext = () => useContext(UsersContext);

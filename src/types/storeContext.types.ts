import {UserType} from '@types';
import {Dispatch, SetStateAction} from 'react';

type UserContextType = {
  users: UserType[];
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  //   toggleFollowUser: Dispatch<SetStateAction<UserType>>;
  //   toggleBlockUser: Dispatch<SetStateAction<UserType>>;
  //   unFollowUser: Dispatch<SetStateAction<UserType>>;
};

// FIXME: sort out eslint issue
// eslint-disable-next-line no-undef
export default UserContextType;

import {AxiosError} from 'axios';
import {Dispatch, SetStateAction} from 'react';

// TYPES
import {UserType} from '@types';

type UserContextType = {
  users: UserType[];
  apiError: AxiosError<unknown, any> | undefined;
  loading: boolean;
  setUsers: Dispatch<SetStateAction<UserType[]>>;
  setApiError: Dispatch<SetStateAction<AxiosError<unknown, any> | undefined>>;
  setLoading: Dispatch<SetStateAction<boolean>>;
  //   toggleFollowUser: Dispatch<SetStateAction<UserType>>;
  //   toggleBlockUser: Dispatch<SetStateAction<UserType>>;
  //   unFollowUser: Dispatch<SetStateAction<UserType>>;
};

// FIXME: sort out eslint issue
// eslint-disable-next-line no-undef
export default UserContextType;

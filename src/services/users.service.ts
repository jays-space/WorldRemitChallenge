import axios, {AxiosResponse} from 'axios';
import {UserType} from 'types';

export interface UserListResponse {
  status: number;
  items: UserType[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}
export interface UsersListResponsePayload {
  users: UserType[];
  status: number;
}

const getUsersList = async () => {
  const apiUrl =
    'http://api.stackexchange.com/2.2/users?pagesize=20&order=desc&sort=reputation&site=stackoverflow';

  return await axios
    .get(apiUrl)
    .then((result: AxiosResponse<UserListResponse>) => {
      const res: UsersListResponsePayload = {
        users: result.data.items.map(user => ({
          ...user,
          isBlocked: false,
          isFollowed: false,
        })),
        status: result.status,
      };

      return res;
    })
    .catch(error => {
      console.error('⛔ GetUsersListServiceError', error);
      throw error;
    });
};

export default {getUsersList};

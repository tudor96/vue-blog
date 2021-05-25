import { sendGetRequest, sendPostRequest, sendPutRequest } from '../utils';
import {
 Post, PostsRequest
} from './types';

import { api_url } from '../utils/consts';

export default () => ({

  getAllPosts: async (id: number): Promise<Post[]> => {
    const { data }: PostsRequest = await sendGetRequest(
      api_url + 'api/v1.0/platform/address/' + id
    );
    return data;
  },
//   postAddresses: async (address: Address): Promise<Address> => {
//     const token = localStorage.getItem('token');

//     const { data }: AddressResponse = await sendPostRequest(
//       api_url + 'api/v1.0/platform/address',
//       address,
//       token || ''
//     );
//     return data;
//   },
//   updateAddresses: async (
//     id: string,
//     address: Partial<Address>
//   ): Promise<Address> => {
//     const token = localStorage.getItem('token');

//     const { data }: AddressResponse = await sendPutRequest(
//       api_url + 'api/v1.0/platform/address/' + id,
//       address,
//       token || ''
//     );
//     return data;
//   },
});
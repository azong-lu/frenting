import { get } from 'utils/request';

export async function fetchList(params = {}) {
  // console.log(params);
  return await get('/product/list');
}

import { get } from 'utils/request';

export async function fetchList(params = {}) {
  return await get('/product/list');
}

import { get } from 'utils/request';

export async function findProduct(params = {}) {
  return await get('/product/view');
}

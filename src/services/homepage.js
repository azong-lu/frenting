import { get } from 'utils/request';
// import '../../mock/product'

export async function fetchList(params = {}) {
  // console.log(params);
  return await get('/product/list');
}

import { get } from 'utils/request';

export async function fetchRentAmt(params = {}) {
  return await get('/rentamt/list');
}

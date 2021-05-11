import { get } from 'utils/request';

export async function useAmap(params = {}) {
  // console.log(params);
  return await get('https://restapi.amap.com/v3/staticmap', {
    params,
    mode: 'cors',
  });
}

export async function acquireDistrict(params = {}) {
    // console.log(params);
    return await get('https://restapi.amap.com/v3/config/district', {
      params,
      mode: 'cors',
    });
  }

  export async function acquireIp(params = {}) {
    // console.log(params);
    return await get('https://restapi.amap.com/v3/ip', {
      params,
      mode: 'cors',
    });
  }

  export async function transformAddres(params = {}) {
    // console.log(params);
    return await get('https://restapi.amap.com/v3/geocode/geo', {
      params,
      mode: 'cors',
    });
  }


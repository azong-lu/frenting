import { get } from 'utils/request';

export async function useAmap(params = {}) {
  // console.log(params);
  return await get('https://restapi.amap.com/v3/geocode/regeo', {
    params,
    mode: 'cors',
  });
}

export async function convertGeo(params = {}) {
    // console.log(params);
    return await get('https://restapi.amap.com/v3/assistant/coordinate/convert', {
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


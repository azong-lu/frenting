const baseUrl = '';

export default function request(url, option = {}) {
  let newOptions = option;
  const { method } = newOptions;
  let wholeUrl = baseUrl + url;
  if (!method) {
    option.method = 'GET';
  }

  if (newOptions.hasOwnProperty('params')) {
    //   处理GET
    if (/^(GET|DELETE|HEAD|OPTIONS)$/i.test(newOptions.method)) {
      // 判断当前url中是否有问号，如果有，就用&，如果没有，就用问号，作为拼接参数的连接符
      const ask = wholeUrl.includes('?') ? '&' : '?';
      // 如果请求时GET请求，把所有params参数添加到url中，将对象拼接为xxx=xxx&yyy=yyy的格式
      Object.keys(newOptions.params).forEach((element) => {
        wholeUrl= addURLParam(wholeUrl,element,newOptions.params[element])
      });
    }
    delete option.params;
  }

  newOptions = Object.assign(
    {
      // 允许跨域携带资源凭证
      //   - include：无论同源不同源都可以
      //   - same-origin：同源可以，默认值 √
      //   - omit：都拒绝
      //   credentials: 'include',
      // 设置请求头
      headers: {},
    },
    newOptions
  );
  
  newOptions.headers.Accept = 'application/json';
  //   处理POST
  if (/^(POST|PUT)$/i.test(newOptions.method)) {
    // 读取传入的数据格式类型参数type，如果没有传入type，默认为urlencoded格式
    !newOptions.type ? (newOptions.type = 'urlencoded') : null;
    if (newOptions.type === 'urlencoded') {
      newOptions.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      newOptions.body = JSON.stringify(options.body);
    }
    if (newOptions.type === 'json') {
      // json格式使用JSON库进行格式化
      newOptions.headers['Content-Type'] === 'application/json';
      newOptions.body = JSON.stringify(options.body);
    }
  }

  return fetch(wholeUrl, newOptions)
    .then((response) => {
      if (newOptions.method === 'DELETE' || response.status === 204) {
        return response.text();
      }
      return response.json();
    })
    .catch((e) => {});
}

const addURLParam = (url, key, value) => {
  let newUrl = '';
  const reg = new RegExp(`'(^|)'${key}'=([^&]*)(|$)'`);
  const newParam = encodeURI(`${key}=${value}`);
  if (url.match(reg) != null) {
    /* eslint-disable no-eval */
    newUrl = url.replace(eval(reg), newParam);
    /* eslint-enable no-eval */
  } else if (url.match('[?]')) {
    newUrl = `${url}&${newParam}`;
  } else {
    newUrl = `${url}?${newParam}`;
  }

  return newUrl;
};

export function get(url, params) {
  const newOptions = { method: 'GET', ...params };
  let newUrl = url;
  return request(newUrl, newOptions);
}

export function post(url, form, options) {
  const newOptions = { method: 'POST', ...options, params };
  newOptions.body = form;
  return request(url, newOptions);
}

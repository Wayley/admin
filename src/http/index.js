import axios from 'axios';
import qs from 'qs';
import apis from './apis';

// Create the axios instance
let instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 1000,
  headers: { 'content-type': 'application/json' },
  transformRequest: [
    function(data, headers) {
      return data;
    }
  ],
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  }
});

// Add a request interceptor
instance.interceptors.request.use(
  function(config) {
    // Do something before request is sent

    // Such as deal with the apis like this:
    // 'GET,/user/{id}'
    // 'PUT,/user/{id}'
    // 'DELETE,/user/{id}'
    const params = config.params || qs.parse(config.data) || {};
    // console.log('---config---params------', config, params);
    config.url = config.url.replace(/\{\w+\}/gi, pname => {
      // const paramsName = pname.replace(/\{?\}?/gi, '');
      // const presult = params[paramsName];
      // delete params[paramsName];
      return pname;
    });
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  function(error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// $apis
let $apis = {};
for (let key in apis) {
  // getUserDetail: 'GET,/api/user/{id}',
  let api_info = apis[key].split(','); // ["GET", "/api/user/{id}"]
  let method = api_info[0] ? api_info[0].toUpperCase() : 'GET'; // GET
  let method_lower = method.toLowerCase(); // get
  let url_origin = api_info[1]; // "/api/user/{id}"

  let curInstance;
  $apis[key] = (params = {}, hooks = {}) => {
    // before 钩子
    if (hooks.before) {
      hooks.before();
    }
    let url = url_origin.replace(/\{\w+\}/gi, placeHolder => {
      const placeHolder_key = placeHolder.replace(/\{?\}?/gi, ''); // placeHolder // {id}
      try {
        const value = params[placeHolder_key]; // placeHolder_key // id
        if (value) {
          return value;
        } else {
          throw Error(`缺少参数 ${placeHolder_key}`);
        }
      } catch (error) {
        console.error(error);
      }
    });
    let config;
    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      config = qs.stringify(params);
    } else {
      config = { params };
    }

    curInstance = instance[method_lower](url, config);

    return curInstance.then(response => {}).catch(error => {});
  };
}

// install
function install(Vue) {
  if (install.installed) {
    return;
  }
  install.installed = true;

  Object.defineProperty(Vue.prototype, '$apis', {
    get: function get() {
      return $apis;
    }
  });
  Object.defineProperty(Vue.prototype, '$axios', {
    get: function get() {
      return instance;
    }
  });
}

let inBrowser = typeof window !== 'undefined';
$apis.install = install;

if (inBrowser && window.Vue) {
  window.Vue.use($apis);
}

export default $apis;

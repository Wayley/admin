import Mock from 'mockjs';

// 指定被拦截的 Ajax 请求的响应时间，单位是毫秒。可正整数，也可区间
Mock.setup({
  // timeout: '800',
  timeout: '500-2000'
});

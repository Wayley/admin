const ENV = process.env.NODE_ENV;
const IS_DEVELOPMENT = ENV === 'development';
const ORIGIN = window.location.origin;
// TODO:
const BASE_URL = IS_DEVELOPMENT ? 'http://api.com:3000' : ORIGIN;

let config = {
  env: ENV,
  basicUrl: BASE_URL,
  docUrl: '/upload/index'
};
export default config;

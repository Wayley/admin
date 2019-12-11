import lodash from '../lib/methods';

// basic
const basic = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: resolve => require(['../views/Index.vue'], resolve)
  },

  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录'
    },
    components: {
      login: resolve => require(['../views/Basic/Login.vue'], resolve)
    }
  },
  {
    path: '/modify/passwd',
    name: 'modify.passwd',
    meta: {
      title: '修改密码'
    },
    component: resolve => require(['../views/Basic/Password.vue'], resolve)
  },
  {
    path: '/error',
    meta: {
      title: '访问异常'
    },
    component: resolve => require(['../views/Basic/Error.vue'], resolve)
  }
];
// 系统管理
const sys = [
  {
    path: '/sys',
    meta: {
      title: '系统管理'
    },
    component: resolve => require(['../views/Sys/Index.vue'], resolve)
  }
];
const routers = lodash.concat(basic, sys);
export default routers;

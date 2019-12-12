import lodash from '../lib/methods';

// BASIC
const BASIC = [
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
    name: 'error',

    meta: {
      title: '访问异常'
    },
    component: resolve => require(['../views/Basic/Error.vue'], resolve)
  }
];
// 系统管理
const SYS = [
  {
    path: '/sys',
    name: 'sys',
    meta: {
      title: '系统管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/sys/user',
    name: 'sys.user',
    meta: {
      title: '用户管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/sys/role',
    name: 'sys.role',
    meta: {
      title: '角色管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  }
];

const routers = lodash.concat(BASIC, SYS);
export default routers;

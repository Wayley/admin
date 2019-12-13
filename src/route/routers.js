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

// 运营管理
const OPERATION = [
  {
    path: '/operation',
    name: 'operation',
    redirect: '/operation/order', // 添加redirect
    meta: {
      title: '运营管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/order',
    name: 'operation.order',
    meta: {
      title: '订单管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/feedback',
    name: 'operation.feedback',
    meta: {
      title: '用户反馈管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/member',
    name: 'operation.member',
    meta: {
      title: '成员管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/member/driver',
    name: 'operation.member.driver',
    meta: {
      title: '司机管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/member/passenger',
    name: 'operation.member.passenger',
    meta: {
      title: '乘客管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/operation/member/investor',
    name: 'operation.member.investor',
    meta: {
      title: '投资方管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  }
];

// 统计管理
const STAT = [
  {
    path: '/stat',
    name: 'stat',
    redirect: '/stat/order',
    meta: {
      title: '统计管理'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  },
  {
    path: '/stat/order',
    name: 'stat.order',
    meta: {
      title: '订单统计'
    },
    component: resolve => require(['../views/Template/Index.vue'], resolve)
  }
];

// 系统管理
const SYS = [
  {
    path: '/sys',
    name: 'sys',
    redirect: '/sys/user',
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

// NOTFONUD
const NOTFONUD = [
  {
    path: '*',
    redirect: { name: 'home' }
  }
];
const routers = lodash.concat(BASIC, OPERATION, STAT, SYS, NOTFONUD);
export default routers;

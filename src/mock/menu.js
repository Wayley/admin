const menu = [
  {
    id: 1,
    name: '运营管理',
    path: '/operation',
    icon: 'ios-aperture',
    children: [
      {
        id: 11,
        name: '订单管理',
        path: '/operation/order',
        icon: 'ios-reorder'
      },
      {
        id: 12,
        name: '用户反馈管理',
        path: '/operation/feedback',
        icon: 'ios-feedback',
        children: []
      },
      {
        id: 13,
        name: '成员管理',
        path: '/operation/member',
        icon: 'ios-people',
        children: [
          {
            id: 131,
            name: '司机管理',
            path: '/operation/member/driver',
            icon: 'ios-car'
          },
          {
            id: 132,
            name: '乘客管理',
            path: '/operation/member/passenger',
            icon: 'ios-walk'
          },
          {
            id: 133,
            name: '投资方管理',
            path: '/operation/member/investor',
            icon: 'ios-briefcase'
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: '统计管理',
    path: '/stat',
    icon: 'md-analytics',
    children: [
      {
        id: 31,
        name: '订单统计',
        path: '/stat/order',
        icon: 'ios-analytics'
      }
    ]
  },
  /******************************************/
  {
    id: 3,
    name: '系统管理',
    path: '/sys',
    icon: 'ios-settings',
    children: [
      {
        id: 31,
        name: '管理员管理',
        path: '/sys/user',
        icon: 'md-people'
      },
      {
        id: 32,
        name: '角色管理',
        path: '/sys/role',
        icon: 'ios-body'
      }
    ]
  }
];

export default menu;

// 定义app/web/page目录下的路由

import Layout from '@/views/layout/Layout';


export default [
  {
    path: '/demo-documentation',
    component: Layout,
    redirect: 'index',
    name: 'demo页name',
    alwaysShow: true, // will always show the root menu
    meta: {
      title: 'demo页title',
      icon: 'bug'
    },
    children: [
      {
        path: 'index',
        component: () => import('@/views/documentation/index'),
        name: 'demo页children-name',
        meta: { title: '项目demo页' }
      },
    ],
  },
];

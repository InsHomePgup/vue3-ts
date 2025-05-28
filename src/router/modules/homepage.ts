export default [
  {
    path: '/',
    name: 'home',
    component: () => import('@/pages/home/index.vue'),
    meta: {
      title: '首页',
    },
  },
]

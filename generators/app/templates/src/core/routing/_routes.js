const
  indexComponent = () => import('components/index/index' /* webpackChunkName:"indexComponent" */),
  notFoundComponent = () => import('components/not-found/not-found' /* webpackChunkName:"notFoundComponent" */);

export const routes = [
  {
      path: '/',
      name: 'index',
      component: indexComponent,
  },
  {
      path: '*',
      name: 'notfound',
      component: notFoundComponent,
  },
];

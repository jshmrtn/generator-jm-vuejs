const
    indexComponent = () => import ('../../components/index/index.js' /* webpackChunkName:"indexComponent" */ ),
    notFoundComponent = () => import ('../../components/not-found/not-found.js' /* webpackChunkName:"notFoundComponent" */ );

export const routes = [{
    path: '/',
    name: 'index',
    component: indexComponent,
},
{
    path: '*',
    name: 'notfound',
    component: notFoundComponent,
}];

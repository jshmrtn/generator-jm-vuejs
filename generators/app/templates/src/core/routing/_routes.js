const
    indexComponent = () =>
    import ('components/index/index.vue' /* webpackChunkName:"indexComponent" */ ),
    notFoundComponent = () =>
    import ('components/not-found/not-found.vue' /* webpackChunkName:"notFoundComponent" */ );

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

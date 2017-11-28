const
      indexComponent = () =>
  import ('Components/index/index');

export const routes = [{
  path: '/',
  name: 'index',
  component: indexComponent,
}];

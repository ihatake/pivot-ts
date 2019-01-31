import Loadable from 'react-loadable';
export const App = Loadable({
  loader: () => import('../App'),
  loading: () => null
});
// 登录
export const Login = Loadable({
  loader: () => import('../pages/Login'),
  loading: () => null
});
// 主页
export const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => null
});
// 我的报表
export const Reports = Loadable({
  loader: () => import('../pages/Reports'),
  loading: () => null
});
// 我的收藏
export const Collection = Loadable({
    loader: () => import('../pages/Collection'),
    loading: () => null
});
// 我的常用
export const Frequence = Loadable({
    loader: () => import('../pages/Frequence'),
    loading: () => null
});
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
// Layout
export const Layout = Loadable({
  loader: () => import('../pages/Layout/Layout'),
  loading: () => null
});
// 主页
export const Home = Loadable({
  loader: () => import('../pages/Home'),
  loading: () => null
});
// 数据管理
export const DataMange = Loadable({
  loader: () => import('../pages/DataMange'),
  loading: () => null
});
// 我的个人报表
export const PersonalReports = Loadable({
  loader: () => import('../pages/PersonalReports'),
  loading: () => null
});
// 我的系统报表
export const SystemReport = Loadable({
  loader: () => import('../pages/SystemReports'),
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

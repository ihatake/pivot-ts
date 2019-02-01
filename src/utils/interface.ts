import { RouteComponentProps } from 'react-router-dom';
interface RouterInfo {
  id: any;
}
// 路由
export interface IRoutePrps extends RouteComponentProps<RouterInfo> {}

// 事件
export interface Event {
  [propName: string]: any;
  preventDefault: () => void;
}

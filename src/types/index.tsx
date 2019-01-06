import { match } from "react-router-dom";

// axios 响应自定义内容类型
export interface IResponseData {
  code: number;
  message: string;
  result: any;
}

// 路由项
export interface IRoutes {
  title: string;
  icon?: string;
  path: string;
  exact?: boolean;
  strict?: boolean;
  component?: any;
  routes?: IRoutes[];
}

// 全部路由映射
export interface IBreadcrumbMap {
  [propName: string]: IRoutes;
}

// react-router match类型
export interface IMatch extends match<{}> {}

// redux store state
export interface IStoreState {
  isLogin: boolean;
  firstLink: string;
  userInfo: any;
  routes: IRoutes[];
  extractAllRoutes: IRoutes[];
  extractFilterRoutes: IRoutes[];
  breadcrumbMap: IBreadcrumbMap;
  collapsed: boolean;
  selectedKeys: string[];
  openKeys: string[];
}

// redux action
export interface IReduxAction {
  payload: any;
  type: string;
}

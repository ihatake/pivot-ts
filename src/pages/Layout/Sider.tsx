import * as React from 'react';
import { Layout, Menu, Icon } from 'antd';
import { withRouter } from 'react-router-dom';
import { IRoutePrps } from '../../utils/interface';
const { SubMenu } = Menu;
const { Sider } = Layout;

interface P extends IRoutePrps {
  collapsed: boolean;
}
interface S {
  menuList: any[];
  active: string;
  openKey: string;
}
class MSider extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      menuList: [
        {
          name: '我的报表',
          icon: 'user',
          key: '1',
          sublist: [
            {
              name: '个人报表',
              key: '1-1',
              path: '/personalReports'
            },
            {
              name: '系统报表',
              key: '1-2',
              path: '/systemReport'
            }
          ]
        },
        { name: '我的收藏', icon: 'star', path: '/collection', key: '2' },
        { name: '我的常用', icon: 'hourglass', path: '/frequence', key: '3' }
      ],
      active: '-1',
      openKey: '-1'
    };
  }
  public render() {
    const menuRender = (menu: any) => {
      let icon = null;
      if (menu.icon) {
        icon = <Icon type={menu.icon} />;
      }
      if (Array.isArray(menu.sublist)) {
        return (
          <SubMenu
            key={menu.key}
            title={
              <span>
                {icon}
                <span>{menu.name}</span>
              </span>
            }
          >
            {menu.sublist.map((item: any) => menuRender(item))}
          </SubMenu>
        );
      }
      return (
        <Menu.Item key={menu.key}>
          {icon}
          <span>{menu.name}</span>
        </Menu.Item>
      );
    };

    return (
      <Sider
        width={200}
        style={{ background: '#fff' }}
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
      >
        <Menu
          mode="inline"
          selectedKeys={[this.state.active]}
          defaultOpenKeys={[this.state.openKey]}
          onSelect={params => {
            this.menuSelect(params);
          }}
          style={{ height: '100%', borderRight: 0 }}
        >
          {this.state.menuList.map(item => menuRender(item))}
        </Menu>
      </Sider>
    );
  }
  componentWillMount() {
    this.matchPath();
  }
  componentWillReceiveProps(nextProps: P) {
    this.matchPath(nextProps);
  }
  menuSelect(params: any): void {
    this.props.history.push(
      this.tilingMenus().find(item => item.key === params.key).path
    );
  }
  tilingMenus(): any[] {
    const tilingMenu = (menu: any): any[] => {
      if (Array.isArray(menu.sublist)) {
        const result = [];
        for (const item of menu.sublist) {
          result.push(...tilingMenu(item));
        }
        return result;
      }
      return [menu];
    };
    const tilingArr = [];
    for (const item of this.state.menuList) {
      tilingArr.push(...tilingMenu(item));
    }
    return JSON.parse(JSON.stringify(tilingArr));
  }
  matchPath(props: P = this.props): void {
    let result = '';
    let openKey = '';
    const menuItem = this.tilingMenus().find(
      item => item.path === props.location.pathname
    );
    if (!menuItem) {
      result = '-1';
      openKey = '-1';
    } else {
      result = menuItem.key;
      openKey = result;
      if (result.indexOf('-') !== -1) {
        openKey = result.slice(0, result.indexOf('-'));
      }
    }
    this.setState({
      active: result,
      openKey
    });
  }
}

export default withRouter(MSider);

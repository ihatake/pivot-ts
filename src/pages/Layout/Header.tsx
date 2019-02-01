import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { IRoutePrps } from '../../utils/interface';
import { Layout, Menu, Icon } from 'antd';
import * as Style from './Style';

const { Header } = Layout;
interface P extends IRoutePrps {
  toggle: () => void;
}
interface S {
  menuList: any[];
  active: string;
}
class MHeader extends React.Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      menuList: [
        { name: '主页', icon: 'home', path: '/home' },
        { name: '数据管理', icon: 'calendar', path: '/dataMange' }
      ],
      active: '0'
    };
  }
  public render() {
    return (
      <Style.Header>
        <Header className="header">
          <div className="logo">
            动态报表
            <Icon
              type="bars"
              className="barsIcon"
              onClick={() => {
                this.toggleSider();
              }}
            />
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[this.state.active]}
            style={{ lineHeight: '64px' }}
            onSelect={params => {
              this.menuSelect(params);
            }}
          >
            {this.state.menuList.map((item: any, i: number) => (
              <Menu.Item key={i}>
                <Icon type={item.icon} />
                {item.name}
              </Menu.Item>
            ))}
          </Menu>
        </Header>
      </Style.Header>
    );
  }
  componentWillMount() {
    this.setState({
      active: this.matchPath()
    });
  }
  componentWillReceiveProps() {
    this.setState({
      active: this.matchPath()
    });
  }
  toggleSider(): void {
    this.props.toggle();
  }
  menuSelect(params: any): void {
    const index: number = +params.key;
    this.props.history.push(this.state.menuList[index].path);
  }
  matchPath(): string {
    let active = '';
    const index = this.state.menuList.findIndex(
      item => item.path === this.props.location.pathname
    );
    if (index !== -1) {
      active = `${index}`;
    }
    return active;
  }
}

export default withRouter(MHeader);

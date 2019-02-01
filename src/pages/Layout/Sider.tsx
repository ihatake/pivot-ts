import * as React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { SubMenu } = Menu;
const { Sider } = Layout;

interface P {
  collapsed: boolean;
}
class MSider extends React.Component<P, {}> {
  constructor(props: P) {
    super(props);
  }
  public render() {
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
          defaultSelectedKeys={['1']}
          defaultOpenKeys={[]}
          style={{ height: '100%', borderRight: 0 }}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>我的报表</span>
              </span>
            }
          >
            <Menu.Item key="1">个人报表</Menu.Item>
            <Menu.Item key="2">系统报表</Menu.Item>
          </SubMenu>
          <Menu.Item key="3">
            <Icon type="star" />
            <span>
              <Link to="/collection">我的收藏</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="hourglass" />
            <span>
              <Link to="/frequence">我的常用</Link>
            </span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default MSider;

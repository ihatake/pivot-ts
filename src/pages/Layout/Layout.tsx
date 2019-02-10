import * as React from 'react';
import { withRouter } from 'react-router-dom';
import { IRoutePrps } from '../../utils/interface';
import MHeader from './Header';
import MSider from './Sider';
import MContent from './Content';
import { Layout } from 'antd';

interface P extends IRoutePrps {}
interface S {
  collapsed: boolean;
}
class MLayout extends React.Component<P, S> {
  constructor(props: any) {
    super(props);
    this.state = {
      collapsed: this.props.location.pathname.includes('/reports/') || false
    };
  }
  toggle() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  goPath(): void {
    this.props.history.push('/reports');
  }
  goBack(): void {
    this.props.history.goBack();
  }
  public render() {
    return (
      <Layout style={{ height: '100%' }}>
        <MHeader
          toggle={() => {
            this.toggle();
          }}
        />
        <Layout>
          {/* {!this.props.location.pathname.includes('/reports/') && (
            <MSider collapsed={this.state.collapsed} />
          )} */}
          <MSider collapsed={this.state.collapsed} />
          <MContent children={this.props.children} />
        </Layout>
      </Layout>
    );
  }
}
export default withRouter(MLayout);

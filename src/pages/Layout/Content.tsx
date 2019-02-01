import * as React from 'react';
import { Layout } from 'antd';
const { Content } = Layout;

class MContent extends React.Component {
  public render() {
    return (
      <Layout style={{ padding: '5px' }}>
        <Content>{this.props.children}</Content>
      </Layout>
    );
  }
}

export default MContent;

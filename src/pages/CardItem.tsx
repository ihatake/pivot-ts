import React, { Component } from 'react';
import { Card } from 'antd';
import { IRoutePrps } from '../utils/interface';

interface P extends IRoutePrps {
  title: string;
  content: string;
}

class CardItem extends Component<P, {}> {
  constructor(props: any) {
    super(props);
  }
  render() {
    console.log('=====prips', this.props);
    return (
      <div>
        <Card title={this.props.title} style={{ width: 300 }}>
          <p>{this.props.content}</p>
        </Card>
      </div>
    );
  }
}

export default CardItem;

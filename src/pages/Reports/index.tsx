import * as React from 'react';
// import { withRouter } from 'react-router-dom';
import { IRoutePrps } from '../../utils/interface';
interface P extends IRoutePrps {}
interface S {
  collapsed: boolean;
}
class PersonalReports extends React.Component<P, S> {
  public render() {
    return <div className="PersonalReports">报表详情</div>;
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default PersonalReports;

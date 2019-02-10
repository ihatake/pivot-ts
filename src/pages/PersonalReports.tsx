import * as React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

class PersonalReports extends React.Component {
  public render() {
    return (
      <div className="PersonalReports">
        PersonalReports
        <Button type="primary">
          <Link to={{ pathname: '/reports/create' }} target="_blank">
            新建报表
          </Link>
        </Button>
      </div>
    );
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
}

export default PersonalReports;

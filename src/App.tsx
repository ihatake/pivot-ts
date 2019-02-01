import * as React from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { ITodoList } from './stores/todolistStore';
import { IRoutePrps } from './utils/interface';
import './styles/App.less';

interface S {
  [propName: string]: any;
}

interface P extends IRoutePrps {
  todoListStore?: ITodoList;
}

@inject('todoListStore')
@observer
class App extends React.Component<P, S> {
  public render() {
    return (
      <div className="App" style={{ height: '100%' }}>
        {this.props.children}
      </div>
    );
  }
}

export default hot(module)(withRouter(App));

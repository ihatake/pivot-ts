import * as React from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer } from 'mobx-react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import Loadable from 'react-loadable';
import { ITodoList } from './stores/todolistStore';
import './styles/App.less';

interface P {
  todoListStore?: ITodoList;
}
interface S {
  [propName: string]: any;
}

@inject('todoListStore')
@observer
class App extends React.Component<P, S> {
  public render() {
    return <div>{this.props.children}</div>;
  }
}

export default hot(module)(App);

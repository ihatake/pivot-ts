import * as React from 'react';
import { hot } from 'react-hot-loader';
import { inject, observer } from 'mobx-react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import { ITodoList } from './stores/todolistStore';
import './styles/App.less';

const Page1 = Loadable({
  loader: () => import('./pages/Page1'),
  loading: () => null
});
const Page2 = Loadable({
  loader: () => import('./pages/Page2'),
  loading: () => null
});
const Page3 = Loadable({
  loader: () => import('./pages/Page3'),
  loading: () => null
});

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
    return (
      <Router>
        <div>
          {this.props.todoListStore!.todos.map((item, i) => (
            <div key={i}>{i}</div>
          ))}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" exact component={Page1} />
          <Route path="/about/" component={Page2} />
          <Route path="/users/" component={Page3} />
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);

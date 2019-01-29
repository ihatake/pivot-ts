import * as React from 'react';
import { hot } from 'react-hot-loader';
// import { observer } from 'mobx-react';
// import {observable} from 'mobx';
// import { Spin } from 'antd';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loadable from 'react-loadable';
import './styles/App.less';

// import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
const Page1 = Loadable({
  loader: () => import('./pages/Page1'),
  loading: () => null,
});
// const Page2 = ():any => import('./pages/Page2');
// const Page3 = ():any => import('./pages/Page3');

class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
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

import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { App, Login, Home, Reports, Collection, Frequence } from './components';

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/login" component={Login} />
            <Route name="Home" path="/home" component={Home} />
            <Route name="Reports" path="/reports" component={Reports} />
            <Route
              name="Collection"
              path="/collection"
              component={Collection}
            />
            <Route name="Frequence" path="/frequence" component={Frequence} />
          </Switch>
        </App>
      </Router>
    );
  }
}

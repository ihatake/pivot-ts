import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import {
  App,
  Login,
  Layout,
  Home,
  DataMange,
  PersonalReports,
  SystemReport,
  Collection,
  Frequence,
  Reports,
} from './components';

export default class BasicRoute extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/login" />} />
            <Route path="/login" component={Login} />
            <Layout>
              <Switch>
                <Route name="Home" path="/home" component={Home} />
                <Route
                  name="DataMange"
                  path="/dataMange"
                  component={DataMange}
                />
                <Route name="PersonalReports" path="/personalReports" component={PersonalReports} />
                <Route name="SystemReport" path="/systemReport" component={SystemReport} />
                <Route name="Reports" path="/reports/:do" component={Reports} />
                <Route
                  name="Collection"
                  path="/collection"
                  component={Collection}
                />
                <Route
                  name="Frequence"
                  path="/frequence"
                  component={Frequence}
                />
              </Switch>
            </Layout>
          </Switch>
        </App>
      </Router>
    );
  }
}

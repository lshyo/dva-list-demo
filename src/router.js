import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Users from './routes/Users'
import App from './layout/wrapApp';
function RouterConfig({ history }) {
  return (
    <App>
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={IndexPage} />
          <Route path="/Users" component={Users} />
        </Switch>
      </Router>
    </App>
  );
}

export default RouterConfig;

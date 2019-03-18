import React from 'react';
import { Fragment } from 'react'
import {Route, Switch} from 'react-router-dom';
import Home from './Home'
import App from './App'
import NoMatch from './NoMatch';
import {Container} from 'semantic-ui-react'

const Routes = () => (
  <Fragment>
    <Container>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/App" component={App} />
      <Route component={NoMatch} />
    </Switch>
    </Container>
  </Fragment>
)

export default Routes;
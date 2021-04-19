import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import { Route, Switch, withRouter } from 'react-router-dom';

import './App.scss';

import Register from './routes/register/Register';
import NotFound from './routes/notFound/NotFound';

function App(props) {
  const { location } = props;

  return (
    <Fragment>
      <Helmet defaultTitle='Welcome'/>
      <div className="App">
        <Switch location={location}>
          <Route exact path='/' component={Register} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default withRouter(App);

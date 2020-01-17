import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

// Helpers
import { APP_TOKEN } from './api/Constants';
// Utils
import PageLoader from './modules/common/PageLoader';

// Routes
const HomePage = lazy(() => import('./modules/public/home/HomePage'));
const NewsDetailPage = lazy(() => import('./modules/public/home/NewsDetailPage'));
const NoMatchPage = lazy(() => import('./modules/not-found/NoMatchPage'));

const Routes = props => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <HomePage {...props} />;
          }}
        />
        <Route
          exact
          path="/home"
          render={() => {
            return <HomePage {...props} />;
          }}
        />
        <Route
          exact
          path="/detail"
          render={() => {
            return <NewsDetailPage {...props} />;
          }}
        />
        <Route component={NoMatchPage} />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;

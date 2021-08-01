import React from 'react';
import Main from '../main/main';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import {AppRoute, RESULT} from '../../const';
import Room from '../room/room';
import Favorites from '../favorites/favorites';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import LoadingScreen from '../loading-screen/loading-screen';
import PrivateRoute from '../private-route/private-route';
import {getDataLoaded } from '../../store/offers-process/selector';
import {getStatusRequest} from '../../store/request/selector';

function App(props) {
  if(!props.isOffersLoaded && props.statusLoad !== RESULT.ERROR) {
    return (
      <LoadingScreen />
    );
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.FAVORITES}
          render={() => <Favorites />}
        />
        <Route exact path={AppRoute.ROOM} component={Room}>
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>);
}

App.propTypes = {
  isOffersLoaded: PropTypes.bool.isRequired,
  statusLoad: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  isOffersLoaded: getDataLoaded(state),
  statusLoad: getStatusRequest(state),
});

export default connect(mapStateToProps, null)(App);

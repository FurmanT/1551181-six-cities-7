import React from 'react';
import Main from '../main/main';
import PropTypes from 'prop-types';
import { hotelPropTypes } from '../../prop-types';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute} from '../../const';
import Room from '../room/room';
import Favorites from '../favorites/favorites';
import SignIn from '../sign-in/sign-in';
import NotFoundPage from '../not-found-page/not-found-page';

function App(props) {
  const { hotels } = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <Main hotels={hotels}/>
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <SignIn />
        </Route>
        <Route exact path={AppRoute.FAVORITES}>
          <Favorites />
        </Route>
        <Route exact path={AppRoute.ROOM}>
          <Room />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>);
}

App.propTypes = {
  hotels: PropTypes.arrayOf(
    hotelPropTypes).isRequired,
};
export default App;

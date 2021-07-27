import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from './store/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createAPI } from './services/api';
import { fetchOffersList, checkAuth } from './store/api-actions';
import { AuthorizationStatus } from './const';
import { ActionCreator } from './store/action';

const api = createAPI(() => store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH)));

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);
store.dispatch(checkAuth());
store.dispatch(fetchOffersList());


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));

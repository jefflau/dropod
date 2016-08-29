// @flow
import { combineReducers } from 'redux';
import serverError from '../reducers/serverError';
import config from '../reducers/config';
import search from '../reducers/search';
import podcasts from '../reducers/podcasts';
import { routeParamsReducer } from 'react-router-redux-params';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  serverError,
  config,
  podcasts,
  search,
  routing: routeParamsReducer,
  form: formReducer
})

export default rootReducer;

'use strict';

import { combineReducers } from 'redux';

import SampleReducer from './sample_reducers';

const rootReducer = combineReducers({
  shows: SampleReducer,
});

export default rootReducer;

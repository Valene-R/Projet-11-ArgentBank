import { combineReducers } from 'redux';

import tokenSlice from '../reducers/token'; 
import userSlice from "../reducers/user";

const rootReducer = combineReducers({
  token: tokenSlice,
  user: userSlice,
});

export default rootReducer;
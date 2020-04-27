import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import educationReducer from './education/education-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['education']
};

const rootReducer = combineReducers({
  user: userReducer,
  education:educationReducer
});

export default persistReducer(persistConfig, rootReducer);
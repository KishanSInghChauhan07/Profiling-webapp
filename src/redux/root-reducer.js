import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user-reducer';
import educationReducer from './education/education-reducer';
import experienceReducer from './experience/experience-reducer';
import skillsReducer from './skills/skills-reducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['education','skills','experience']
};

const rootReducer = combineReducers({
  user: userReducer,
  education:educationReducer,
  experience:experienceReducer,
  skills:skillsReducer

});

export default persistReducer(persistConfig, rootReducer);
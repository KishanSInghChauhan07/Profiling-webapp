import { experienceActionTypes } from './experience-types';
import {  addExperienceID} from './experience-utils'

const INITIAL_STATE = {
  currentExperience: []
};

const experienceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case experienceActionTypes.ADD_EXPERIENCE:
      return{
        ...state,
        currentExperience: addExperienceID(state.currentExperience , action.payload)
      };
    default:
      return state;
  }
};

export default experienceReducer;
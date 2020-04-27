import { skillsActionTypes } from './skills-types';
import {  addSkillsID } from './skills-utils'

const INITIAL_STATE = {
  currentSkills: []
};

const skillsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case skillsActionTypes.ADD_SKILLS:
      return{
        ...state,
        currentSkills: addSkillsID(state.currentSkills , action.payload)
      };
    default:
      return state;
  }
};

export default skillsReducer;
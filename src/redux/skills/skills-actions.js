import { skillsActionTypes } from './skills-types';

export const addSkills = (name,rating) => ({
  type: skillsActionTypes.ADD_SKILLS,
  payload: {
    name:name,
    rating:rating
  }
});
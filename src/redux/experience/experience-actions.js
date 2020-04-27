import { experienceActionTypes } from './experience-types';

export const addExperience = (company,role,description,duration) => ({
  type: experienceActionTypes.ADD_EXPERIENCE,
  payload: {
    company:company,
    role:role,
    description:description,
    duration:duration
  }
});
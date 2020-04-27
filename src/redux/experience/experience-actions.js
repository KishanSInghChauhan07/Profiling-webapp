import { experienceActionTypes } from './experience-types';

export const addExperience = (company,duration,description,role) => ({
  type: experienceActionTypes.ADD_EXPERIENCE,
  payload: {
    company:company,
    duration:duration,
    description:description,
    role:role
  }
});
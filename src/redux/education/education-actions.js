import { educationActionTypes } from './education-types';

export const setCurrentEducation = (name,grade,year,specialization) => ({
  type: educationActionTypes.ADD_EDUCATION,
  payload: {
      grade:grade,
      name:name,
      year:year,
      specialization:specialization
  }
});
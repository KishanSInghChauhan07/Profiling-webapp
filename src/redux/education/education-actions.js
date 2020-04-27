import { educationActionTypes } from './education-types';

export const addEducation = (name,grade,specialization,year) => ({
  type: educationActionTypes.ADD_EDUCATION,
  payload: {
    name:name,
    grade:grade,
    specialization:specialization,
    year:year
  }
});
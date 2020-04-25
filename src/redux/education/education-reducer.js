import { educationActionTypes } from './education-types';

const INITIAL_STATE = {
  currentEducation: null
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case educationActionTypes.ADD_EDUCATION:
      return {
        ...state,
        currentEducation: action.payload
      };
    default:
      return state;
  }
};

export default educationReducer;
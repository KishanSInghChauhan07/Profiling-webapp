import { educationActionTypes } from './education-types';

const INITIAL_STATE = {
  currentEducation: []
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case educationActionTypes.ADD_EDUCATION:
          var education = action.payload
          education.id = state.length;
          return{
            ...state,
            currentEducation:[ ...state.currentEducation , education]
      };
    default:
      return state;
  }
};

export default educationReducer;
import { educationActionTypes } from './education-types';
import { addEducationId, addEducationID} from './education-utils'

const INITIAL_STATE = {
  currentEducation: []
};

const educationReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case educationActionTypes.ADD_EDUCATION:
      return{
        ...state,
        currentEducation: addEducationID(state.currentEducation , action.payload)
      };
    default:
      return state;
  }
};

export default educationReducer;
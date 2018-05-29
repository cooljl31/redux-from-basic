import {ADD_MESSAGE, GET_MESSAGES} from '../actions/types';

const InitialState = {};
export default (state = InitialState, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {...state,success:action.payload};
    case GET_MESSAGES:
      return {...state,messages:action.payload};
    default:
      return state;
  }
};

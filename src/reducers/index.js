import {combineReducers} from 'redux';
import messages from './message_reducer';
import {reducer as formReducer} from 'redux-form';

const rootReducer = combineReducers({
  messages,
  form: formReducer
});

export default rootReducer;

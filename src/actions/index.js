import {GET_MESSAGES, ADD_MESSAGE} from './types';
import Axios from 'axios';
const URL = 'http://localhost:3001';

export const getMessages = () => {
  const request = Axios.get(`${URL}/messages`)
  .then(response => response.data);

  return {
    type: GET_MESSAGES,
    payload: request
  };
};


export const addMessage = (data,cb) => {
  Axios.post(`${URL}/messages`,data).then(()=>cb());

  return {
    type: ADD_MESSAGE,
    payload: 'Ok'
  };
};

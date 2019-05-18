import { createStore, applyMiddleware } from 'redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';
import rootReducer from './reducers/RootReducer';

const getApiBaseUrl = () => {
  if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")
    return 'http://127.0.0.1:8000/api/v1';
  else
    return '/api/v1';
};

const client = axios.create({
  baseURL: getApiBaseUrl(),
  responseType: 'json',
});

export default function configureStore(initialState={}) {
  return createStore(
    rootReducer,
    applyMiddleware(axiosMiddleware(client))
  );
}
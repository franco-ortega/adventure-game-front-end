import { get, post } from './request';

export const postSignup = (username, email, password) => {
  return post('/api/v1/auth/signup', { username, email, password });
};

export const postLogin = (username, password) => {
  return post('/api/v1/auth/login', { username, password });
};

export const getVerify = () => {
  return get('/api/v1/auth/verify');
};

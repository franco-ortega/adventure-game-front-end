import { get, post } from './request';

export const postCharacter = (character) => {
  return post('/api/v1/characters', character);
};

export const getCharacters = () => {
  return get('/api/v1/characters');
};

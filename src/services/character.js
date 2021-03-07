import { post } from './request';

export const postCharacter = (character) => {
  return post('/api/v1/characters', character);
};

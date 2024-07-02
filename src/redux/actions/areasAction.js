import { GET_AREAS } from '../reducers/areasReducer';

export const getAreas = data => {
  return {
    type: GET_AREAS,
    payload: data,
  };
};

import { GET_PRODUCTS } from '../reducers/productsReducer';

export const getProducts = data => {
  return {
    type: GET_PRODUCTS,
    payload: data,
  };
};

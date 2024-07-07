import { GET_PORTFOLIO } from '../reducers/portfolioReducer';

export const getPortfolio = data => {
  return {
    type: GET_PORTFOLIO,
    payload: data,
  };
};

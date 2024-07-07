export const GET_PORTFOLIO = 'GET_PORTFOLIO';

const initialState = {
  portfolio: [],
};

export const portfolioReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PORTFOLIO:
      return { ...state, portfolio: action.payload };
    default:
      return state;
  }
};

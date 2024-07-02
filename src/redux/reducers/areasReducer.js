export const GET_AREAS = 'GET_AREAS';

const initialState = {
  areas: [],
};

export const areasReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_AREAS:
      return { ...state, areas: action.payload };
    default:
      return state;
  }
};

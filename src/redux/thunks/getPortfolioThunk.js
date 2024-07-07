import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getPortfolio } from '../actions/portfolioAction';

export const getPortfolioThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const portfolio = await fetchData('portfolio').then(response => response);
  dispatch(getPortfolio(portfolio));
  dispatch(setLoading(false));
};

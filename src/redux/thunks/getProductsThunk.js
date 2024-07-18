import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getProducts } from '../actions/productsAction';

export const getProductsThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const products = await fetchData('products').then(response => response);
  dispatch(getProducts(products));
  dispatch(setLoading(false));
};

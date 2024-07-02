import { setLoading } from '../actions/loadingAction';
import { fetchData } from '../../utils/api';
import { getAreas } from '../actions/areasAction';

export const getAreasThunk = () => async dispatch => {
  dispatch(setLoading(true));
  const allArea = await fetchData('servingAreas').then(response => response);
  dispatch(getAreas(allArea));
  dispatch(setLoading(false));
};

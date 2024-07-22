import React, { useEffect } from 'react';
import './areasSlider.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getAreasThunk } from '../../redux/thunks/getAreasThunk';
import Loader from '../loader';

const AreasSlider = () => {
  const loading = useSelector(state => state.loading.isLoading);
  const areas = useSelector(state => state.areas.areas);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAreasThunk());
  }, [dispatch]);

  return (
    <ul className="areaSlider">
      {!loading && !!areas.length ? (
        areas.map(area => {
          return (
            <li className="card-wrapper" key={area.id}>
              {area.area}
            </li>
          );
        })
      ) : (
        <Loader />
      )}
    </ul>
  );
};

export default AreasSlider;

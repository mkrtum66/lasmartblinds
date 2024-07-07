import React, { useEffect } from 'react';
import './areasSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
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
    <Swiper
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      spaceBetween={30}
      freeMode={true}
      modules={[FreeMode, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      loop={true}
      className="areaSlider"
    >
      {!loading && !!areas.length ? (
        areas.map(area => {
          return (
            <SwiperSlide key={area.id}>
              <div className="card-wrapper">
                <div className="content">
                  <h2>{area.area}</h2>
                  <h2>{area.area}</h2>
                </div>
              </div>
            </SwiperSlide>
          );
        })
      ) : (
        <Loader />
      )}
    </Swiper>
  );
};

export default AreasSlider;

import React, { useEffect } from 'react';
import './areasSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Autoplay } from 'swiper/modules';
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
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      modules={[EffectCoverflow, Autoplay]}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      // loop={true}
      rewind={true}
      className="areaSlider"
    >
      {!loading && !!areas.length ? (
        areas.map(area => {
          return (
            <SwiperSlide key={area.id}>
              <img src="https://swiperjs.com/demos/images/nature-1.jpg" alt={area.area} />
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

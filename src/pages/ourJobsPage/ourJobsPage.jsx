import React, { useEffect, useState } from 'react';

import './ourJobsPage.scss';

import { Container } from 'react-bootstrap';

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import SliderModal from '../../components/sliderModal';
import Title from '../../components/title';
import { useDispatch, useSelector } from 'react-redux';
import Loader from '../../components/loader';
import { getPortfolioThunk } from '../../redux/thunks/getPortfolioThunk';

const OurJobsPage = () => {
  const [clickedItem, setClickedItem] = useState('');
  const [modalShow, setModalShow] = React.useState(false);
  const [modalItems, setModalItems] = useState([]);

  const isLoading = useSelector(state => state.loading.isLoading);
  const portfolio = useSelector(state => state.portfolio.portfolio);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPortfolioThunk());
  }, [dispatch]);

  useEffect(() => {
    setModalItems(portfolio);
  }, [portfolio]);

  const handleShowSliderModal = index => {
    setClickedItem(index);
    setModalShow(true);
  };

  return (
    <div className="portfolioPage page-wrapper">
      <Container>
        <Title>Portfolio</Title>
        {!isLoading ? (
          <ResponsiveMasonry columnsCountBreakPoints={{ 300: 2, 767: 3, 991: 4 }}>
            <Masonry gutter="15px">
              {portfolio.map(item => {
                return (
                  <div key={item.id} className="masonry-img-wrapper">
                    <img
                      src={item.imgUrl}
                      alt="img"
                      className="img-fluid"
                      onClick={() => handleShowSliderModal(item.id)}
                    />
                  </div>
                );
              })}
            </Masonry>
          </ResponsiveMasonry>
        ) : (
          <Loader />
        )}
        <SliderModal
          activeitem={modalItems.findIndex(item => item.id === clickedItem)}
          items={modalItems}
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Container>
    </div>
  );
};

export default OurJobsPage;

import React, { useEffect, useState } from 'react';
import './productPage.scss';

import { Container } from 'react-bootstrap';
import Loader from '../../components/loader';
import Title from '../../components/title';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { useDispatch, useSelector } from 'react-redux';
import { getPortfolioThunk } from '../../redux/thunks/getPortfolioThunk';
import { getProductsThunk } from '../../redux/thunks/getProductsThunk';
import ProductTab from '../../components/productTab';

import { useLocation, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const isLoading = useSelector(state => state.loading.isLoading);
  const portfolio = useSelector(state => state.portfolio.portfolio);
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  const location = useLocation();
  const navigate = useNavigate();
  const [activeKey, setActiveKey] = useState('1');

  useEffect(() => {
    dispatch(getPortfolioThunk());
    dispatch(getProductsThunk());
  }, [dispatch]);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setActiveKey(hash);
    }
  }, [location.hash]);

  const handleSelect = key => {
    setActiveKey(key);
    navigate(`#${key}`);
  };

  console.log('portfolio = ', portfolio);

  return (
    <div className="residentialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <Title>Products</Title>
          {!isLoading && !!products.length ? (
            <Tab.Container
              id="left-tabs-example"
              defaultActiveKey={products[0]?.id}
              activeKey={activeKey}
              onSelect={handleSelect}
            >
              <Row>
                <Col sm={4} md={3} xl={2} className="mb-2 mb-md-0">
                  <Nav variant="pills" className="flex-column">
                    {products?.map(product => {
                      return (
                        <Nav.Item key={product.id}>
                          <Nav.Link eventKey={product.id}>{product.title}</Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                </Col>
                <Col sm={8} md={9} xl={10}>
                  <Tab.Content>
                    {products.map(product => {
                      return (
                        <Tab.Pane key={product.id} eventKey={product.id}>
                          <ProductTab info={product.info} />
                        </Tab.Pane>
                      );
                    })}
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          ) : (
            <Loader />
          )}
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductPage;

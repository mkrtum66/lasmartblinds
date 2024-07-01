import React, { useEffect } from 'react';
import './productPage.scss';

import { Container } from 'react-bootstrap';
import Loader from '../../components/loader';
import Title from '../../components/title';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

import { useDispatch, useSelector } from 'react-redux';
import { getResidentialThunk } from '../../redux/thunks/getResidentialThunk';

const ProductPage = () => {
  const isLoading = useSelector(state => state.loading.isLoading);
  const resident = useSelector(state => state.residential.residential);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getResidentialThunk());
  }, [dispatch]);

  console.log(resident);

  return (
    <div className="residentialPage page-wrapper">
      {!isLoading ? (
        <Container>
          <Title>Products</Title>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row>
              <Col sm={4} md={3} xl={2}>
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link eventKey="first">Exterior Blinds</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Roller Shades</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="tirth">Shangri-La</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="fourth">Zebra</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={8} md={9} xl={10}>
                <Tab.Content>
                  <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">Third tab content</Tab.Pane>
                  <Tab.Pane eventKey="second">Fourth tab content</Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default ProductPage;

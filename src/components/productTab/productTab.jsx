import React from 'react';
import './productTab.scss';
import { Container } from 'react-bootstrap';
import ShareButtons from '../shareButtons';

const ProductTab = ({ info }) => {
  return (
    <div className="productTab">
      <Container>
        <div className="row mb-2">
          <div className="col-md-6">
            <img src={info.imgUrl} alt="img" className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h1 className="title-wrapper">{info.title}</h1>
            <div className="description-wrapper">
              <p>{info.description}</p>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <p className="mb-0 me-2 share-with">Share with </p>
          <ShareButtons />
        </div>
      </Container>
    </div>
  );
};

export default ProductTab;

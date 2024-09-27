import React from 'react';

const MenuCard = ({ title, price, imgSrc }) => {
  return (
    <div className="col-md-3">
      <div className="card">
        <img src={imgSrc} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{price} </p>
          <a href="#" className="form-control btn btn-dark">BUY</a>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

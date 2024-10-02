import React from 'react';
import { Card, Button } from 'react-bootstrap';

const MenuCard = ({ title, price, imgSrc, onAddToCart }) => {
  return (
    <div className="col-md-3">
      <Card>
        <Card.Img variant="top" src={imgSrc} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Button variant="dark" onClick={onAddToCart}>BUY</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuCard;

import React from 'react';
import { Container, Row } from 'react-bootstrap';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Our Menu</h2>
      <Row>
        <MenuCard title="Pizza Category 1" price="100.000đ" imgSrc="./Images/menu1.jpg" />
        <MenuCard title="Pizza Category 2" price="100.000đ" imgSrc="./Images/menu2.jpg" />
        <MenuCard title="Pizza Category 3" price="100.000đ" imgSrc="./Images/menu3.jpg" />
        <MenuCard title="Pizza Category 4" price="100.000đ" imgSrc="./Images/menu4.jpg" />
      </Row>
    </Container>
  );
};

export default Menu;

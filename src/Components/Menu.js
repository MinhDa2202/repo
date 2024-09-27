import React from 'react';
import MenuCard from './MenuCard';

const Menu = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h2>Our Menu</h2>
        <MenuCard title="Pizza Category 1" price="100.000đ" imgSrc="./Images/menu1.jpg" />
        <MenuCard title="Pizza Category 2" price="100.000đ" imgSrc="./Images/menu2.jpg" />
        <MenuCard title="Pizza Category 3" price="100.000đ" imgSrc="./Images/menu3.jpg" />
        <MenuCard title="Pizza Category 4" price="100.000đ" imgSrc="./Images/menu4.jpg" />
      </div>
    </div>
  );
};

export default Menu;

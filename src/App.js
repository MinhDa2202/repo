import React, { useState } from 'react';
import { Container, Modal, Button, Badge } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import NavigationBar from './Components/Navbar';
import Carousel from './Components/Carousel';
import MenuCard from './Components/MenuCard'; // Đảm bảo import component MenuCard
import BookingForm from './Components/BookingForm';

const App = () => {
  const [cart, setCart] = useState([]); // State để lưu trữ sản phẩm trong giỏ
  const [showCart, setShowCart] = useState(false); // State để điều khiển modal giỏ hàng

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateItemQuantity = (id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.id === id ? { ...cartItem, quantity } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0) // Xóa sản phẩm nếu số lượng bằng 0
    );
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
      <NavigationBar totalItemsInCart={totalItemsInCart} handleShowCart={handleShowCart} />
      <Carousel />

      {/* Card Menu */}
      <div className="row mt-3">
        {[
          { id: 1, title: 'Pizza Category 1', price: '100.000đ', imgSrc: './Images/menu1.jpg' },
          { id: 2, title: 'Pizza Category 2', price: '100.000đ', imgSrc: './Images/menu2.jpg' },
          { id: 3, title: 'Pizza Category 3', price: '100.000đ', imgSrc: './Images/menu3.jpg' },
          { id: 4, title: 'Pizza Category 4', price: '100.000đ', imgSrc: './Images/menu4.jpg' },
        ].map(item => (
          <MenuCard key={item.id} title={item.title} price={item.price} imgSrc={item.imgSrc} onAddToCart={() => addToCart(item)} />
        ))}
      </div>

      {/* Modal Giỏ Hàng */}
      <Modal show={showCart} onHide={handleCloseCart}>
        <Modal.Header closeButton>
          <Modal.Title><FaShoppingCart /> Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cart.length === 0 ? (
            <p>You currently have no items in your shopping cart.</p>
          ) : (
            <ul>
              {cart.map((item) => (
                <li key={item.id} className="d-flex justify-content-between align-items-center">
                  <span>{item.title} - {item.price} x {item.quantity}</span>
                  <div>
                    <Button variant="outline-secondary" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Button variant="outline-secondary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCart}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseCart}>
          View cart
          </Button>
        </Modal.Footer>
      </Modal>

      <BookingForm />
    </Container>
  );
};

export default App;

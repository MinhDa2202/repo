import React, { useState, useEffect } from 'react';
import { Container, Modal, Button, Row, Col } from 'react-bootstrap';
import { FaShoppingCart } from 'react-icons/fa';
import NavigationBar from './Components/Navbar';
import Carousel from './Components/Carousel';
import BookingForm from './Components/BookingForm';
import Login from './Components/Login';
import axios from 'axios';

const App = () => {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [menuItems, setMenuItems] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios.get('https://api-demo-4gqb.onrender.com/products')
      .then(response => {
        setMenuItems(response.data.data || []);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
        setMenuItems([]);
      });
  }, []);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);
  const handleShowLogin = () => setShowLogin(true);
  const handleCloseLogin = () => setShowLogin(false);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowLogin(false);
  };

  const handleLogout = () => {
    setUser(null); // Xóa trạng thái đăng nhập
  };

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
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  const totalItemsInCart = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <Container>
      <NavigationBar
        totalItemsInCart={totalItemsInCart}
        handleShowCart={handleShowCart}
        handleShowLogin={handleShowLogin}
        user={user}
        handleLogout={handleLogout}
      />

      <Login
        show={showLogin}
        handleClose={handleCloseLogin}
        handleLoginSuccess={handleLoginSuccess}
      />

      <Carousel />

      <h2 className="text-left mb-2 mt-2">Our Menu</h2>

      <Row>
        {menuItems.length > 0 ? (
          menuItems.map(item => (
            <Col md={3} key={item.id}>
              <div className="card mb-4">
                <img src={item.image} className="card-img-top" alt={item.title} />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">
                    {item.salePrice ? `${item.salePrice} USD (Sale)` : `${item.price} USD`}
                  </p>
                  <Button variant="primary" onClick={() => addToCart(item)}> BUY </Button>
                </div>
              </div>
            </Col>
          ))
        ) : (
          <p>No menu items available</p>
        )}
      </Row>

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
                  <span>{item.title} - {item.salePrice || item.price} USD x {item.quantity}</span>
                  <div>
                    <Button variant="outline-secondary" style={{ marginRight: '5px' }} onClick={() => updateItemQuantity(item.id, item.quantity - 1)}>-</Button>
                    <Button variant="outline-primary" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}>+</Button>
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
        </Modal.Footer>
      </Modal>

      <BookingForm />
    </Container>
  );
};

export default App;

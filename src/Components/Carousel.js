import React from 'react';

const Carousel = () => {
  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./Images/pizza1.jpg" className="d-block w-100" alt="Neapolitan Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>Originating from Naples, Italy, this pizza has a thin, soft crust topped with fresh tomatoes, mozzarella, and basil for a classic flavor.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./Images/pizza2.jpg" className="d-block w-100" alt="Vegetable Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Vegetable Pizza</h5>
            <p>This pizza is loaded with fresh veggies like bell peppers, onions, mushrooms, and olives on a tomato sauce base.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./Images/pizza3.jpg" className="d-block w-100" alt="Pizza with cheese" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Pizza with Cheese</h5>
            <p>A classic pizza topped with rich, melted cheese for those who love the simplicity of cheesy goodness.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./Images/pizza4.jpg" className="d-block w-100" alt="Pepperoni Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Pepperoni Pizza</h5>
            <p>One of the most popular pizzas, featuring slices of spicy pepperoni over a base of tomato sauce and melted cheese.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src="./Images/pizza5.jpg" className="d-block w-100" alt="Margherita Pizza" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Margherita Pizza</h5>
            <p>A simple and fresh pizza with mozzarella, tomatoes, and basil, representing the colors of the Italian flag.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;

import React from 'react';
import Navbar from './Components/Navbar';
import Carousel from './Components/Carousel';
import Menu from './Components/Menu';
import BookingForm from './Components/BookingForm';

function App() {
  return (
    <>
      <div className='container-fluid bg-dark text-white'>
        <Navbar />
        <Carousel />
        <Menu />
        <BookingForm />
      </div>
    </>
  );
}

export default App;

import React from 'react';

const BookingForm = () => {
  return (
    <div className='container'>
      <div className='row'>
        <h2 className='text-center'>Book your Table</h2>
        <div className="row mb-3">
          <div className="col">
            <input type="text" className="form-control" placeholder="Your name *" aria-label="Your name" />
          </div>
          <div className="col">
            <input type="text" className="form-control" placeholder="Your email *" aria-label="Your email" />
          </div>
          <div className="col">
            <select id="inputState" className="form-select">
              <option selected>Select a service</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <div className='row mb-2'>
          <div className='col'>
            <textarea className="form-control" rows="5" placeholder="Please write your comment"></textarea>
          </div>
        </div>
        <div className='row mb-3'>
          <div className='col'>
            <input type='submit' className='btn btn-warning' value="Send Message"></input>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;

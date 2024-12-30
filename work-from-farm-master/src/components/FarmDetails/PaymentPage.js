import React from 'react';
import { Link } from 'react-router-dom';
import './PaymentPage.css';  // Create a new CSS file for custom styles

const PaymentPage = () => {
  return (
    <div className="payment-page">
      <h2 className="highlighted-text">Payment Information</h2>
      <p className="highlighted-text">
        Call us at <strong><b>9740579800</b></strong> for further assistance.
      </p>
      <Link to="/" className="home-link">Go to Home</Link>
    </div>
  );
};

export default PaymentPage;

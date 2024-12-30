import React from 'react';
import { useLocation } from 'react-router-dom';
import './Payment.css';  // Make sure the path is correct

const Payment = () => {
  const location = useLocation();
  const { farm, rooms, members } = location.state;

  const handlePayment = () => {
    const totalAmount = rooms * farm.pricePerRoom * 100;
    const options = {
      key: 'rzp_test_8EoikP9uT1RY5C',
      amount: totalAmount,
      currency: 'INR',
      name: farm.name,
      description: 'Room Booking',
      image: farm.image,
      handler: (response) => {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
        // Redirect to home page after payment
        window.location.href = '/';
      },
      prefill: { name: '', email: '', contact: '' },
      theme: { color: '#3399cc' },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="payment">
      <h2>Proceed to Payment</h2>
      <p><strong>Farm:</strong> {farm.name}</p>
      <p><strong>Rooms:</strong> {rooms}</p>
      <p><strong>Members:</strong> {members}</p>
      <p><strong>Total Price:</strong> ₹{rooms * farm.pricePerRoom}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;

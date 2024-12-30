import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './FarmDetails.css';  // Add custom styles for the details page
import divineEuphoriaImage from '../../assets/images/divine-euphoria.jpg';  // Replace with actual path
import greenMeadowsImage from '../../assets/images/green-meadows.jpg';  // Replace with actual path

const farmData = {
  1: {
    name: 'Divine Euphoria',
    location: 'KrishnayyanaDoddi, Karnataka',
    image: divineEuphoriaImage,
    amenities: ['Wi-Fi', 'Nature Trails', 'Organic Food', 'Yoga Space'],
    facilities: ['Private Rooms', 'Conference Hall', 'Yoga Space', 'Lounge Area'],
    images: [divineEuphoriaImage, greenMeadowsImage],
    directions: 'Located 60 km from Bangalore. Follow NH48 to Kanakapura.',
    lat: 12.9531,  // Latitude for Google Maps
    lng: 77.5785,  // Longitude for Google Maps
    pricePerRoom: 2000,
  },
  2: {
    name: 'Rustic Retreat',
    location: 'Wayanad, Kerala',
    image: greenMeadowsImage,
    amenities: ['Swimming Pool', 'Bonfire', 'Farm Tours', 'Luxury Cottages'],
    facilities: ['Private Rooms', 'Conference Hall', 'Lounge Area', 'Bonfire'],
    images: [greenMeadowsImage],
    directions: 'Located 80 km from Calicut Airport. Take SH29 to Wayanad.',
    lat: 11.6862,  // Latitude for Google Maps
    lng: 76.0909,  // Longitude for Google Maps
    pricePerRoom: 2500,
  },
};

const FarmDetails = () => {
  const { id } = useParams();
  const farm = farmData[id];

  useEffect(() => {
    // Dynamically load Razorpay script
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      window.Razorpay = window.Razorpay || {};  // Ensure Razorpay is loaded
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  if (!farm) {
    return <p>Farm not found!</p>;
  }

  const handlePayment = (rooms) => {
    const totalAmount = rooms * farm.pricePerRoom * 100; // Convert to paisa
    const options = {
      key: 'rzp_test_8EoikP9uT1RY5C', // Replace with your Razorpay key
      amount: totalAmount,
      currency: 'INR',
      name: farm.name,
      description: 'Room Booking',
      image: farm.image,
      handler: (response) => {
        alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
      },
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#3399cc',
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const handleBookNow = () => {
    const rooms = prompt('How many rooms would you like to book?');
    if (rooms && !isNaN(rooms)) {
      handlePayment(rooms);
    } else {
      alert('Please enter a valid number of rooms.');
    }
  };

  // Google Maps Directions URL
  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${farm.lat},${farm.lng}`;

  return (
    <div className="farm-details">
      <h1>{farm.name}</h1>
      <div className="farm-gallery">
        <h3>Gallery</h3>
        <div className="carousel">
          {farm.images.map((image, index) => (
            <img key={index} src={image} alt={`${farm.name} ${index + 1}`} className="farm-image" />
          ))}
        </div>
      </div>

      <p><strong>Location:</strong> {farm.location}</p>
      <p><strong>Amenities:</strong> {farm.amenities.join(', ')}</p>
      <p><strong>Facilities:</strong> {farm.facilities.join(', ')}</p>

      {/* Directions */}
      <p><strong>Directions:</strong> {farm.directions}</p>
      <a 
        href={googleMapsLink} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-secondary"
      >
        Get Directions on Google Maps
      </a>

      <p><strong>Price per Room per Day:</strong> ₹{farm.pricePerRoom}</p>
      <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default FarmDetails;

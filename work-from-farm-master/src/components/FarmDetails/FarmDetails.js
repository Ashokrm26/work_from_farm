// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import './FarmDetails.css';
// import "react-datepicker/dist/react-datepicker.css";
// import DatePicker from "react-datepicker";
// import divineEuphoriaImage from '../../assets/images/divine-euphoria.jpg';  
// import greenMeadowsImage from '../../assets/images/green-meadows.jpg';  
// import { farmData } from './farmData'; // Import the data from farmData.js

// const farmData = {
//   1: {
//     name: 'Divine Euphoria',
//     location: 'KrishnayyanaDoddi, Karnataka',
//     image: divineEuphoriaImage,
//     amenities: [
//       { name: 'Wi-Fi', icon: 'fa-wifi' },
//       { name: 'Nature Trails', icon: 'fa-tree' },
//       { name: 'Organic Food', icon: 'fa-leaf' },
//       { name: 'Yoga Space', icon: 'fa-yoga' }
//     ],
//     facilities: [
//       { name: 'Private Rooms', icon: 'fa-bed' },
//       { name: 'Conference Hall', icon: 'fa-chalkboard-teacher' },
//       { name: 'Lounge Area', icon: 'fa-couch' },
//       { name: 'Bonfire', icon: 'fa-fire' }
//     ],
//     images: [divineEuphoriaImage, greenMeadowsImage],
//     directions: 'Located 60 km from Bangalore. Follow NH48 to Kanakapura.',
//     lat: 12.9531, 
//     lng: 77.5785,  
//     pricePerRoom: 2000,
//     description: [
//       "Divine Euphoria offers a perfect getaway to escape the hustle of the city, nestled in the serene landscapes of Karnataka.",
//       "The farm is dedicated to organic farming and sustainability, offering guests the chance to enjoy fresh organic food and explore nature trails."
//     ],
//     availableDates: ['2024-12-28', '2024-12-29', '2024-12-30'],
//     bookedDates: ['2024-12-29'],
//   },
//   2: {
//     name: 'Rustic Retreat',
//     location: 'Wayanad, Kerala',
//     image: greenMeadowsImage,
//     amenities: [
//       { name: 'Swimming Pool', icon: 'fa-swimmer' },
//       { name: 'Bonfire', icon: 'fa-fire' },
//       { name: 'Farm Tours', icon: 'fa-tractor' },
//       { name: 'Luxury Cottages', icon: 'fa-bed' }
//     ],
//     facilities: [
//       { name: 'Private Rooms', icon: 'fa-bed' },
//       { name: 'Conference Hall', icon: 'fa-chalkboard-teacher' },
//       { name: 'Lounge Area', icon: 'fa-couch' }
//     ],
//     images: [greenMeadowsImage],
//     directions: 'Located 80 km from Calicut Airport. Take SH29 to Wayanad.',
//     lat: 11.6862,
//     lng: 76.0909,
//     pricePerRoom: 2500,
//     description: [
//       "Rustic Retreat is a charming farm stay located in the picturesque Wayanad region of Kerala. Surrounded by lush forests and hills.",
//       "Guests can enjoy the luxury cottages with modern amenities, unwind by the swimming pool, or gather around a bonfire in the evening."
//     ],
//     availableDates: ['2024-12-25', '2024-12-26', '2024-12-27'],
//     bookedDates: ['2024-12-26'],
//   },
// };

// const FarmDetails = () => {
//   const { id } = useParams();
//   const farm = farmData[parseInt(id)]; // Ensure id is a number
//   const navigate = useNavigate();
//   const [selectedDate, setSelectedDate] = useState(null);

//   if (!farm) {
//     return <p>Farm not found!</p>;
//   }

//   const handleBookNow = () => {
//     navigate(`/book/${id}`);  // Ensure you have this route set up
//   };

//   const handlePayment = (rooms) => {
//     const totalAmount = rooms * farm.pricePerRoom * 100;
//     const options = {
//       key: 'rzp_test_8EoikP9uT1RY5C',
//       amount: totalAmount,
//       currency: 'INR',
//       name: farm.name,
//       description: 'Room Booking',
//       image: farm.image,
//       handler: (response) => {
//         alert('Payment successful! Payment ID: ' + response.razorpay_payment_id);
//       },
//       prefill: { name: '', email: '', contact: '' },
//       theme: { color: '#3399cc' },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${farm.lat},${farm.lng}`;

//   const handleDateChange = (date) => {
//     setSelectedDate(date);
//   };

//   const isDateBooked = (date) => {
//     const formattedDate = date.toISOString().split('T')[0];
//     return farm.bookedDates.includes(formattedDate);
//   };

//   return (
//     <div className="farm-details">
//       <h1>{farm.name}</h1>
//       <div className="farm-gallery">
//         <h3>Gallery</h3>
//         <div className="carousel">
//           {farm.images.map((image, index) => (
//             <img key={index} src={image} alt={`${farm.name} ${index + 1}`} className="farm-image" />
//           ))}
//         </div>
//       </div>

//       <div className="farm-description">
//         <h3>Description</h3>
//         <ul>
//           {farm.description.map((para, index) => (
//             <li key={index}>{para}</li>
//           ))}
//         </ul>
//       </div>

//       <div className="amenities">
//         <h3>Amenities</h3>
//         <div className="amenity-icons">
//           {farm.amenities.map((amenity, index) => (
//             <div key={index} className="amenity">
//               <i className={`fa ${amenity.icon}`} aria-hidden="true"></i>
//               <p>{amenity.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="facilities">
//         <h3>Facilities</h3>
//         <div className="facility-icons">
//           {farm.facilities.map((facility, index) => (
//             <div key={index} className="facility">
//               <i className={`fa ${facility.icon}`} aria-hidden="true"></i>
//               <p>{facility.name}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="date-picker">
//         <p><strong>Select a Date:</strong></p>
//         <DatePicker
//           selected={selectedDate}
//           onChange={handleDateChange}
//           minDate={new Date()}
//           filterDate={(date) => !isDateBooked(date)}
//           highlightDates={farm.bookedDates.map((date) => new Date(date))}
//           inline
//           dayClassName={(date) => isDateBooked(date) ? 'booked-date' : ''}
//         />
//       </div>

//       <p><strong>Directions:</strong> {farm.directions}</p>
//       <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
//         Get Directions on Google Maps
//       </a>

//       <p><strong>Price per Room per Day:</strong> ₹{farm.pricePerRoom}</p>
//       <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
//     </div>
//   );
// };

// export default FarmDetails;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './FarmDetails.css';
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { farmData } from './farmData'; // Import the data from farmData.js

const FarmDetails = () => {
  const { id } = useParams();
  const farm = farmData[parseInt(id)]; // Ensure id is a number
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(null);

  if (!farm) {
    return <p>Farm not found!</p>;
  }

  const handleBookNow = () => {
    navigate(`/book/${id}`);  // Ensure you have this route set up
  };

  const handlePayment = (rooms) => {
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
      },
      prefill: { name: '', email: '', contact: '' },
      theme: { color: '#3399cc' },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  const googleMapsLink = `https://www.google.com/maps/dir/?api=1&destination=${farm.lat},${farm.lng}`;

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const isDateBooked = (date) => {
    const formattedDate = date.toISOString().split('T')[0];
    return farm.bookedDates.includes(formattedDate);
  };

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

      <div className="farm-description">
        <h3>Description</h3>
        <ul>
          {farm.description.map((para, index) => (
            <li key={index}>{para}</li>
          ))}
        </ul>
      </div>

      <div className="amenities">
        <h3>Amenities</h3>
        <div className="amenity-icons">
          {farm.amenities.map((amenity, index) => (
            <div key={index} className="amenity">
              <i className={`fa ${amenity.icon}`} aria-hidden="true"></i>
              <p>{amenity.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="facilities">
        <h3>Facilities</h3>
        <div className="facility-icons">
          {farm.facilities.map((facility, index) => (
            <div key={index} className="facility">
              <i className={`fa ${facility.icon}`} aria-hidden="true"></i>
              <p>{facility.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="date-picker">
        <p><strong>Select a Date:</strong></p>
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          minDate={new Date()}
          filterDate={(date) => !isDateBooked(date)}
          highlightDates={farm.bookedDates.map((date) => new Date(date))}
          inline
          dayClassName={(date) => isDateBooked(date) ? 'booked-date' : ''}
        />
      </div>

      <p><strong>Directions:</strong> {farm.directions}</p>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
        Get Directions on Google Maps
      </a>

      <p><strong>Price per Room per Day:</strong> ₹{farm.pricePerRoom}</p>
      <button className="btn btn-primary" onClick={handleBookNow}>Book Now</button>
    </div>
  );
};

export default FarmDetails;

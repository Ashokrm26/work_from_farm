// import React, { useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// // Removed axios import as email is not being sent now
// import { farmData } from '../FarmDetails/farmData';  // Update the path if needed
// import './BookingForm.css'; // Import the CSS file

// const BookingForm = () => {
//   const { id } = useParams();
//   const navigate = useNavigate(); // Correct hook

//   const farm = farmData[id];
//   const [formData, setFormData] = useState({
//     name: '',
//     mobile: '',
//     email: '',
//     rooms: 1,
//     members: 1
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value
//     }));
//   };

//   const handleConfirmBooking = async () => {
//     try {
//       // Redirect to the payment page after booking confirmation
//       navigate(`/payment/${id}`, { state: { ...formData, farm } });
//     } catch (error) {
//       alert('Failed to confirm booking. Please try again.');
//     }
//   };
  
//   return (
//     <div className="booking-form">
//       <h2>Book Your Stay at {farm.name}</h2>
//       <form>
//         <div>
//           <label>Name:</label>
//           <input
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Mobile:</label>
//           <input
//             type="text"
//             name="mobile"
//             value={formData.mobile}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Number of Members:</label>
//           <input
//             type="number"
//             name="members"
//             value={formData.members}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label>Number of Rooms:</label>
//           <input
//             type="number"
//             name="rooms"
//             value={formData.rooms}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <button type="button" onClick={handleConfirmBooking}>Confirm Booking</button>
//       </form>
//     </div>
//   );
// };

// export default BookingForm;
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { farmData } from '../FarmDetails/farmData';  // Update the path if needed
import './BookingForm.css'; // Import the CSS file

const BookingForm = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // Correct hook

  const farm = farmData[id];
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    rooms: 1,
    members: 1
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleConfirmBooking = async () => {
    try {
      // Redirect to the payment page after booking confirmation
      navigate(`/payment`, { state: { ...formData, farm } });
    } catch (error) {
      alert('Failed to confirm booking. Please try again.');
    }
  };
  
  return (
    <div class="booking-form-wrapper">
  <div class="animation-section">
    <img src="farmer-image.gif" alt="Farmer Walking" class="farmer-walking" />
  </div>

  <div class="booking-form">
    <h2>Book Your Stay at {farm.name}</h2>
    <form>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Mobile:</label>
        <input
          type="text"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Number of Members:</label>
        <input
          type="number"
          name="members"
          value={formData.members}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label>Number of Rooms:</label>
        <input
          type="number"
          name="rooms"
          value={formData.rooms}
          onChange={handleChange}
          required
        />
      </div>
      <button type="button" onClick={handleConfirmBooking}>Confirm Booking</button>
    </form>
  </div>
</div>

  );
};

export default BookingForm;

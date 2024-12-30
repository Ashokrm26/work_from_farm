// import React, { useState } from 'react';
// import SearchComponent from './components/SearchComponent';
// import FarmList from './components/FarmList';
// import FarmDetails from './components/FarmDetails';
// import farmsData from './mock/mockFarms';

// const App = () => {
//   const [farms, setFarms] = useState([]);
//   const [activeMenu, setActiveMenu] = useState('search'); // Default menu

//   const fetchFarms = (filters) => {
//     const filteredFarms = farmsData.filter((farm) => {
//       return (
//         (!filters.location || farm.location.includes(filters.location)) &&
//         (!filters.amenities || filters.amenities.every((amenity) => farm.amenities.includes(amenity))) &&
//         (!filters.priceRange || farm.price === filters.priceRange)
//       );
//     });

//     setFarms(filteredFarms);
//   };

//   return (
//     <div>
//       {/* Navigation Menu */}
//       <nav className="navbar navbar-expand-lg navbar-light bg-light">
//         <div className="container-fluid">
//           <a className="navbar-brand" href="#">Farm Finder</a>
//           <ul className="navbar-nav">
//             <li className="nav-item">
//               <button
//                 className={`nav-link btn ${activeMenu === 'search' ? 'active' : ''}`}
//                 onClick={() => setActiveMenu('search')}
//               >
//                 Search
//               </button>
//             </li>
//             <li className="nav-item">
//               <button
//                 className={`nav-link btn ${activeMenu === 'amenities' ? 'active' : ''}`}
//                 onClick={() => setActiveMenu('amenities')}
//               >
//                 Amenities
//               </button>
//             </li>
//           </ul>
//         </div>
//       </nav>

//       {/* Conditional Rendering */}
//       {activeMenu === 'search' && (
//         <>
//           <SearchComponent onSearch={fetchFarms} />
//           <FarmList farms={farms} />
//         </>
//       )}
//       {activeMenu === 'amenities' && <FarmDetails />}
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage/HomePage';
import RegisterForm from './components/RegisterForm';
import FarmDetails from './components/FarmDetails/FarmDetails';
import BookingForm from './components/FarmDetails/BookingForm';  // Path relative to App.js
import Payment from './components/FarmDetails/Payment';  // Add this import for the Payment page
import PartnerRegistrationForm from './components/PartnerRegistrationForm';
import 'font-awesome/css/font-awesome.min.css';
import PaymentPage from './components/FarmDetails/PaymentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/farm/:id" element={<FarmDetails />} />
        <Route path="/partner-register" element={<PartnerRegistrationForm />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/payment/:id" element={<Payment />} />  {/* Add this route */}
        <Route path="/book-a-farm/:id" element={<BookingForm />} />
        <Route path="/payment" element={<PaymentPage />} />


      </Routes>
    </Router>
  );
}

export default App;

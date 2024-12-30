import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
//import './App.css';
import './HomePage.css';
// import logo from '../../assets/images/logo.jpeg'; 
import bannerImage from '../../assets/images/banner.jpg'; 
import divineEuphoriaImage from '../../assets/images/divine-euphoria.jpg'; 
import green from '../../assets/images/green-meadows.jpg'; 
import nature from '../../assets/images/nature.jpeg'; 
import nature1 from '../../assets/images/nature1.jpg'; 
import whatsappIcon from '../../assets/images/whatsapp-icon.jpg'; // Correct path here
import { farmData } from '../FarmDetails/farmData';  // Ensure farmData is imported correctly


// Testimonials Data
const testimonials = [
  {
    message: "Working from a farm has transformed our work culture!",
    author: "John Doe, CEO"
  },
  {
    message: "The fresh air and environment boosted our team's productivity.",
    author: "Jane Smith, Product Manager"
  }
];

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu visibility
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownFarmsOpen, setDropdownFarmsOpen] = useState(false);
  const [dropdownPartnerOpen, setDropdownPartnerOpen] = useState(false);
  const [dropdownContactOpen, setDropdownContactOpen] = useState(false);
  const [selectedFarmId, setSelectedFarmId] = useState(null);
const [selectedDate, setSelectedDate] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [workFromFarms, setWorkFromFarms] = useState([
    { id: 1, name: 'Nature’s Paradise', location: 'Ooty, Tamil Nadu', image: nature },
    { id: 2, name: 'Green Meadows', location: 'Coorg, Karnataka', image: nature1 },
    { id: 1, name: 'Divine Euphoria', location: 'KrishnayyanaDoddi, Karnataka', image: divineEuphoriaImage },

  ]);

  const popularWorkFromFarms = [
    { id: 1, name: 'Divine Euphoria', location: 'KrishnayyanaDoddi, Karnataka', image: divineEuphoriaImage },
    { id: 2, name: 'Rustic Retreat', location: 'Wayanad, Kerala', image: green },
    { id: 1, name: 'Nature’s Paradise', location: 'Ooty, Tamil Nadu', image: nature },
    { id: 2, name: 'Green Meadows', location: 'Coorg, Karnataka', image: nature1 },
    
  ];

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [bannerIndex, setBannerIndex] = useState(0); // Store the index of the current banner text
  const bannerTexts = [
    "Plug your computer, plug your nature.",
    "Work with nature, and enjoy life.",
    "Embrace the calm and productivity of Work From Farms.",
    "Get out of the box, and into the farm box!",
    "Reconnect with nature, and your work-life balance."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prevIndex) => (prevIndex + 1) % bannerTexts.length);  // Change text every 5 seconds
    }, 5000);

    return () => clearInterval(interval);  // Cleanup interval on component unmount
  }, []);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
    const addFarm = (newFarm) => {
    setWorkFromFarms((prevFarms) => [...prevFarms, newFarm]);
  };
  const [filteredFarms, setFilteredFarms] = useState(workFromFarms);

  useEffect(() => {
    if (searchQuery) {
      setFilteredFarms(
        workFromFarms.filter((farm) =>
          farm.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          farm.location.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    } else {
      setFilteredFarms(workFromFarms);
    }
  }, [searchQuery, workFromFarms]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };
  const handleCheckAvailability = (farmId) => {
    if (selectedFarmId === farmId) {
      setSelectedFarmId(null); // Toggle off the date picker
    } else {
      setSelectedFarmId(farmId); // Show date picker for the selected farm
    }
  };
  
  // Handles the date confirmation
  const handleConfirmDate = (farmId) => {
    console.log(`Farm ID: ${farmId}, Selected Date: ${selectedDate}`);
    // Add logic to check availability and handle booking
    alert(`Availability checked for Farm ID: ${farmId} on ${selectedDate}`);
    setSelectedFarmId(null); // Hide the date picker after confirmation
  };
const handleDropdownToggle = () => {
   setDropdownFarmsOpen(prevState => !prevState);
};
  return (
<div className="App home-page">
<header className="header">
      <nav>
        <div className="logo">
          <h2>WorkfromFarms.com</h2>
        </div>
        <div className="menu-icon" onClick={toggleMenu}>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
          <div className={`bar ${menuOpen ? 'open' : ''}`}></div>
        </div>
        <ul className={`nav-menu ${menuOpen ? 'open' : ''}`}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/farms">Farms</Link></li>
          <li><Link to="/partner-register">Partner Register</Link></li>
          <li><Link to="contact-us">Contact Form</Link></li>
              <li><Link to="#location">Location</Link></li>
            
          
        </ul>
      </nav>
    </header>
    <div className="banner">
  <img src={bannerImage} alt="Work from Farms" className="banner-image" />
  <div className="banner-text-container">
    <h1>Switch to Smart Hybrid Work Culture</h1>
    <p>
      <b>Office + WFH + WFF</b><br />
      Work 3 days in the office, one day at home (WFH), <b>and the rest of the week Work From Farms (WFF)</b>.
    </p>
    <Link to={`/book-a-farm/${workFromFarms[0].id}`} className="book-farm-button">Book a Farm</Link>
    </div>
</div>
<br></br><br></br>
{/* Search and Filter Section */}
<section className="search-filter">
        <h2>Search and Filter Farms</h2>
        <input
          type="text"
          placeholder="Search by location or name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </section>
<br></br>
      <section className="wfh-section">
        
  <h2 className="section-title">Why Work From Farms?</h2>

  <div className="wfh-container">
    {/* Section 1: Image on Left, Text on Right */}
    <div className="wfh-row">
      <div className="wfh-image">
        <img src={require('./nature.jpeg')} alt="Nature Workspace" />
      </div>
      <div className="wfh-text">
      <h3>About Work From Farms (WFF)</h3>
<p>
  The <strong>Work From Farms (WFF)</strong> concept aims to enhance the traditional <strong>Work From Home</strong> (WFH) experience by adding elements that bring people closer to nature. Here’s what WFF offers:
</p>
<ul>
  <li>Imagine going on a long drive while staying productive.</li>
  <li>Enjoy the beauty of nature with family, friends, and colleagues.</li>
  <li>Hang out with friends in a peaceful, natural environment—all while being productive.</li>
  <li>Our mission is to connect people with nature and foster collaboration with the farming community.</li>
  <li>Experience a refreshing and inspiring environment for work.</li>
</ul>

<p>
  Work From Farms is the perfect way to escape the monotony of home offices and embrace a more enjoyable, nature-filled working experience.
</p>

      </div>
    </div>

    {/* Section 2: Image on Right, Text on Left */}
    <div className="wfh-row reverse">
     
      <div className="wfh-image">
        <img src={require('./team_collaboration.jpg')} alt="Team Collaboration in Nature" />
      </div> <div className="wfh-text">
      <h3>Take Your Family With You for More Fun</h3>
<p>
  Whenever you feel tired of working from home, just pack your laptop and head to our farms for a wonderful change. It's like moving your home and office to a serene farm setting.
</p>
<ul> 
  <li><strong>Support the Farmer Community:</strong> By working from a farm, you contribute to the local farming community while benefiting from a refreshing work environment.</li>
</ul>
<p>
  In addition, you get the option to work from different farms. This website features a network of farms where you can work from—<strong>WorkFromFarmS.com</strong>. We have partnered with a group of farmers who welcome you to work from their farms.
</p>
      </div>
    </div>

     </div>
</section>


      {/* Popular Work From Farms Section */}
<section>
  <h2>Popular Work From Farms</h2>
  <div className="farm-list">
    {popularWorkFromFarms.map((farm) => (
      <div key={farm.id} className="farm-card">
        <Link to={`/farm/${farm.id}`}>
          <img src={farm.image} alt={farm.name} className="farm-image" />
          <h3>{farm.name}</h3>
          <p>{farm.location}</p>
        </Link>
        <button
          className="check-availability-btn"
          onClick={() => handleCheckAvailability(farm.id)}
        >
          Check Availability
        </button>
        {selectedFarmId === farm.id && (
          <div className="date-picker-container">
            <label>Select Date:</label>
            <input
              type="date"
              className="date-picker"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
            />
            <button
              className="confirm-btn"
              onClick={() => handleConfirmDate(farm.id)}
            >
              Confirm
            </button>
          </div>
        )}
      </div>
    ))}
  </div>
</section>

      {/* Filtered Farms Section */}
      <section>
        <h2>Available Work From Farms</h2>
        <div className="farm-list">
          {filteredFarms.map((farm) => (
            <div key={farm.id} className="farm-card">
              <Link to={`/farm/${farm.id}`}>
                <img src={farm.image} alt={farm.name} className="farm-image" />
                <h3>{farm.name}</h3>
                <p>{farm.location}</p>
                <p>Price: ₹{farm.price} per day</p>
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Partners Say</h2>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <p>"{testimonial.message}"</p>
            <p>- {testimonial.author}</p>
          </div>
        ))}
      </section>

      {/* Partner Register Section */}
      <section className="partner-register">
        <h2>Partner With Us</h2>
        <p>Register your farm to join our Work From Farms network.</p>
        <Link to="/partner-register" className="register-btn">Register Now</Link>
      </section>

      {/* Contact Us Form */}
      <section id="contact-us" className="contact-us">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2025 Work From Farms. All rights reserved.</p>
          <ul className="footer-nav">
            <li><Link to="/">Home</Link></li>
            <li><a href="#">Farms</a></li>
            <li><a href="#">Partner Register</a></li>
            <li><a href="#contact-us">Contact us</a></li>
            <li><a href="https://www.facebook.com" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
        <li><a href="https://www.instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
        <li><a href="https://www.linkedin.com" target="_blank"><i class="fab fa-linkedin"></i> LinkedIn</a></li>
          </ul>
        </div>
      </footer>

      {/* SEO Meta Tags */}
      <meta name="description" content="Work from Farms - The new way to work remotely in nature." />
      <meta property="og:title" content="Work From Farms" />
      <meta property="og:description" content="Join us and experience a new way of working while enjoying nature!" />
      <meta property="og:image" content="path/to/image.jpg" />

      {/* Chatbot Integration
      <div className="chatbot">
        <iframe
          src="https://www.tawk.to/chat/your-chat-id"
          style={{ position: 'fixed', bottom: '0', right: '0', width: '300px', height: '400px', border: 'none' }}
          title="Chatbot"
        ></iframe>
      </div> */}

      {/* WhatsApp Contact Button */}
      <div className="whatsapp-button">
        <a
          href="https://wa.me/9740579800"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
      src={whatsappIcon}
     alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
  );
};

export default HomePage;

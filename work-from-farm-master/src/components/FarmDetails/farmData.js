// src/components/FarmDetails/farmData.js

import divineEuphoriaImage from '../../assets/images/divine-euphoria.jpg';
import greenMeadowsImage from '../../assets/images/green-meadows.jpg';

export const farmData = {
  1: {
    name: 'Divine Euphoria',
    location: 'KrishnayyanaDoddi, Karnataka',
    image: divineEuphoriaImage,
    amenities: [
      { name: 'Wi-Fi', icon: 'fa-wifi' },
      { name: 'Nature Trails', icon: 'fa-tree' },
      { name: 'Organic Food', icon: 'fa-leaf' },
      { name: 'Yoga Space', icon: 'fa-yoga' }
    ],
    facilities: [
      { name: 'Private Rooms', icon: 'fa-bed' },
      { name: 'Conference Hall', icon: 'fa-chalkboard-teacher' },
      { name: 'Lounge Area', icon: 'fa-couch' },
      { name: 'Bonfire', icon: 'fa-fire' }
    ],
    images: [divineEuphoriaImage, greenMeadowsImage],
    directions: 'Located 60 km from Bangalore. Follow NH48 to Kanakapura.',
    lat: 12.9531,
    lng: 77.5785,
    pricePerRoom: 2000,
    description: [
      "Divine Euphoria offers a perfect getaway to escape the hustle of the city, nestled in the serene landscapes of Karnataka.",
      "The farm is dedicated to organic farming and sustainability, offering guests the chance to enjoy fresh organic food and explore nature trails."
    ],
    availableDates: ['2024-12-28', '2024-12-29', '2024-12-30'],
    bookedDates: ['2024-12-29'],
  },
  2: {
    name: 'Rustic Retreat',
    location: 'Wayanad, Kerala',
    image: greenMeadowsImage,
    amenities: [
      { name: 'Swimming Pool', icon: 'fa-swimmer' },
      { name: 'Bonfire', icon: 'fa-fire' },
      { name: 'Farm Tours', icon: 'fa-tractor' },
      { name: 'Luxury Cottages', icon: 'fa-bed' }
    ],
    facilities: [
      { name: 'Private Rooms', icon: 'fa-bed' },
      { name: 'Conference Hall', icon: 'fa-chalkboard-teacher' },
      { name: 'Lounge Area', icon: 'fa-couch' }
    ],
    images: [greenMeadowsImage],
    directions: 'Located 80 km from Calicut Airport. Take SH29 to Wayanad.',
    lat: 11.6862,
    lng: 76.0909,
    pricePerRoom: 2500,
    description: [
      "Rustic Retreat is a charming farm stay located in the picturesque Wayanad region of Kerala. Surrounded by lush forests and hills.",
      "Guests can enjoy the luxury cottages with modern amenities, unwind by the swimming pool, or gather around a bonfire in the evening."
    ],
    availableDates: ['2024-12-25', '2024-12-26', '2024-12-27'],
    bookedDates: ['2024-12-26'],
  },
};

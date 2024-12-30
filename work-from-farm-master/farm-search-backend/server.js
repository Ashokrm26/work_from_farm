const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const farmRoutes = require('./routes/farmRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/farmSearch', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB connected');
}).catch((err) => console.log('Error:', err));

// Routes
app.use('/api/farms', farmRoutes);

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

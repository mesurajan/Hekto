require('dotenv').config(); // ✅ load variables from .env
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'fallback-secret';
const users = []; 

// ----------------- SIGNUP ROUTE -----------------
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).json({ message: 'User already exists' });

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ name, email, password: hashedPassword });
    res.json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Server error during signup' });
  }
});

// ----------------- LOGIN ROUTE -----------------
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  const user = users.find(u => u.email === email);
  if (!user) return res.status(400).json({ message: 'Invalid credentials' });

  try {
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ email: user.email, name: user.name }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error during login' });
  }
});

// ----------------- PROTECTED ROUTE -----------------
app.get('/profile', (req, res) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) return res.status(401).json({ message: 'No token provided' });

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    res.json({ message: `Welcome ${decoded.name}` });
  } catch (err) {
    res.status(401).json({ message: 'Invalid token' });
  }
});

// ----------------- START SERVER -----------------
const PORT = process.env.PORT || 5174; // ✅ from .env or fallback
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

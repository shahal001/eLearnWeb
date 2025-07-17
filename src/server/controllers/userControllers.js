import bcrypt from 'bcryptjs';
import User from '../models/loginModel.js'; // Use a single User model for both login and register

export async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    // Compare password (assuming passwords are hashed)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }
    res.json({ message: 'Login successful', user: { id: user._id, email: user.email, name: user.name } });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
}

export async function register(req, res) {
  const { name, email, createPassword } = req.body;
  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }
    // Hash the password
    const hashedPassword = await bcrypt.hash(createPassword, 10);
    // Create new user
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
      res.status(201).json({ message: 'Account created successfully', user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  }
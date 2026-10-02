import { adminUser } from '../models/store.js';
import { generateToken } from '../middleware/auth.js';

export const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        message: 'Username and password are required.'
      });
    }

    // Verify credentials
    if (username.trim() === adminUser.username && password === adminUser.password) {
      const token = generateToken(adminUser);
      return res.status(200).json({
        success: true,
        message: 'Authentication successful',
        token,
        user: {
          id: adminUser.id,
          username: adminUser.username,
          name: adminUser.name,
          email: adminUser.email,
          role: adminUser.role
        }
      });
    }

    return res.status(401).json({
      success: false,
      message: 'Invalid credentials. Default admin: admin / adminPassword2026'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Login failure: ' + error.message
    });
  }
};

export const getMe = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      user: req.user
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'brightlink-dubai-secret-key-2026';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ success: false, message: 'Access Denied: No authentication token provided' });
  }

  try {
    const verified = jwt.verify(token, JWT_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    return res.status(403).json({ success: false, message: 'Invalid or expired authorization token' });
  }
};

export const generateToken = (user) => {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role, email: user.email },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

const jwt = require('jsonwebtoken');

const accessValidation = (req, res, next) => {
    const { authorization } = req.headers;
  
    if (!authorization) {
      return res.status(401).json({
        message: '401 Unauthorized',
      });
    }
  
    const token = authorization.split(' ')[1];
    const secret = process.env.JWT_SECRET || 'default_secret_key';
  
    try {
      const decoded = jwt.verify(token, secret); 
      req.userData = decoded;
    } catch (error) {
      console.error('JWT Verification Failed:', error);
      return res.status(401).json({
        message: 'Unauthorized',
      });
    }
  
    next(); 
  };

module.exports = accessValidation;


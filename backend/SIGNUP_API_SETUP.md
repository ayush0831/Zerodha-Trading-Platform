# Backend API Setup Guide - Signup Endpoint

## 📋 Table of Contents
1. [Database Setup](#database-setup)
2. [User Model](#user-model)
3. [API Endpoint](#api-endpoint)
4. [Authentication](#authentication)
5. [Error Handling](#error-handling)
6. [Email Verification](#email-verification)
7. [Security Considerations](#security-considerations)

---

## Database Setup

### MongoDB User Schema

```javascript
// backend/schemas/UserSchema.js
const userSchema = {
  _id: ObjectId,
  name: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  },
  mobile: {
    type: String,
    unique: true
  },
  password: String,  // Hashed
  createdAt: Date,
  updatedAt: Date,
  isEmailVerified: Boolean,
  emailVerificationToken: String,
  isActive: {
    type: Boolean,
    default: true
  },
  loginAttempts: {
    type: Number,
    default: 0
  },
  lastLoginAttempt: Date
};
```

### Using Mongoose

```javascript
// backend/model/UserModel.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
      maxlength: [50, 'Name cannot exceed 50 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already registered'],
      lowercase: true,
      trim: true,
      match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email'],
    },
    mobile: {
      type: String,
      required: [true, 'Mobile number is required'],
      unique: [true, 'Mobile number already registered'],
      match: [/^\d{10}$/, 'Mobile number must be 10 digits'],
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters'],
      select: false, // Don't return password by default
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    emailVerificationToken: String,
    emailVerificationExpires: Date,
    isActive: {
      type: Boolean,
      default: true,
    },
    loginAttempts: {
      type: Number,
      default: 0,
    },
    lastLoginAttempt: Date,
    accountLockedUntil: Date,
    profilePicture: String,
    bio: String,
    tradingExperience: String,
  },
  {
    timestamps: true,
  }
);

// Index for faster queries
userSchema.index({ email: 1 });
userSchema.index({ mobile: 1 });

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  
  try {
    const bcrypt = require('bcryptjs');
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Method to compare passwords
userSchema.methods.comparePassword = async function (enteredPassword) {
  const bcrypt = require('bcryptjs');
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);
module.exports = User;
```

---

## User Model

### Using Sequelize (SQL)

```javascript
// backend/model/UserModel.js
const { DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 50],
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      lowercase: true,
      validate: {
        isEmail: true,
      },
    },
    mobile: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        is: /^\d{10}$/,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isEmailVerified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    timestamps: true,
  });

  // Hash password before save
  User.beforeCreate(async (user) => {
    if (user.password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  });

  // Method to compare passwords
  User.prototype.comparePassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
  };

  return User;
};
```

---

## API Endpoint

### POST `/api/auth/signup`

#### Request Body
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "password": "SecurePass123"
}
```

#### Success Response (201)
```json
{
  "success": true,
  "message": "Account created successfully",
  "data": {
    "userId": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "isEmailVerified": false
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

#### Error Responses
```json
// 400 Bad Request - Invalid input
{
  "success": false,
  "message": "Validation failed",
  "errors": {
    "email": "Please enter a valid email",
    "password": "Password must contain uppercase letters"
  }
}

// 409 Conflict - Email exists
{
  "success": false,
  "message": "This email is already registered"
}

// 422 Unprocessable Entity - Business logic error
{
  "success": false,
  "message": "This mobile number is already registered"
}

// 500 Server Error
{
  "success": false,
  "message": "Server error. Please try again later"
}
```

---

## Implementation

### Express Route Handler

```javascript
// backend/routes/auth.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../model/UserModel');
const { validateSignup } = require('../middleware/validation');
const rateLimit = require('express-rate-limit');

const router = express.Router();

// Rate limiting for signup
const signupLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 requests per windowMs
  message: 'Too many signup attempts, please try again later',
});

/**
 * POST /api/auth/signup
 * Register a new user
 */
router.post('/signup', signupLimiter, validateSignup, async (req, res) => {
  try {
    const { name, email, mobile, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ email: email.toLowerCase() }, { mobile }],
    });

    if (existingUser) {
      const field = existingUser.email === email.toLowerCase() ? 'email' : 'mobile';
      return res.status(409).json({
        success: false,
        message: `This ${field} is already registered`,
      });
    }

    // Create new user
    const newUser = new User({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      mobile,
      password, // Will be hashed by schema pre-save hook
    });

    // Save user
    await newUser.save();

    // Generate JWT token
    const token = jwt.sign(
      { userId: newUser._id, email: newUser.email },
      process.env.JWT_SECRET || 'your_secret_key',
      { expiresIn: '7d' }
    );

    // Send verification email (optional)
    // await sendVerificationEmail(newUser.email, newUser._id);

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Account created successfully',
      data: {
        userId: newUser._id,
        email: newUser.email,
        name: newUser.name,
        isEmailVerified: newUser.isEmailVerified,
      },
      token,
    });

  } catch (error) {
    console.error('Signup error:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = {};
      Object.keys(error.errors).forEach((key) => {
        errors[key] = error.errors[key].message;
      });
      return res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors,
      });
    }

    // Handle duplicate key error
    if (error.code === 11000) {
      const field = Object.keys(error.keyPattern)[0];
      return res.status(409).json({
        success: false,
        message: `${field.charAt(0).toUpperCase() + field.slice(1)} is already registered`,
      });
    }

    // Generic server error
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later',
    });
  }
});

module.exports = router;
```

---

## Authentication

### JWT Token Generation

```javascript
// backend/utils/tokenUtils.js
const jwt = require('jsonwebtoken');

/**
 * Generate JWT token
 */
export const generateToken = (userId, email, expiresIn = '7d') => {
  return jwt.sign(
    {
      userId,
      email,
      type: 'access',
    },
    process.env.JWT_SECRET,
    { expiresIn }
  );
};

/**
 * Verify JWT token
 */
export const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

/**
 * Generate refresh token
 */
export const generateRefreshToken = (userId, email) => {
  return jwt.sign(
    {
      userId,
      email,
      type: 'refresh',
    },
    process.env.JWT_REFRESH_SECRET,
    { expiresIn: '30d' }
  );
};
```

### Middleware for Authentication

```javascript
// backend/middleware/auth.js
const jwt = require('jsonwebtoken');

/**
 * Verify JWT middleware
 */
export const verifyJWT = (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: 'No token provided',
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    req.email = decoded.email;
    next();
  } catch (error) {
    res.status(401).json({
      success: false,
      message: 'Invalid or expired token',
    });
  }
};

module.exports = { verifyJWT };
```

---

## Error Handling

### Validation Middleware

```javascript
// backend/middleware/validation.js
const { body, validationResult } = require('express-validator');

/**
 * Validation rules for signup
 */
const validateSignup = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  
  body('email')
    .trim()
    .isEmail()
    .normalizeEmail()
    .withMessage('Please enter a valid email address'),
  
  body('mobile')
    .matches(/^\d{10}$/)
    .withMessage('Mobile number must be 10 digits'),
  
  body('password')
    .isLength({ min: 8 })
    .withMessage('Password must be at least 8 characters')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
    .withMessage('Password must contain uppercase, lowercase, and numbers'),
  
  // Middleware to handle validation errors
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({
        success: false,
        message: 'Validation failed',
        errors: errors.array().reduce((acc, err) => {
          acc[err.param] = err.msg;
          return acc;
        }, {}),
      });
    }
    next();
  },
];

module.exports = { validateSignup };
```

---

## Email Verification

### Send Verification Email

```javascript
// backend/utils/email.js
const nodemailer = require('nodemailer');

/**
 * Send verification email
 */
export const sendVerificationEmail = async (email, userId, token) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Verify Your Email Address',
    html: `
      <h2>Welcome to Zerodha Trading Platform!</h2>
      <p>Please verify your email address to complete your registration.</p>
      <a href="${verificationLink}" style="padding: 10px 20px; background: #08386a; color: white; text-decoration: none; border-radius: 5px;">
        Verify Email
      </a>
      <p>This link will expire in 24 hours.</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Verification email sent to:', email);
  } catch (error) {
    console.error('Error sending email:', error);
    throw error;
  }
};

/**
 * Send welcome email
 */
export const sendWelcomeEmail = async (email, name) => {
  // Similar implementation
};
```

---

## Security Considerations

### 1. Environment Variables

```bash
# .env
JWT_SECRET=your_super_secret_jwt_key_change_this_in_production
JWT_REFRESH_SECRET=your_refresh_token_secret
DATABASE_URL=mongodb://localhost:27017/zerodha
FRONTEND_URL=http://localhost:3000
API_URL=http://localhost:3001
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
NODE_ENV=development
```

### 2. CORS Configuration

```javascript
// backend/server.js
const cors = require('cors');

app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200,
}));
```

### 3. HTTPS in Production

```javascript
// Redirect HTTP to HTTPS
app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production' && !req.secure) {
    return res.redirect('https://' + req.header('host') + req.url);
  }
  next();
});
```

### 4. Password Hashing

Always use bcrypt or similar for password hashing:
```javascript
const bcrypt = require('bcryptjs');
const salt = await bcrypt.genSalt(10);
const hashedPassword = await bcrypt.hash(password, salt);
```

### 5. Input Validation & Sanitization

```javascript
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const helmet = require('helmet');

app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
```

---

## Testing the Endpoint

### Using cURL

```bash
curl -X POST http://localhost:3001/api/auth/signup \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "mobile": "9876543210",
    "password": "SecurePass123"
  }'
```

### Using Postman

1. Create new POST request
2. URL: `http://localhost:3001/api/auth/signup`
3. Headers: `Content-Type: application/json`
4. Body:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "mobile": "9876543210",
  "password": "SecurePass123"
}
```

---

## Deployment Checklist

- [ ] Database configured and tested
- [ ] Environment variables set
- [ ] HTTPS enabled
- [ ] Rate limiting configured
- [ ] Email service configured
- [ ] Error logging setup
- [ ] Database backups configured
- [ ] Monitoring and alerts set up
- [ ] Security headers configured
- [ ] CORS properly configured
- [ ] Password hashing implemented
- [ ] Input validation implemented
- [ ] Tests passing
- [ ] Documentation updated

---

**Version:** 1.0.0  
**Last Updated:** 2024

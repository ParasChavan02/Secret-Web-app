# 🔐 Secrets - Secure Web Application

[🚀 **Live App: https://secret-web-app.onrender.com**](https://secret-web-app.onrender.com)

A modern, secure web application for sharing and managing secrets with robust authentication and comprehensive security measures.

## ✨ Features

### 🔒 Security Features
- **JWT Token Authentication** - Stateless authentication with secure token management
- **HttpOnly Cookies** - Secure cookie-based session management
- **Password Hashing** - Bcrypt with 12 salt rounds for secure password storage
- **Rate Limiting** - Protection against brute force attacks
- **Input Validation** - Comprehensive server-side and client-side validation
- **CORS Protection** - Configured for secure cross-origin requests
- **Helmet Security** - HTTP security headers and CSP protection

### 👤 User Authentication
- **Secure Registration** - Email validation and password strength requirements
- **Password Requirements** - 6-8 characters with lowercase, uppercase, and number
- **Show/Hide Password** - User-friendly password visibility toggle
- **Email Validation** - Real-time email format validation
- **Session Management** - Automatic login state management

### 🎨 Modern UI/UX
- **Glassmorphism Design** - Beautiful glass-like interface
- **Responsive Layout** - Works perfectly on all devices
- **Dark Theme** - Easy on the eyes with gradient backgrounds
- **Smooth Animations** - Engaging user interactions
- **Real-time Feedback** - Toast notifications and validation messages

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd secrets-web-app
   ```

2. **Install server dependencies**
   ```bash
   npm install
   ```

3. **Install client dependencies**
   ```bash
   cd client
   npm install
   cd ..
   ```

4. **Create environment file**
   ```bash
   # Create .env file in root directory
   echo "PORT=5000
   NODE_ENV=development
   JWT_SECRET=your-super-secret-jwt-key-change-in-production
   CORS_ORIGIN=https://secret-web-app.onrender.com
   RATE_LIMIT_WINDOW_MS=900000
   RATE_LIMIT_MAX_REQUESTS=100" > .env
   ```

5. **Start the development servers**

   **Option 1: Run both servers simultaneously**
   ```bash
   # Terminal 1 - Start backend server
   npm run dev
   
   # Terminal 2 - Start frontend server
   npm run client
   ```

   **Option 2: Run servers separately**
   ```bash
   # Backend server (port 5000)
   npm start
   
   # Frontend server (port 3000)
   cd client && npm start
   ```

6. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
secrets-web-app/
├── server.js                 # Main server file
├── package.json             # Server dependencies
├── .env                     # Environment variables
├── client/                  # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── contexts/        # Authentication context
│   │   ├── App.js          # Main app component
│   │   └── index.js        # React entry point
│   └── package.json        # Client dependencies
└── README.md               # This file
```

## 🔧 API Endpoints

### Authentication
- `POST /api/register` - User registration
- `POST /api/login` - User login
- `POST /api/logout` - User logout
- `GET /api/profile` - Get user profile (protected)

### Health Check
- `GET /api/health` - Server health status

## 🛡️ Security Implementation

### Password Security
- **Hashing**: Bcrypt with 12 salt rounds
- **Requirements**: 6-8 characters, lowercase, uppercase, number
- **Validation**: Real-time strength checking

### Session Security
- **JWT Tokens**: 24-hour expiration
- **HttpOnly Cookies**: Prevents XSS attacks
- **Secure Flags**: HTTPS-only in production
- **SameSite**: Strict cookie policy

### API Security
- **Rate Limiting**: 100 requests per 15 minutes
- **Input Validation**: Express-validator middleware
- **CORS**: Configured for secure origins
- **Helmet**: Security headers and CSP

## 🎯 Features in Detail

### Registration Process
1. **Name Validation**: 2-50 characters
2. **Email Validation**: Format and uniqueness check
3. **Password Validation**: Real-time strength indicator
4. **Success**: Automatic login and redirect to dashboard

### Login Process
1. **Email Validation**: Format checking
2. **Password Verification**: Secure comparison
3. **Session Creation**: JWT token with secure cookies
4. **Redirect**: To protected dashboard

### Dashboard Features
- **User Information**: Display account details
- **Security Status**: Real-time security indicators
- **Session Management**: Active session display
- **Responsive Design**: Works on all devices

## 🔒 Security Best Practices

### Password Requirements
- Minimum 6 characters, maximum 8 characters
- Must contain at least one lowercase letter
- Must contain at least one uppercase letter
- Must contain at least one number

### Session Management
- Tokens expire after 24 hours
- HttpOnly cookies prevent XSS
- Secure flags in production
- Automatic logout on token expiration

### Input Validation
- Server-side validation with express-validator
- Client-side validation for immediate feedback
- Email format validation
- XSS protection through input sanitization

## 🚀 Deployment

### Production Setup
1. Set `NODE_ENV=production`
2. Change `JWT_SECRET` to a strong, unique key
3. Configure `CORS_ORIGIN` to your domain
4. Build the React app: `npm run build`
5. Deploy to your preferred hosting service

### Environment Variables
```bash
PORT=5000                          # Server port
NODE_ENV=production               # Environment
JWT_SECRET=your-secret-key       # JWT signing key
CORS_ORIGIN=https://yourdomain.com # Allowed origins
```

## 🛠️ Development

### Available Scripts
- `npm start` - Start production server
- `npm run dev` - Start development server with nodemon
- `npm run client` - Start React development server
- `npm run build` - Build React app for production

### Code Structure
- **Backend**: Express.js with middleware pattern
- **Frontend**: React with functional components and hooks
- **State Management**: React Context for authentication
- **Styling**: CSS with modern design patterns

## 🔍 Testing

The application includes comprehensive validation and error handling:

- **Form Validation**: Real-time client-side validation
- **API Validation**: Server-side input validation
- **Error Handling**: User-friendly error messages
- **Security Testing**: Rate limiting and authentication checks

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🔐 Security Notes

- Change the JWT secret in production
- Use HTTPS in production
- Regularly update dependencies
- Monitor for security vulnerabilities
- Implement proper logging in production

---

**Built with ❤️ and security in mind** 

---

## How to Fix

### 1. **Clear Cookies and Local Storage**
- Your browser may have an old session cookie from localhost or a previous deployment.
- **Action:**  
  - Open your browser’s DevTools (F12) → Application/Storage tab.
  - Clear cookies and local storage for both:
    - `https://secret-web-app.onrender.com`
    - `https://secret-web-app.onrender.com`
  - Refresh the page.

---

### 2. **Check CORS and Cookie Settings**

- Your backend must allow credentials (cookies) from your frontend.
- Your frontend axios config should have:
  ```js
  axios.defaults.withCredentials = true;
  ```
- Your backend CORS config should look like:
  ```js
  app.use(cors({
    origin: 'https://secret-web-app.onrender.com',
    credentials: true
  }));
  ```
- **Double-check:**  
  - `CORS_ORIGIN` is set to `https://secret-web-app.onrender.com` in backend environment variables.
  - Backend is redeployed after this change.

---

### 3. **Check AuthContext Logic**

- On app load, your frontend calls `/api/profile` to check if the user is authenticated.
- If the backend does not return a valid user, the frontend should redirect to `/login`.

**If you see the dashboard with empty data, it means:**
- The `/api/profile` call is returning a 200 response, but with missing or invalid user data.

---

### 4. **Test the API Directly**

- Open your browser and go to:  
  `https://secret-web-app.onrender.com/api/profile`
- Do you get a valid JSON with user info, or an error/empty object?
- If you get an error, your session is not set up correctly.

---

### 5. **Force Logout and Try Again**

- Click the Logout button.
- You should be redirected to the login page.
- Try logging in again.

---

## **Summary Table of What to Check**

| Step                | What to Do                                                                 |
|---------------------|----------------------------------------------------------------------------|
| Clear Cookies       | Remove cookies/local storage for both frontend and backend URLs             |
| CORS Config         | Backend: `origin` set to frontend URL, `credentials: true`                 |
| Axios Config        | Frontend: `axios.defaults.withCredentials = true`                          |
| Test /api/profile   | Should return user info if logged in, error if not                         |
| Logout/Login Flow   | Should redirect to login if not authenticated                              |

---

**If you follow these steps, you should see the login page if not authenticated, and valid user info if logged in.**

If you still have issues, let me know what you see at `/api/profile` and after clearing cookies! 
import { useState, useRef } from 'react';
import './ContactForm.css';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    message: '',
    countryCode: '+44'
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [charCount, setCharCount] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const phoneInputRef = useRef(null);

  const countries = [
    { code: '+44', flag: '🇬🇧', name: 'UK' },
    { code: '+1', flag: '🇺🇸', name: 'US' },
    { code: '+91', flag: '🇮🇳', name: 'IN' },
    { code: '+33', flag: '🇫🇷', name: 'FR' },
    { code: '+49', flag: '🇩🇪', name: 'DE' },
    { code: '+86', flag: '🇨🇳', name: 'CN' },
    { code: '+81', flag: '🇯🇵', name: 'JP' }
  ];

  // Validation functions
  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePassword = (password) => {
    // At least 8 characters, 1 uppercase, 1 lowercase, 1 number
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
    return re.test(password);
  };

  const validatePhone = (phone) => {
    const cleanPhone = phone.replace(/\D/g, '');
    return cleanPhone.length >= 10;
  };

  const showError = (field, message) => {
    setErrors(prev => ({ ...prev, [field]: message }));
  };

  const clearError = (field) => {
    setErrors(prev => ({ ...prev, [field]: '' }));
  };

  const clearAllErrors = () => {
    setErrors({});
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'message') {
      setCharCount(value.length);
    }

    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      clearError(name);
    }
  };

  // Handle phone input formatting
  const handlePhoneChange = (e) => {
    let value = e.target.value.replace(/\D/g, '');
    const countryCode = formData.countryCode;

    if (countryCode === '+1' || countryCode === '+44') {
      if (value.length >= 6) {
        value = value.replace(/(\d{3})(\d{3})(\d{0,4})/, '($1) $2-$3');
      } else if (value.length >= 3) {
        value = value.replace(/(\d{3})(\d{0,3})/, '($1) $2');
      }
    } else {
      if (value.length >= 5) {
        value = value.replace(/(\d{0,5})(\d{0,5})/, '$1-$2');
      }
    }

    setFormData(prev => ({ ...prev, phone: value }));
    
    if (errors.phone) {
      clearError('phone');
    }
  };

  // Handle field blur events for real-time validation
  const handleBlur = (field) => {
    const value = formData[field]?.trim();

    switch (field) {
      case 'firstName':
        if (!value) {
          showError('firstName', 'First name is required');
        } else if (value.length < 2) {
          showError('firstName', 'First name must be at least 2 characters');
        } else {
          clearError('firstName');
        }
        break;
      case 'lastName':
        if (!value) {
          showError('lastName', 'Last name is required');
        } else if (value.length < 2) {
          showError('lastName', 'Last name must be at least 2 characters');
        } else {
          clearError('lastName');
        }
        break;
      case 'email':
        if (!value) {
          showError('email', 'Email is required');
        } else if (!validateEmail(value)) {
          showError('email', 'Please enter a valid email address');
        } else {
          clearError('email');
        }
        break;
      case 'password':
        if (!value) {
          showError('password', 'Password is required');
        } else if (!validatePassword(value)) {
          showError('password', 'Password must be at least 8 characters with uppercase, lowercase, and number');
        } else {
          clearError('password');
        }
        break;
      case 'phone':
        if (!value) {
          showError('phone', 'Phone number is required');
        } else if (!validatePhone(formData.countryCode + value)) {
          showError('phone', 'Please enter a valid phone number');
        } else {
          clearError('phone');
        }
        break;
      case 'message':
        if (!value) {
          showError('message', 'Message is required');
        } else if (value.length < 10) {
          showError('message', 'Message must be at least 10 characters long');
        } else {
          clearError('message');
        }
        break;
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    clearAllErrors();
    let isValid = true;

    // Validate all fields
    Object.keys(formData).forEach(field => {
      if (field === 'countryCode') return;

      const value = formData[field]?.trim();

      if (!value) {
        showError(field, `${field.charAt(0).toUpperCase() + field.slice(1).replace(/([A-Z])/g, ' $1')} is required`);
        isValid = false;
      } else {
        // Additional validations
        if (field === 'email' && !validateEmail(value)) {
          showError('email', 'Please enter a valid email address');
          isValid = false;
        } else if (field === 'password' && !validatePassword(value)) {
          showError('password', 'Password must be at least 8 characters with uppercase, lowercase, and number');
          isValid = false;
        } else if (field === 'phone' && !validatePhone(formData.countryCode + value)) {
          showError('phone', 'Please enter a valid phone number');
          isValid = false;
        } else if (field === 'message' && value.length < 10) {
          showError('message', 'Message must be at least 10 characters long');
          isValid = false;
        } else if ((field === 'firstName' || field === 'lastName') && value.length < 2) {
          showError(field, `${field === 'firstName' ? 'First' : 'Last'} name must be at least 2 characters`);
          isValid = false;
        }
      }
    });

    if (isValid) {
      setIsLoading(true);

      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        
        // Log form data (in real app, this would be sent to API)
        console.log('Form submitted:', {
          ...formData,
          phone: formData.countryCode + ' ' + formData.phone
        });

        // Reset form
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          phone: '',
          message: '',
          countryCode: '+44'
        });
        setCharCount(0);

        // Hide success message after 5 seconds
        setTimeout(() => {
          setShowSuccess(false);
        }, 5000);
      }, 2000);
    }
  };

  return (
    <div className="contact-container">
      <div className="main-contact-heading">
        <h2 className="main-title contactUs-heading">Contact US</h2>
        <div className="title-underline"></div>
      </div>

      <div className="contact-main-div">
        <div className="container">
          <div className="left-section"></div>

          <div className="right-section">
            <h1 className="title">Let's Get In Touch.</h1>
            
            <p className="subtitle">
              Or just reach out manually to{' '}
              <a href="mailto:hello@digicard.com">hello@digicard.com</a>.
            </p>

            <div className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className={`form-input ${errors.firstName ? 'error' : ''}`}
                    placeholder="Enter your first name..."
                    value={formData.firstName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('firstName')}
                    required
                  />
                  {errors.firstName && (
                    <div className="error-message">{errors.firstName}</div>
                  )}
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className={`form-input ${errors.lastName ? 'error' : ''}`}
                    placeholder="Enter your last name..."
                    value={formData.lastName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('lastName')}
                    required
                  />
                  {errors.lastName && (
                    <div className="error-message">{errors.lastName}</div>
                  )}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`form-input ${errors.email ? 'error' : ''}`}
                  placeholder="Enter your email address..."
                  value={formData.email}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('email')}
                  required
                />
                {errors.email && (
                  <div className="error-message">{errors.email}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="password">Password</label>
                <div className="password-input-container">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    name="password"
                    className={`form-input password-input ${errors.password ? 'error' : ''}`}
                    placeholder="Enter your password..."
                    value={formData.password}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur('password')}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {errors.password && (
                  <div className="error-message">{errors.password}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="phone">Phone Number</label>
                <div className="phone-input-container">
                  <select
                    className="country-select"
                    value={formData.countryCode}
                    onChange={(e) => setFormData(prev => ({ ...prev, countryCode: e.target.value }))}
                  >
                    {countries.map(country => (
                      <option key={country.code} value={country.code}>
                        {country.flag} {country.code}
                      </option>
                    ))}
                  </select>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    ref={phoneInputRef}
                    className={`form-input phone-input ${errors.phone ? 'error' : ''}`}
                    placeholder="(000) 000-0000"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    onBlur={() => handleBlur('phone')}
                    required
                  />
                </div>
                {errors.phone && (
                  <div className="error-message">{errors.phone}</div>
                )}
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className={`form-input message-textarea ${errors.message ? 'error' : ''}`}
                  placeholder="Enter your message here..."
                  maxLength="500"
                  value={formData.message}
                  onChange={handleInputChange}
                  onBlur={() => handleBlur('message')}
                  required
                />
                <div className="char-counter">
                  <span className={charCount >= 450 ? 'char-warning' : ''}>
                    {charCount}
                  </span>/500
                </div>
                {errors.message && (
                  <div className="error-message">{errors.message}</div>
                )}
              </div>

              <button
                type="button"
                className={`submit-btn ${isLoading ? 'loading' : ''}`}
                disabled={isLoading}
                onClick={handleSubmit}
              >
                <span>{isLoading ? 'Sending...' : 'Submit Form'}</span>
                <span className="arrow-icon">→</span>
              </button>

              {showSuccess && (
                <div className="success-message show">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
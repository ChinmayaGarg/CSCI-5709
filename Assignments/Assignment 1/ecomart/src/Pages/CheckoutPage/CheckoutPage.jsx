import React, { useState } from 'react';
import './CheckoutPage.css';
import ShippingDetailsForm from '../../Components/ShippingDetailsForm';

const CheckoutPage = () => {
  const [contactDetails, setContactDetails] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [sameAsShipping, setSameAsShipping] = useState(true);

  const validateField = (name, value) => {
    let error = '';
    switch (name) {
      case 'firstName':
        if (!value) error = 'First name is required';
        break;
      case 'lastName':
        if (!value) error = 'Last name is required';
        break;
      case 'email':
        if (!value) {
          error = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Email is invalid';
        }
        break;
      case 'phoneNumber':
        if (!value) {
          error = 'Phone number is required';
        } else if (!/^\d{10}$/.test(value)) {
          error = 'Phone number must be 10 digits';
        }
        break;
      default:
        break;
    }
    return error;
  };

  const handleContactChange = e => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setContactDetails({ ...contactDetails, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleBlur = e => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const validate = () => {
    let validationErrors = {};
    Object.keys(contactDetails).forEach(key => {
      const error = validateField(key, contactDetails[key]);
      if (error) validationErrors[key] = error;
    });
    return validationErrors;
  };

  const handleCheckboxChange = () => {
    setSameAsShipping(!sameAsShipping);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // Handle form submission
      console.log('Contact Details:', contactDetails);
    }
  };

  const handlePhoneNumberKeyDown = e => {
    // Prevent non-numeric input
    if (!/[0-9]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Tab') {
      e.preventDefault();
    }
  };

  return (
    <div className="checkout-page">
      <header className="checkout-header">
        <div className="logo">EcoMart</div>
        <div className="secure-checkout">Secure Checkout</div>
      </header>
      <main className="checkout-container">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="contact-details">
            <h2>Contact Details</h2>
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={contactDetails.firstName}
                onChange={handleContactChange}
                onBlur={handleBlur}
              />
              {errors.firstName && <p className="error">{errors.firstName}</p>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={contactDetails.lastName}
                onChange={handleContactChange}
                onBlur={handleBlur}
              />
              {errors.lastName && <p className="error">{errors.lastName}</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={contactDetails.email}
                onChange={handleContactChange}
                onBlur={handleBlur}
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="tel"
                name="phoneNumber"
                value={contactDetails.phoneNumber}
                onChange={handleContactChange}
                onBlur={handleBlur}
                maxLength="10"
                pattern="\d*"
                inputMode="numeric"
                onKeyDown={handlePhoneNumberKeyDown}
              />
              {errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
            </div>
          </div>
          <div className="shipping-details">
            <h2>Shipping Details</h2>
            <ShippingDetailsForm />
            <div className="form-group shippingCheckbox">
              <input type="checkbox" checked={sameAsShipping} onChange={handleCheckboxChange} />
              <label>My shipping and Billing address are the same</label>
            </div>
            {!sameAsShipping && (
              <>
                <h2>Billing Details</h2>
                <ShippingDetailsForm />
              </>
            )}
          </div>
          <button type="submit" className="continue-button">
            Continue
          </button>
        </form>
        <div className="order-summary">
          <h2>Order Summary</h2>
          <div className="summary-item">
            <div className="product-image">Product Image</div>
            <div className="product-details">
              <p>Pure set</p>
              <p>$65.00</p>
            </div>
          </div>
          <div className="summary-total">
            <p>Subtotal: $160.00</p>
            <p>Sales tax (6.5%): $4.23</p>
            <p>Shipping Fee: FREE</p>
            <h3>Total due: $164.23</h3>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CheckoutPage;

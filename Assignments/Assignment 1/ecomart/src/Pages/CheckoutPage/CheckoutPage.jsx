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

  const [sameAsShipping, setSameAsShipping] = useState(true);

  const handleContactChange = e => {
    const { name, value } = e.target;
    setContactDetails({ ...contactDetails, [name]: value });
  };

  const handleCheckboxChange = () => {
    setSameAsShipping(!sameAsShipping);
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission
    console.log('Contact Details:', contactDetails);
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
              <input type="text" name="firstName" value={contactDetails.firstName} onChange={handleContactChange} />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" name="lastName" value={contactDetails.lastName} onChange={handleContactChange} />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" name="email" value={contactDetails.email} onChange={handleContactChange} />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input type="tel" name="phoneNumber" value={contactDetails.phoneNumber} onChange={handleContactChange} />
            </div>
          </div>
          <div className="shipping-details">
            <h2>Shipping Details</h2>
            <ShippingDetailsForm />
            <div className="form-group shippingCheckbox">
              <input type="checkbox" checked={sameAsShipping} onChange={handleCheckboxChange} />
              <label>My shipping and Billing address are the same</label>
            </div>
            {!sameAsShipping ? (
              <>
                <h2>Billing Details</h2>
                <ShippingDetailsForm />
              </>
            ) : (
              ''
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

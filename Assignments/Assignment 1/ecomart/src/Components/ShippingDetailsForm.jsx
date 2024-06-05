import React from 'react';
import './ShippingDetailsForm.css';
import { useState } from 'react';

const ShippingDetailsForm = () => {
  const [shippingDetails, setShippingDetails] = useState({
    streetAddress: '',
    aptSuitUnit: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: ''
  });

  const handleShippingChange = e => {
    const { name, value } = e.target;
    setShippingDetails({ ...shippingDetails, [name]: value });
  };

  return (
    <div>
      {/* <h2>Shipping Details</h2> */}
      <div className="form-group">
        <label>Street Address</label>
        <input type="text" name="streetAddress" value={shippingDetails.streetAddress} onChange={handleShippingChange} />
      </div>
      <div className="form-group">
        <label>Apt / Suit / Unit</label>
        <input type="text" name="aptSuitUnit" value={shippingDetails.aptSuitUnit} onChange={handleShippingChange} />
      </div>
      <div className="form-group">
        <label>City</label>
        <input type="text" name="city" value={shippingDetails.city} onChange={handleShippingChange} />
      </div>
      <div className="form-group">
        <label>State / Province</label>
        <input type="text" name="stateProvince" value={shippingDetails.stateProvince} onChange={handleShippingChange} />
      </div>
      <div className="form-group">
        <label>Postal Code</label>
        <input type="text" name="postalCode" value={shippingDetails.postalCode} onChange={handleShippingChange} />
      </div>
      <div className="form-group">
        <label>Country</label>
        <input type="text" name="country" value={shippingDetails.country} onChange={handleShippingChange} />
      </div>
    </div>
  );
};

export default ShippingDetailsForm;

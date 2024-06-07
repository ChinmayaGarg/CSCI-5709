import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './../App.css';

function RegistrationPage() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'firstName' || name === 'lastName') {
      if (/[^a-zA-Z]/.test(value)) return;
    }
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...errors };
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    switch (name) {
      case 'firstName':
        fieldErrors.firstName = namePattern.test(value) ? '' : 'First name should contain only letters';
        break;
      case 'lastName':
        fieldErrors.lastName = namePattern.test(value) ? '' : 'Last name should contain only letters';
        break;
      case 'email':
        fieldErrors.email = emailPattern.test(value) ? '' : 'Invalid email format';
        break;
      case 'password':
        fieldErrors.password = passwordPattern.test(value)
          ? ''
          : 'Password must contain at least one letter, one number, and one special character from !@#$%^&*';
        break;
      case 'confirmPassword':
        fieldErrors.confirmPassword = value === form.password ? '' : 'Passwords do not match';
        break;
      default:
        break;
    }

    setErrors(fieldErrors);
  };

  const validateForm = useCallback(() => {
    let formErrors = {};
    const namePattern = /^[a-zA-Z]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;

    if (!form.firstName || !namePattern.test(form.firstName)) {
      formErrors.firstName = 'First name should contain only letters';
    }
    if (!form.lastName || !namePattern.test(form.lastName)) {
      formErrors.lastName = 'Last name should contain only letters';
    }
    if (!form.email || !emailPattern.test(form.email)) {
      formErrors.email = 'Invalid email format';
    }
    if (!form.password || !passwordPattern.test(form.password)) {
      formErrors.password =
        'Password must contain at least one letter, one number, and one special character from !@#$%^&*';
    }
    if (form.password !== form.confirmPassword) {
      formErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  }, [form]);

  const handleBlur = e => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/profile', { state: form });
    }
  };

  const isFormValid = () => {
    return !Object.values(errors).some(error => error !== '') && Object.values(form).every(field => field !== '');
  };

  const initialRender = useRef(0);

  useEffect(() => {
    initialRender.current < 1 ? (initialRender.current += 1) : validateForm();
  }, [form, validateForm, initialRender]);

  return (
    <div className="container">
      <h2>Profile Registration</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={form.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.firstName && <p className="error">{errors.firstName}</p>}

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={form.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={form.email} onChange={handleChange} onBlur={handleBlur} />
        {errors.email && <p className="error">{errors.email}</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && <p className="error">{errors.password}</p>}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={form.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}

        <button type="submit" disabled={!isFormValid()}>
          Register
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;

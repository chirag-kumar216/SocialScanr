import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons
import styles from './styles.module.css';

const Signup = () => {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValidation, setPasswordValidation] = useState(''); // Validation message
  const navigate = useNavigate();

  const handlePasswordChange = (value) => {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;

    if (value === '' || passwordRegex.test(value)) {
      setPasswordValidation(''); // Clear the validation message if the password is valid
    } else {
      setPasswordValidation('Password must start with a capital letter, contain at least one special character, and have a minimum length of 8 characters.');
    }

    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate the password again before submitting the form
    const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
    if (!passwordRegex.test(Password)) {
      setPasswordValidation('Password must start with a capital letter, contain at least one special character, and have a minimum length of 8 characters.');
      return;
    }

    axios
      .post('http://localhost:3001/register', { FirstName, LastName, Email, Password })
      .then((res) => {
        if (res.data.Status === 'oldUser') {
          alert('User Already Exists!');
          localStorage.setItem('name',JSON.stringify({FirstName}))
        } else {
          alert('User Created Successfully!');
          localStorage.setItem('name',JSON.stringify({FirstName}))
          navigate('/');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles.signup_container}>
      <div className={styles.signup_form_container}>
        <div className={styles.left}>
          <h1>Welcome Back</h1>
          <Link to="/">
            <button type="button" className={styles.white_btn}>
              Sign in
            </button>
          </Link>
        </div>
        <div className={styles.right}>
          <form className={styles.form_container} onSubmit={handleSubmit}>
            <h1>Create Account</h1>
            <div className={styles.input_container}>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={(e) => setFirstName(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={(e) => setLastName(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                required
                className={styles.input}
              />
            </div>
            <div className={styles.input_container}>
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                name="password"
                onChange={(e) => handlePasswordChange(e.target.value)} // Updated
                required
                className={styles.input}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className={styles.password_toggle_button}
                style={{ marginRight: '-25px' }}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {passwordValidation && (
              <div className={styles.error_msg}>
                <p style={{ fontSize: '14px' }}>{passwordValidation}</p>
              </div>
            )}
            <button type="submit" className={styles.green_btn}>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;

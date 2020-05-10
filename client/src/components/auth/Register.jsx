import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import styled from 'styled-components';

const RegisterContainer = styled.div`
  border-radius: 10px;
  width: 60%;
  padding: 6rem 2rem;
  margin: 10rem auto;
  background-color: var(--card-color);
  @media (max-width: 700px) {
    width: 100%;
    text-align: center;
    margin: 7rem auto;
    form input {
      margin: 0 auto;
    }
  }
  h1 {
    color: var(--light-color);
  }
  p {
    color: var(--dark-color);
  }
  form {
    margin: 1.2rem 0;
    display: block;
    margin-top: 0.3rem;
    color: #888;
  }
  form div {
    margin: 1.2rem 0;
  }
  form input {
    display: block;
    width: 90%;
    padding: 0.4rem;
    font-size: 1.2rem;
    border: 0.5px solid var(--dark-color);
    background-color: var(--title-color);
    color: var(--light-color);
  }
  form input[type='submit'] {
    width: 25%;
    border: none;
    background-color: var(--primary-color);
  }
`;

const Register = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      // alert goes here
      dispatch(setAlert('Passwords do not match', 'danger'));
    } else {
      dispatch(register({ name, email, password }));
    }
  };

  const { name, email, password, password2 } = formData;

  return (
    <RegisterContainer>
      <h1 className="large">Sign Up</h1>
      <p className="lead">
        <i className="fa fa-user"></i> Create Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => onChange(e)}
            name="name"
            required
          />
        </div>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => onChange(e)}
            placeholder="Email Address"
            name="email"
            required
          />
          <small>
            This site uses Gravatar so if you want a profile image, use a
            Gravatar email
          </small>
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="6"
            value={password}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            name="password2"
            minLength="6"
            value={password2}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Register" />
      </form>
      <p className="my-1">
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </RegisterContainer>
  );
};

export default Register;

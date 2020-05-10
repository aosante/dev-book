import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { login } from '../../actions/auth';
import styled from 'styled-components';

const LoginContainer = styled.div`
  border-radius: 10px;
  width: 60%;
  padding: 6rem 2rem;
  margin: 10rem auto;
  background-color: var(--card-color);
  @media (max-width: 700px) {
    margin: 7rem auto;
    width: 100%;
    text-align: center;
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

const Login = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <LoginContainer>
      <h1 className="large">Sign In</h1>
      <p className="lead">
        <i className="fa fa-user" /> Sign Into Your Account
      </p>
      <form onSubmit={(e) => onSubmit(e)}>
        <div>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={(e) => onChange(e)}
            required
            autoComplete="username"
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            autoComplete="current-password"
          />
        </div>
        <input type="submit" className="btn btn-primary" value="Login" />
      </form>
      <p className="my-1">
        Don't have an account? <Link to="/register">Sign Up</Link>
      </p>
    </LoginContainer>
  );
};

export default Login;

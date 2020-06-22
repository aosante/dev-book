import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions/auth';
import logo from '../../img/logo.png';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  opacity: 0.9;
  ul {
    display: flex;
  }
  a {
    color: var(--light-color);
    padding: 0.45rem;
    margin: 0 2rem;
    font-size: 19px;
  }
  a:hover {
    color: var(--primary-color);
  }
  .welcome span {
    margin-right: 0.6rem;
  }
  .logo {
    color: var(--primary-color);
  }
  .logo img {
    width: 180px;
  }
  @media (max-width: 700px) {
    display: block;
    text-align: center;
    position: relative;
    ul {
      text-align: center;
      justify-content: center;
    }
    a {
      padding: 0.25rem;
      margin: 0 1.2rem;
      font-size: 15px;
    }
    h1 {
      margin-bottom: 1rem;
    }
  }
`;

const SignupLink = styled.li`
  a {
    display: inline-block;
    background: var(--primary-color);
    color: #fff;
    padding: 5px 12px;
    font-size: 19px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-right: 0.5rem;
    transition: opacity 0.2s ease-in;
    outline: none;
    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.3);
  }
  a:hover {
    color: var(--light-color);
    background-color: var(--hover-primary);
  }
  @media (max-width: 700px) {
    a {
      background-color: transparent;
      font-size: 15px;
      box-shadow: none;
      padding: 0.25rem;
      margin: 0 1.2rem;
      transform: translateY(-2.6px);
    }
  }
`;

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  const dispatch = useDispatch();

  const authLinks = (
    <ul>
      <li>
        <Link to="/profiles">Devs</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
      <li>
        <Link to="/dashboard">
          {' '}
          <i className="fa fa-user"></i>{' '}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={() => dispatch(logout())} href="#!">
          <i className="fa fa-sign-out"></i>
          {'  '} <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Devs</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <SignupLink>
        <Link to="/register">Sign Up</Link>
      </SignupLink>
    </ul>
  );
  return (
    <Nav>
      <h1>
        <Link className="logo" to="/">
          <img src={logo} alt="" />
        </Link>
      </h1>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </Nav>
  );
};

export default Navbar;

import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import bg from '../../img/hero-bg.jpeg';
import styled from 'styled-components';

const Section = styled.section`
  position: relative;
  background: url(${bg}) no-repeat center center/cover;
  height: 100vh;
  .overlay {
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .inner {
    color: #fff;
    height: 100%;
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 700px) {
    .inner {
      align-items: center;
    }
  }

  h1 {
    font-size: 4rem;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  .buttons a {
    margin-top: 16px;
  }
  .buttons a:hover {
    background-color: var(--hover-primary);
  }
`;

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Section>
      <div className="overlay">
        <div className="inner">
          <h1>Dev Book</h1>
          <p>
            Create a profile, share your portfolio, and get let the world know
            what you can do.
          </p>
          <div className="buttons">
            <Link to="/register" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Landing;

import React from 'react';
import spinner from './loader.gif';

export default () => (
  <>
    <img
      src={spinner}
      style={{
        width: '200px',
        margin: 'auto',
        display: 'block',
        transform: 'translateY(50px)',
      }}
      alt="Loading..."
    />
  </>
);

import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const AlertContainer = styled.div`
  margin: 2rem auto 2.5rem;
  transform: translateY(80px);
  border-radius: 5px;
  opacity: 0.7;
`;

const Alert = () => {
  const alerts = useSelector((state) => state.alert);
  return (
    alerts !== null &&
    alerts.length > 0 &&
    alerts.map((alert) => (
      <AlertContainer
        key={alert.id}
        className={`alert alert-${alert.alertType}`}
      >
        {alert.msg}
      </AlertContainer>
    ))
  );
};

export default Alert;

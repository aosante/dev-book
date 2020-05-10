import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

const AlertContainer = styled.div`
  margin: 2rem auto 2.5rem;
  transform: translateY(80px);
  border-radius: 5px;
  opacity: 0.7;
`;

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertContainer key={alert.id} className={`alert alert-${alert.alertType}`}>
      {alert.msg}
    </AlertContainer>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);

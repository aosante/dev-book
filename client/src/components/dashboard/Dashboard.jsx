import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import DashboardActions from './DashboardActions';
import Experience from './Experience';
import Education from './Education';
import { getCurrentProfile, deleteAccount } from '../../actions/profile';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  margin: 6.5rem auto 0rem;
`;

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);
  const profile = useSelector((state) => state.profile.profile);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentProfile());
    // eslint-disable-next-line
  }, [getCurrentProfile]);

  return loading && profile === null ? (
    <Spinner></Spinner>
  ) : (
    <DashboardContainer>
      <h1 className="large text-primary">Dashboard</h1>
      <p className="lead">
        <i className="fa fa-user"> Welcome {user && user.name}</i>
      </p>
      {profile !== null ? (
        <>
          <DashboardActions />
          <Experience experience={profile.experience} />
          <Education education={profile.education} />

          <div className="my-2">
            <button
              className="btn btn-danger"
              onClick={() => dispatch(deleteAccount())}
            >
              <i className="fa fa-user-minus"></i> Delete My Account
            </button>
          </div>
        </>
      ) : (
        <>
          <p>You have not yet setup a profile, please add some info</p>{' '}
          <Link to="/create-profile" className="btn btn-primary my-1">
            Create Profile
          </Link>
        </>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;

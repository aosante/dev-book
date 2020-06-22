import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Spinner from '../layout/Spinner';
import ProfileItem from './ProfileItem';
import { getProfiles } from '../../actions/profile';
import styled from 'styled-components';

const ProfilesContainer = styled.div`
  margin-top: 7rem;
  h1 {
    color: var(--light-color);
  }
  .lead {
    color: var(--dark-color);
  }
`;

const Profiles = () => {
  const profiles = useSelector((state) => state.profile.profiles);
  const loading = useSelector((state) => state.profile.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfiles());
    // eslint-disable-next-line
  }, [getProfiles]);

  return loading ? (
    <Spinner></Spinner>
  ) : (
    <ProfilesContainer>
      <h1 className="large text-primary">Dev</h1>
      <p className="lead">
        <i className="fa fa-connectdevelop"></i> Find and connect with other
        talented developers
      </p>
      <div>
        {profiles.length > 0 ? (
          profiles.map((profile) => (
            <ProfileItem key={profile._id} profile={profile} />
          ))
        ) : (
          <h4>No profiles found</h4>
        )}
      </div>
    </ProfilesContainer>
  );
};

export default Profiles;

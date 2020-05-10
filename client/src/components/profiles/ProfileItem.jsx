import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ProfileItemContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 4fr 2fr;
  align-items: center;
  grid-gap: 2rem;
  padding: 1rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  background: var(--card-color);
  color: var(--light-color);
  p {
    color: var(--dark-color);
  }
  a:hover {
    background-color: var(--hover-primary);
  }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    text-align: center;
    ul {
      display: none;
    }
    img {
      width: 200px;
      margin: auto;
    }
  }
`;

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <ProfileItemContainer>
      <img className="round-img" src={avatar} alt="" />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {company && <span>at {company}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, i) => (
          <li key={i} className="text-primary">
            <i className="fa fa-check"></i> {skill}
          </li>
        ))}
      </ul>
    </ProfileItemContainer>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;

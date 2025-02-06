// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
const TeamMember = ({ name, position, experience, linkedIn, image }) => {
  return (
    <div className="team-member">
      <div className="profile-pic">
        <img src={image} alt={`${name}'s profile`} />
      </div>
      <h3>{name}</h3>
      <h4>{position}</h4>
      <p>{experience}</p>
      {linkedIn && <div className="linkedin-icon">in</div>}
    </div>
  );
};

export default TeamMember;


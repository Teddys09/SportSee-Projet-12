import React from 'react';
import useFetch from '../utils/useFetch';
import { Link } from 'react-router-dom';
/**
 * display the list of users and use a link to redirect to the user's page
 * @returns {JSX.Element}
 */
const User = () => {
  const generalInfoFirstUser = useFetch('http://localhost:3000/user/12');
  const generalInfoSecondUser = useFetch('http://localhost:3000/user/18');

  return (
    <div className="user-choose">
      <h2>Choisissez un utilisateur</h2>
      <div className="user-container">
        <Link to={'./profil?_id=' + generalInfoFirstUser?.data.id}>
          <h3>{generalInfoFirstUser?.data.userInfos.firstName}</h3>
        </Link>

        <Link to={'./profil?_id=' + generalInfoSecondUser?.data.id}>
          <h3>{generalInfoSecondUser?.data.userInfos.firstName}</h3>
        </Link>
      </div>
    </div>
  );
};

export default User;

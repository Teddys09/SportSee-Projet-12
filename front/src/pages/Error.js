import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-container">
      La page que vous recherchez n'existe pas !
      <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default Error;

import React from 'react';
import runningMan from '../assets/icons/runningMan.svg';
import bikeMan from '../assets/icons/bikeMan.svg';
import swimMan from '../assets/icons/swimMan.svg';
import weight from '../assets/icons/weight.svg';
import zenMan from '../assets/icons/zenMan.svg';
/**
 * Make horizontal banner
 * @returns {JSX.Element}
 */
const Banner = () => {
  return (
    <header>
      <div className="horizontal-banner">
        <div className="logo-name">
          <img src={runningMan} alt="runningMan" />
          <h1>SportSee</h1>
        </div>
        <h2>Accueil</h2>
        <h2>Profil</h2>
        <h2>Réglage</h2>
        <h2>Communauté</h2>
      </div>
      <div className="vertical-banner">
        <div className="icons-activity">
          <img src={zenMan} alt="zenMan" />
          <img src={swimMan} alt="swimMan" />
          <img src={bikeMan} alt="bikeMan" />
          <img src={weight} alt="weight" />
        </div>
        <h4>Copiryght, SportSee 2020</h4>
      </div>
    </header>
  );
};

export default Banner;

import React from 'react';
import Banner from '../components/Banner';
import Section from '../components/Section';
/**
 * Make a div and append the banner and the section components
 * @returns {JSX.Element}
 */
const Profil = () => {
  return (
    <div className="profil-page">
      <Banner />
      <Section />
    </div>
  );
};

export default Profil;

import React from 'react';
import useFetch from '../utils/useFetch';
import Activities from './graph/Activities';
import Performance from './graph/Performance';
import Score from './graph/Score';
import TimeAverage from './graph/TimeAverage';
import SideGraph from './SideGraph';
import PropTypes from 'prop-types';
/**
 * make a section with the user's graph
 * @returns {JSX.Element}
 */
const Section = () => {
  const url = window.location.href;
  const id = url.substring(url.lastIndexOf('=') + 1);

  const generalInfo = useFetch(`http://localhost:3000/user/${id}`);
  if (generalInfo) {
    return (
      <section>
        <div className="header-section">
          <h2>
            Bonjour
            <span className="red-word">
              {generalInfo?.data.userInfos.firstName}
            </span>
          </h2>
          <h3>Félicitation ! Vous avez explosé vos objectifs hier 👏</h3>
        </div>
        <div className="section-container">
          <div className="graph-container">
            <Activities id={id} />
            <div className="graph-row">
              <TimeAverage id={id} />
              <Performance id={id} />
              <Score id={id} />
            </div>
          </div>
          <SideGraph id={id} />
        </div>
      </section>
    );
  } else {
    return <div className="error">404 page not found</div>;
  }
};
// propTypes
Section.propTypes = {
  data: PropTypes.object,
};

export default Section;

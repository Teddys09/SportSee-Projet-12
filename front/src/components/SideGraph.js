import React, { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch';
import Burger from '../assets/icons/burger.svg';
import Apple from '../assets/icons/apple.svg';
import Proteins from '../assets/icons/proteins.svg';
import Calories from '../assets/icons/calories.svg';
import PropTypes from 'prop-types';
/**
 * Make a side div with the user count of calories, proteins, glucids and lipids
 * @param {String} id
 * @returns {JSX.Element}
 */
const SideGraph = (id) => {
  const generalInfo = useFetch(`http://localhost:3000/user/${id.id}`);
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(generalInfo?.data.keyData);
  }, [generalInfo]);

  if (data !== null && data !== undefined) {
    return (
      <div className="sideGraph-container">
        <div className="calories count-container">
          <img src={Calories} alt="calories" />
          <div className="sideGraph-text">
            <p>{data?.calorieCount}kcal</p>
            <p className="legend">Calories</p>
          </div>
        </div>
        <div className="proteins count-container">
          <img src={Proteins} alt="proteins" />
          <div className="sideGraph-text">
            <p>{data?.proteinCount}g</p>
            <p className="legend">Protéines</p>
          </div>
        </div>
        <div className="glucides count-container">
          <img src={Apple} alt="apple" />
          <div className="sideGraph-text">
            <p>{data?.carbohydrateCount}g</p>
            <p className="legend">Glucides</p>
          </div>
        </div>
        <div className="lipides count-container">
          <img src={Burger} alt="burger" />
          <div className="sideGraph-text">
            <p>{data?.lipidCount}g</p>
            <p className="legend">Lipides</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="sideGraph-container">
        <p>Vous n'avez pas encore de données</p>
      </div>
    );
  }
};
// propTypes
SideGraph.propTypes = {
  data: PropTypes.object,
  id: PropTypes.string,
};

export default SideGraph;

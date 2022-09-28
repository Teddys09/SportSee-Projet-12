import React, { useEffect, useState } from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import useFetch from '../../utils/useFetch';
import PropTypes from 'prop-types';
//import useMock from '../../utils/useMock';
/**
 * Make a graph with the user's score
 * @param {String} id
 * @returns {JSX.Element}
 */
const Score = (id) => {
  const infoGeneral = useFetch(`http://localhost:3000/user/${id.id}`);

  // const infoGeneral = useMock();
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(infoGeneral?.data.score || infoGeneral?.data.todayScore);
  }, [infoGeneral]);

  const todayScore = data;
  const scorePerCent = todayScore * 100;
  const rest = 100 - scorePerCent;
  const score = [
    { name: 'objectif', value: scorePerCent, fillColor: `red` },
    { name: 'objectif Restant', value: rest, fillColor: 'white' },
  ];
  const scoreUi = score[0].value + '%';

  const scoreMax = [{ name: 'Score', value: 100 }];

  return (
    <div className="score-container">
      <h4>Score</h4>

      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={scoreMax}
            dataKey="Base"
            innerRadius={0}
            outerRadius={80}
            fill="white"
            stroke="none"
          />
          <Pie
            dataKey="value"
            data={score}
            innerRadius={'60%'}
            outerRadius={'70%'}
            startAngle={180}
            endAngle={-360}
          >
            {score.map((base, index) => (
              <Cell
                key={`progresse-${index}`}
                fill={base.fillColor}
                cornerRadius="50%"
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      <div className="info-container">
        <p className="score-number">{scoreUi}</p>
        <p>
          de votre <br />
          objectif
        </p>
      </div>
    </div>
  );
};
// props type
Score.propTypes = {
  score: PropTypes.number,
};

export default Score;

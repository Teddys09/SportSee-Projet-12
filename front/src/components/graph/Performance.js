import React, { useEffect, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts';
import useFetch from '../../utils/useFetch';
import PropTypes from 'prop-types';
/**
 * Make a graph with the user's performance
 * @param {String} id
 * @returns {JSX.Element}
 */
const Performance = (id) => {
  const performance = useFetch(
    `http://localhost:3000/user/${id.id}/performance`
  );
  const [data, setData] = useState(null);
  useEffect(() => {
    const englishKind = [
      'cardio',
      'strength',
      'intensity',
      'endurance',
      'speed',
      'energy',
    ];
    const frenchKind = [
      'Cardio',
      'Force',
      'Intensité',
      'Endurance',
      'Vitesse',
      'Energie',
    ];
    performance?.data.data.map((item) => {
      item.kind = performance.data.kind[item.kind];

      if (englishKind.includes(item.kind)) {
        return (item.kind = frenchKind[englishKind.indexOf(item.kind)]);
      }

      return item;
    });
    setData(performance?.data.data);
  }, [performance]);

  if (data !== null && data !== undefined) {
    return (
      <div className="performance-container">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="60%" data={data}>
            <PolarGrid />
            <PolarAngleAxis
              dataKey="kind"
              stroke="white"
              tickLine={false}
              tick={{ fontSize: 12 }}
            />
            <Radar
              dataKey="value"
              stroke="#FF0101"
              fill="#FF0101"
              fillOpacity={0.8}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    );
  } else {
    return (
      <div className="performance-container">
        <p>Vous n'avez pas encore de performance</p>
      </div>
    );
  }
};
// prop types
Performance.propTypes = {
  performance: PropTypes.object,
};

export default Performance;

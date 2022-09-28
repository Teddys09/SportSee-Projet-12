import React, { useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from 'recharts';
import useFetch from '../../utils/useFetch';
import PropTypes from 'prop-types';
/**
 * Make a graph with the user's session average time
 * @param {String} id
 * @returns {JSX.Element}
 */
const TimeAverage = (id) => {
  const [data, setData] = useState(null);

  const session = useFetch(
    `http://localhost:3000/user/${id.id}/average-sessions`
  );

  useEffect(() => {
    setData(session?.data.sessions);
  }, [session]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="hover-average">
          <p> {`${payload[0].value} `}min</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="timeAverage">
      <div className="average-title">Durée moyenne des sessions</div>
      <ResponsiveContainer width="100%" height="100%" padding={0}>
        <LineChart
          data={data}
          margin={{ top: 0, right: 0, left: 0, bottom: -10 }}
        >
          <XAxis
            dataKey="days"
            axisLine={false}
            padding={{ left: 20, right: 15 }}
            tick={false}
          />
          <YAxis
            hide={true}
            domain={['dataMin-50', 'dataMax+50']}
            padding={{ top: 10, bottom: -20 }}
          />
          <Tooltip
            content={<CustomTooltip />}
            cursor={{
              stroke: 'black',
              strokeOpacity: 0.08,
              strokeWidth: 30,
            }}
          />
          <Line
            type="natural"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            dot={false}
            activeDot={{
              stroke: 'white',
              strokeOpacity: 0.2,
              fill: 'white',
              strokeWidth: 15,
              r: 5,
            }}
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="day-average">
        <div>L</div>
        <div>M</div>
        <div>M</div>
        <div>J</div>
        <div>V</div>
        <div>S</div>
        <div>D</div>
      </div>
    </div>
  );
};
// prop types
TimeAverage.propTypes = {
  data: PropTypes.array,
};

export default TimeAverage;

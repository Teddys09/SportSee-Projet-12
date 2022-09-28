import React, { useEffect, useState } from 'react';
import {
  BarChart,
  CartesianGrid,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import useFetch from '../../utils/useFetch';
import PropTypes from 'prop-types';
/**
 * Make a graph with the user's activity
 * @param {String} id
 * @returns {JSX.Element}
 */
const Activities = (id) => {
  const [data, setData] = useState(null);
  const activity = useFetch(`http://localhost:3000/user/${id.id}/activity`);

  useEffect(() => {
    setData(activity?.data.sessions);
  }, [activity]);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload) {
      return (
        <div className="div-hover">
          <p> {`${payload[0].value} kg`}</p>
          <p> {`${payload[1].value} kCal`}</p>
        </div>
      );
    }

    return null;
  };

  const formatXAxis = (index) => {
    return index + 1;
  };

  return (
    <div className="activities-container">
      <div className="activities-text">
        <h4>Activité quotidienne</h4>
        <div className="weigth-calories">
          <div className="point-black"></div>
          <p>Poids (kg)</p>

          <div className="point-red"></div>
          <p>Calories brûlées (kCal)</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={260}>
        <BarChart
          margin={{
            top: 30,
            right: 50,
            left: 50,
            bottom: 10,
          }}
          barCategoryGap="40%"
          barGap={1}
          data={data !== null && data !== undefined ? data : ''}
        >
          <CartesianGrid
            strokeDasharray="2 4"
            vertical={false}
            stroke="#dedede"
          />
          <XAxis
            tickFormatter={formatXAxis}
            tick={{ fill: '#9b9eac' }}
            tickLine={false}
            stroke="#DEDEDE"
            padding={{ left: -47, right: -47 }}
            tickSize="25"
          />

          <YAxis yAxisId="left" orientation="left" hide={true} />
          <YAxis
            yAxisId="right"
            orientation="right"
            domain={['dataMin-1', 'dataMax+1']}
            axisLine={false}
            tickLine={false}
            tickSize="50"
            tickCount={4}
          />

          <Tooltip
            position={{ y: 0 }}
            cursor={{
              fill: '#C4C4C4',
              fillOpacity: '0.4',
            }}
            content={<CustomTooltip />}
          />

          <Bar
            yAxisId="right"
            dataKey="kilogram"
            fill="black"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
          <Bar
            yAxisId="left"
            dataKey="calories"
            fill="#E60000"
            radius={[50, 50, 0, 0]}
            maxBarSize={10}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
// prop types
Activities.propTypes = {
  data: PropTypes.array,
};

export default Activities;

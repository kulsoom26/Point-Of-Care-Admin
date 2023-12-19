import React from 'react';
import styled from 'styled-components';
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    name: 'Sun',
    Chest: 2,
    Breast: 4,
    Kidney: 3,
  },
  {
    name: 'Mon',
    Chest: 2,
    Breast: 4,
    Kidney: 1,
  },
  {
    name: 'Tue',
    Chest: 1,
    Breast: 3,
    Kidney: 5,
  },
  {
    name: 'Wed',
    Chest: 2,
    Breast: 1,
    Kidney: 2,
  },
  {
    name: 'Thu',
    Chest: 1,
    Breast: 2,
    Kidney: 8,
  },
  {
    name: 'Fri',
    Chest: 4,
    Breast: 1,
    Kidney: 2,
  },
  {
    name: 'Sat',
    Chest: 3,
    Breast: 1,
    Kidney: 2,
  },
];

const BigChartBox = () => {
  return (
    <StyledBigChartBox>
      <h1>Reports Analytics</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <AreaChart
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="Breast"
              stackId="1"
              stroke="#AFE1AF"
              fill="#AFE1AF"
            />
            <Area
              type="monotone"
              dataKey="Chest"
              stackId="1"
              stroke="#478778"
              fill="#478778"
            />
            <Area
              type="monotone"
              dataKey="Kidney"
              stackId="1"
              stroke="#5F9EA0"
              fill="#5F9EA0"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </StyledBigChartBox>
  );
};

const StyledBigChartBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    font-family: Lato;
    font-weight: 600;
  }

  .chart {
    width: 100%;
    height: 300px;
  }
`;

export default BigChartBox;

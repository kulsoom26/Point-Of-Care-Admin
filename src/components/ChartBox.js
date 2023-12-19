import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';
import { API_URL } from '../config';

const ChartBox = (props) => {
  const [userCount, setUserCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${API_URL}api/admin/getTotalUsers`);
        const data = await response.json();
        console.log(data.number);
        setUserCount(data.number);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, setUserCount);
  return (
    <StyledChartBox color={props.color}>
      <div className="boxInfo">
        <div className="title">
          <img src={props.icon} alt='icon' style={{width: "50px", height:"50px"}}/>
          <span style={{fontSize:"25px"}}>{props.title}</span>
        </div>
        <h1 style={{fontFamily:"Lato"}}>{userCount}</h1>
      </div>
      <div className="chartInfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: 'transparent', border: 'none' }}
                labelStyle={{ display: 'none' }}
                position={{ x: 10, y: 70 }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts">
          <span
            className="percentage"
            style={{ color: props.percentage < 0 ? 'tomato' : 'limegreen' }}
          >
            {props.percentage}%
          </span>
        </div>
      </div>
    </StyledChartBox>
  );
};

const StyledChartBox = styled.div`
  display: flex;
  height: 80%;

  @media (max-width: 600px) {
    flex-direction: column;
  }

  .boxInfo {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;

    @media (max-width: 600px) {
      gap: 20px;
    }

    .title {
      display: flex;
      align-items: center;
      gap: 10px;
      color: black;
      font-size: 40px;
      font-family: Lato;
      font-weight: 600;

      @media (min-width: 1200px) {
        font-size: 14px;
      }
    }
  }

  .chartInfo {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Lato;
    font-weight: 600;
    .chart {
      width: 100%;
      height: 100%;
    }

    .texts {
      display: flex;
      flex-direction: column;
      text-align: right;
      color: black;

      .percentage {
        font-weight: bold;
        font-size: 20px;
      }

      .duration {
        font-size: 14px;
      }
    }
  }
`;

export default ChartBox;

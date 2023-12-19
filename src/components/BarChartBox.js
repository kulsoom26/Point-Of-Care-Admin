import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from 'recharts';
import { API_URL } from '../config';

const BarChartBox = ({chartData}) => {
  // const [chartData, setChartData] = useState([]);

  // useEffect(() => {
  //   const fetchChartData = async () => {
  //     try {
  //       const response = await fetch(`${API_URL}api/admin/getAppointmentWeekly`); 
  //       const data = await response.json();
  //       const filteredData = data.filter(entry => entry.name !== undefined);
  //       setChartData(filteredData);
  //     } catch (error) {
  //       console.error('Error fetching chart data:', error);
  //     }
  //   };

  //   fetchChartData();
  // }, []);

  return (
    <StyledBarChartBox>
      <h1>Weekly Appointments</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <BarChart data={chartData}>
            <XAxis dataKey="name" />
          
            <Tooltip
              contentStyle={{ background: '#2a3447', borderRadius: '5px' }}
              labelStyle={{ display: 'none' }}
              cursor={{ fill: 'none' }}
            />
            <Bar dataKey="appointments" fill="#088F8F" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </StyledBarChartBox>
  );
};

const StyledBarChartBox = styled.div`
  width: 100%;
  height: 100%;

  h1 {
    font-size: 26px;
    font-family: Lato;
    font-weight: 600;
    margin-bottom: 20px;
    color: black;
  }
`;

export default BarChartBox;

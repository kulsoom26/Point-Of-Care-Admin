import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';
import { API_URL } from '../config';


const StyledPieChartBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-size: 26px;
    color: black;
    font-family: Lato;
    font-weight: 700;
  }

  .chart {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .options {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    font-size: 14px;
    color: black;

    .option {
      display: flex;
      flex-direction: column;
      gap: 10px;
      align-items: center;

      .title {
        display: flex;
        gap: 10px;
        align-items: center;
        font-size: 19px;
        font-family: Lato;
        font-weight: 600;

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
        }
      }
    }
  }
`;

const PieChartBox = () => {
  const [patCount, setPatCount] = useState(0);
  const [docCount, setdocCount] = useState(0);
  const [radCount, setRadCount] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetch(`${API_URL}api/admin/getTotalDoctors`);
        const data = await response.json();
        console.log(data.number);
        setdocCount(data.number);
        const response2 = await fetch(`${API_URL}api/admin/getTotalPatients`);
        const data2 = await response2.json();
        console.log(data2.number);
        setPatCount(data2.number);
        const response3 = await fetch(`${API_URL}api/admin/getTotalRadiologists`);
        const data3 = await response3.json();
        console.log(data3.number);
        setRadCount(data3.number);

      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchData();
  }, setPatCount, setdocCount, setRadCount);
  const data = [
    { name: 'Patients', value: patCount, color: '#38419D' },
    { name: 'Doctors', value: docCount, color: '#3887BE' },
    { name: 'Radiologists', value: radCount, color: '#52D3D8' },
  ];
  return (
    <StyledPieChartBox>
      <h1>User Breakdown</h1>
      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip contentStyle={{ background: 'white', borderRadius: '5px' }} />
            <Pie
              data={data}
              innerRadius={'70%'}
              outerRadius={'90%'}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((item) => (
          <div className="option" key={item.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: item.color }} />
              <span>{item.name}</span>
            </div>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </StyledPieChartBox>
  );
};

export default PieChartBox;

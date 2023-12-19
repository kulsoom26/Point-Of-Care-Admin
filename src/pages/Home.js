// Import necessary libraries
import React from 'react';
import styled from 'styled-components';
import BarChartBox from '../components/BarChartBox';
import BigChartBox from '../components/BigChartBox';
import ChartBox from '../components/ChartBox';
import ChartBoxDoc from '../components/ChartBoxDoc';
import ChartBoxPat from '../components/ChartBoxPat';
import ChartBoxRad from '../components/ChartBoxRad';
import PieChartBox from '../components/PieChartBox';
import TopBox from '../components/TopBox';
import {
  barChartBoxVisit,
  chartBoxDoctor,
  chartBoxPatient,
  chartBoxRadiologist,
  chartBoxUser,
} from '../data';

const HomeContainer = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(180px, auto);
  grid-auto-flow: dense;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media (min-width: 768px) and (max-width: 767px) {
    grid-auto-rows: minmax(120px, auto);
  }
`;

const Box = styled.div`
  padding: 20px;
  border-radius: 10px;
  border: 2px solid #384256; 
`;

const Box1 = styled(Box)`
  grid-column: span 2;
  grid-row: span 2;
`;

const Box7 = styled(Box)`
  grid-column: span 2;
  grid-row: span;

  @media (max-width: 767px) {
    display: none;
  }
`;

// Define the functional component
const Home = () => {
  
  return (
    <HomeContainer>
      
      <Box>
        <ChartBox {...chartBoxUser} />
      </Box>
      <Box>
        <ChartBoxDoc {...chartBoxDoctor} />
      </Box>
      
      <Box>
        <ChartBoxPat {...chartBoxPatient} />
      </Box>
      <Box>
        <ChartBoxRad {...chartBoxRadiologist} />
      </Box>
      <Box>
        <PieChartBox />
      </Box>
      <Box7>
        <BigChartBox />
      </Box7>
      <Box>
        <BarChartBox {...barChartBoxVisit}/>
      </Box>
    </HomeContainer>
  );
};

export default Home;

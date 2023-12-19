import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { menu } from '../data';

const StyledMenu = styled.div`
  .item {
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-bottom: 20px;

    .item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px;
      color: black;
      border-radius: 5px;
      font-size: 24px;
      font-family: Montserrat;
      font-weight: 500;

      &:click{
        background-color: #384256;
      }
    }
  }
`;

const Menu = () => {
  return (
    <StyledMenu>
      {menu.map((item) => (
        <div className="item" key={item.id}>
            <Link to={item.url} className="item">
              <img src={item.icon} style={{ width: "35px", height: "35px" }} alt={item.title} />
              <span className="itemTitle">{item.title}</span>
            </Link>
          
        </div>
      ))}
    </StyledMenu>
  );
};

export default Menu;

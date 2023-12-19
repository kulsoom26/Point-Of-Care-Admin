import React from 'react';
import styled from 'styled-components';
import { recentReports } from '../data';

const StyledTopBox = styled.div`
  
  h1 {
    margin-bottom: 20px;
    color: black;
    font-size: 26px;
    font-family: Lato;
    font-weight: 600;
  }

  .list {
    .listItem {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 30px;
      color: black;

      .user {
        display: flex;
        gap: 20px;

        img {
          width: 70px;
          height: 70px;
          border-radius: 50%;
          object-fit: cover;
        }

        .userTexts {
          display: flex;
          flex-direction: column;
          gap: 5px;

          .username {
            ffont-size: 20px;
            font-family: Lato;
            font-weight: 600;
          }
          .email {
            font-size: 18px;
          }
        }
      }

      .category {
        font-size: 20px;
        font-family: Lato;
        font-weight: 600;
      }
    }
  }
`;

const TopBox = () => {
  return (
    <StyledTopBox>
      <h1>Recent Reports</h1>
      <div className="list">
        {recentReports.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.name}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="category">{user.category}</span>
          </div>
        ))}
      </div>
    </StyledTopBox>
  );
};

export default TopBox;

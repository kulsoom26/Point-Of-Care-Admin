import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/Point of Care.png';

const StyledNavbar = styled.div`
  width: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  color: black;
  font-family: Montserrat;
  justify-content: space-between;

  .logo {
    display: flex;
    align-items: center;
    font-weight: bold;
    gap: 10px;
  }

  .icons {
    display: flex;
    align-items: center;
    gap: 20px;

    .icon {
      @media (max-width: 767px) {
        display: none;
      }
    }

    .user {
      display: flex;
      align-items: center;
      gap: 10px;

      span {
        font-size: 20px;
        font-weight: 500;
      }

      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        object-fit: cover;
        border: 2px solid black;
      }
    }
  }
`;

const Navbar = () => {
  const [admin, setAdmin] = useState(null);

  useEffect(() => {
    // Load admin from localStorage on component mount
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    setAdmin(storedAdmin);
  }, []); // Empty dependency array ensures this effect runs only once on mount

  return (
    <StyledNavbar>
      <div className="logo">
        <img src={logo} style={{ width: "90px", height: "90px" }} alt="Point of Care Logo" />
        <span style={{ fontSize: "40px" }}>Point Of Care</span>
      </div>
      <div className="icons">
        <div className="user">
          {admin && (
            <>
              <span>Welcome! {admin.name}</span>
              <img
                src='https://firebasestorage.googleapis.com/v0/b/point-of-care-462b2.appspot.com/o/female%20avatar.gif?alt=media&token=1e9648d4-f356-43fb-8d5e-9503ebe43289'
                alt="Admin Profile"
              />
            </>
          )}
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </StyledNavbar>
  );
};

export default Navbar;





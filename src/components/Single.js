import styled from "styled-components";
import React, { useState, useEffect } from 'react';
import {media} from "../styles/responsive";
import { API_URL } from '../config';
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 50vw;
  height: 60vh;
  background-color: rgb(127,128,210, 0.5); 
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #2a3447; 
  border-radius: 10px;
  overflow: hidden;
  
`;

const Wrapper = styled.div`
  width: 65%;
  padding: 10px;
  ${media.mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-family: Montserrat;
  margin-bottom: 10px;
  align-self: center;
  justify-content: center;
`;
const Subtitle = styled.h1`
  font-size: 25px;
  font-weight: 500;
  font-family: Montserrat;
  margin-bottom: 60px;
  align-self: center;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  height: 60px;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-size: 20px;
  font-family: Merriweather;
  border-radius: 15px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: rgba(206, 90, 103, 0.8); 
  color: white;
  cursor: pointer;
  margin-top: 40px;
  font-size: 30px;
  font-family: Merriweather;
  border-radius: 15px;
  align-self: center;
`;




const Single = () => {
  const navigate = useNavigate();
  const storedAdmin = JSON.parse(localStorage.getItem('admin'));
  const [name, setName] = useState(storedAdmin.name || '');
  const [email, setEmail] = useState(storedAdmin.email || '');
  const [contact, setContact] = useState(storedAdmin.contact || '');
  const [password, setPassword] = useState(storedAdmin.password || '');
  useEffect(() => {
    const storedAdmin = JSON.parse(localStorage.getItem('admin'));
    if (storedAdmin) {
      setName(storedAdmin.name);
      setEmail(storedAdmin.email);
      setContact(storedAdmin.contact);
      setPassword(storedAdmin.password);
    }
  },[]);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSave = async () => {
    try {
      const updatedAdmin = {
        name,
        email,
        contact,
        password,
      };
      const response = await fetch(`${API_URL}api/admin/updateAdmin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedAdmin),
      });
      const responseData = await response.json();
      localStorage.setItem('admin', JSON.stringify(responseData));
      setName(responseData.name);
      setEmail(responseData.email);
      setContact(responseData.contact);
      setPassword(responseData.password);
      alert('Admin profile updated successfully!');
  
      if (response.status === 404 || response.status === 500) {
        const errorData = await response.json();
        alert(errorData.error);
      }
     
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>ADMIN PROFILE</Title>
        <Subtitle>Explore Your Profile: Your Gateway to Personal Information.</Subtitle>
        <Form>
          <Input placeholder="Full name" value={name} onChange={handleNameChange} />
          <Input placeholder="Email" value={email} onChange={handleEmailChange} />
          <Input placeholder="Contact" value={contact} onChange={handleContactChange} />
          <Input placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
          <Button onClick={handleSave}>SAVE</Button>
          
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Single;
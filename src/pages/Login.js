import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { media } from "../../src/styles/responsive";
import bg from "../assets/background.jpg";
import logo from "../assets/Point of Care.png";
import { API_URL } from '../config';
import { useAuth } from '../components/Authcontext';

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
    rgba(255, 255, 255, 0.5),
    rgba(255, 255, 255, 0.5)
  ),
  url(${bg}) center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  height: 60%;
  background-color: white;
  border-radius: 20px;

  @media (max-width: 768px) {
    width: 80%;
    height: 70%;
  }

  @media (max-width: 480px) {
    width: 90%;
    height: 80%;
  }
`;

const TitleBox = styled.div`
  margin-left: 20%;

  ${media.mobile({ marginLeft: "5%" })}
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 600;
  font-family: Lato;
  margin-top: 70px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 25px;
    margin-top: 40px;
  }
`;

const SubTitle = styled.span`
  font-size: 25px;
  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const Logo = styled.div`
  margin: 30px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const LogoImage = styled.img`
  width: 100px;
  height: 100px;
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const Heading = styled.span`
  font-size: 60px;
  font-family: Lato;
  font-weight: 900;
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;

const Input = styled.input`
  flex: 1;
  width: 77%;
  min-width: 50%;
  margin: 20px 0;
  padding: 10px;
  font-size: 20px;
  font-family: Merriweather;
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #7F80D2;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
  margin-top: 20px;
  margin-left: 17%;
  font-size: 30px;
  font-family: Merriweather;
  @media (max-width: 768px) {
    width: 80%;
    height: 50px;
    font-size: 20px;
    margin: 30px 0px;
  }
`;

const Snackbar = styled.div`
  display: ${props => (props.visible ? "flex" : "none")};
  align-items: center;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff; 
  color: ${props => (props.error ? "#ff0000" : "#00cc00")};
  padding: 10px 20px;
  border-radius: 5px;
  width: 300px; 
  height: 90px; 
  font-size: 25px;
`;

const Icon = styled.span`
  margin-right: 10px;
  font-size: 24px; 
  color: ${props => (props.error ? "#ff0000" : "#00cc00")}; 
`;

const Login = () => {
  const navigate = useNavigate();
  const { isAuthenticated, login } = useAuth();
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarError, setSnackbarError] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("handleLogin called");
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
      const response = await fetch(`${API_URL}api/admin/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(response);

      if (response.status === 200) {
        const {admin} = await response.json();
        localStorage.setItem('admin', JSON.stringify(admin));
        setSnackbarError(false);
        setSnackbarMessage("Login successfully!");
        setSnackbarVisible(true);
        login(); 
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      } else {
        setSnackbarError(true);
        setSnackbarMessage("Incorrect credentials! Please enter again");
        setSnackbarVisible(true);
        setTimeout(() => {
          setSnackbarVisible(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Logo className="logo">
          <LogoImage src={logo} alt="Logo Image" />
          <Heading>POINT OF CARE</Heading>
        </Logo>
        <TitleBox>
          <Title>Login</Title>
          <SubTitle>Welcome back! Glad to see you.</SubTitle>
          <Form onSubmit={handleLogin}>
            <Input id='email' placeholder="Email" />
            <Input id='password' placeholder="Password" type="password" />
            <Button type="submit">LOGIN</Button>
            <Snackbar visible={snackbarVisible} error={snackbarError}>
            <Icon error={snackbarError}>{snackbarError ? "❌" : "✅"}</Icon>
              {snackbarMessage}
            </Snackbar>
          </Form>
          
        </TitleBox>
      </Wrapper>
    </Container>
  );
};

export default Login;

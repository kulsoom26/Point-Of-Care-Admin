import React, { useState } from 'react';
import styled from 'styled-components';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase';
import { API_URL } from '../config';

const Add = (props) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [password, setPassword] = useState('');
  const [role] = useState('doctor');
  const [userId] = useState('');
  const [userName, setUserName] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState(0);
  const [specialization, setSpecialization] = useState('');
  const [experience, setExperience] = useState('');
  const [description, setDescription] = useState('');
  const [time, setTime] = useState('');
  const [fees, setFees] = useState('');
  const [image, setImage] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleSpecializationChange = (e) => setSpecialization(e.target.value);
  const handleExperienceChange = (e) => setExperience(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleFeesChange = (e) => setFees(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let apiEndpoint = '';
      let data = {};

      if (props.slug === 'doctor') {
        apiEndpoint = `${API_URL}api/admin/addDoctor`;
        data = {
          name,
          email,
          contact,
          password,
          role,
          userId,
          userName,
          gender,
          image,
          specialization,
          description,
          experience,
          fees,
          time,
        };
      } else if (props.slug === 'patient') {
        apiEndpoint = `${API_URL}api/admin/addPatient`;
        data = {
          name,
          email,
          contact,
          password,
          role,
          userId,
          userName,
          gender,
          image,
          age, 
        };
      } else if (props.slug === 'radiologist') {
        apiEndpoint = `${API_URL}api/admin/addRadiologist`;
        data = {
          name,
          email,
          contact,
          password,
          role,
          userId,
          userName,
          gender,
          image,
          age, 
        };
      }

      const response = await fetch(apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert(`${props.slug} record added successfully!`);
        props.setOpen(false);
        window.location.reload();
      } else {
        alert(`Error adding ${props.slug} record. Please try again.`);
      }
    } catch (error) {
      console.error(`Error adding ${props.slug} profile:`, error);
      alert(`An error occurred while adding the ${props.slug}.`);
    }
  };

  // Function to handle image change
  const handleImageChange = async (e) => {
    if (e.target.files[0]) {
      setSelectedImage(e.target.files[0]);
      const imageName = `${Date.now()}_${Math.floor(Math.random() * 1000000)}.jpg`;
      const storageRef = ref(storage, imageName);
      const metadata = {
        contentType: 'image/jpeg',
      };
  
      // Use e.target.files[0] directly instead of selectedImage
      await uploadBytes(storageRef, e.target.files[0], metadata);
  
      const downloadURL = await getDownloadURL(storageRef);
  
      setImage(downloadURL);
      console.log('Image uploaded:', downloadURL);
    }
  };
  

  return (
    <StyledAdd>
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Input type="file" onChange={handleImageChange} accept="image/*" />
            {selectedImage && (
              <ImagePreview>
                <img src={URL.createObjectURL(selectedImage)} alt="Selected" />
              </ImagePreview>
            )}
          </Row>
          <Input placeholder="Name" value={name} onChange={handleNameChange} />
          <Input placeholder="Email" value={email} onChange={handleEmailChange} />
          <Input placeholder="Username" value={userName} onChange={handleUserNameChange} />
          <Input placeholder="Password" type="password" value={password} onChange={handlePasswordChange} />
          <Input placeholder="Contact" value={contact} onChange={handleContactChange} />
          <Input placeholder="Gender" value={gender} onChange={handleGenderChange} />

          {props.slug === 'doctor' && <Input placeholder="Specialization" value={specialization} onChange={handleSpecializationChange} />}
          {props.slug === 'doctor' && <Input placeholder="Description" value={description} onChange={handleDescriptionChange} />}
          {props.slug === 'doctor' && <Input placeholder="Experience" value={experience} onChange={handleExperienceChange} />}
          {props.slug === 'doctor' && <Input placeholder="Time" value={time} onChange={handleTimeChange} />}
          {props.slug === 'doctor' && <Input placeholder="Fees" value={fees} onChange={handleFeesChange} />}
          {(props.slug === 'patient' || props.slug === 'radiologist') && <Input placeholder="Age" value={age} onChange={handleAgeChange} />}

          <Button onClick={handleSubmit}>Add {props.slug}</Button>
        </Form>
      </div>
    </StyledAdd>
  );
};

const StyledAdd = styled.div`
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.724);
  display: flex;
  align-items: center;
  justify-content: center;

  .modal {
    padding: 50px;
    border-radius: 10px;
    background-color:rgb(127,128,210, 0.9);
    position: relative;

    h1 {
      margin-bottom: 40px;
      font-size: 30px;
      color: white;
      font-family: Montserrat;
    }

    .close {
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px;
  padding: 10px;
  font-size: 20px;
  font-family: Merriweather;
`;

const Button = styled.button`
  width: 50%;
  border: none;
  padding: 15px 20px;
  background-color: rgba(206, 90, 103, 0.8);
  color: white;
  cursor: pointer;
  margin: 10px auto;
  font-size: 25px;
  font-family: Merriweather;
  border-radius: 15px;
`;

const ImagePreview = styled.div`
  margin-left: 20px;

  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

export default Add;

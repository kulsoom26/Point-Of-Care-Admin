import React, { useState } from 'react';
import styled from 'styled-components';
import { API_URL } from '../config';

const UpdateModal = ({ slug, columns, row, setOpenUpdateModal }) => {
  const [name, setName] = useState(row.name);
  const [email] = useState(row.email);
  const [contact, setContact] = useState(row.contact);
  const [image] = useState(row.image);
  const [userName, setUserName] = useState(row.userName);
  const [gender, setGender] = useState(row.gender);
  const [age, setAge] = useState(row.age);
  const [specialization, setSpecialization] = useState(row.specialization);
  const [experience, setExperience] = useState(row.experience);
  const [description, setDescription] = useState(row.description);
  const [time, setTime] = useState(row.time);
  const [fees, setFees] = useState(row.fees);
  const [reason, setReason] = useState(row.reason);
  const [status, setStatus] = useState(row.status);
  const [date, setDate] = useState(row.date);

  const handleNameChange = (e) => setName(e.target.value);
  const handleContactChange = (e) => setContact(e.target.value);
  const handleUserNameChange = (e) => setUserName(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);
  const handleAgeChange = (e) => setAge(e.target.value);
  const handleSpecializationChange = (e) => setSpecialization(e.target.value);
  const handleExperienceChange = (e) => setExperience(e.target.value);
  const handleDescriptionChange = (e) => setDescription(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleFeesChange = (e) => setFees(e.target.value);
  const handleReasonChange = (e) => setReason(e.target.value);
  const handleDateChange = (e) => setDate(e.target.value);
  const handleStatusChange = (e) => setStatus(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiUrl = `${API_URL}api/admin/update${slug.charAt(0).toUpperCase() + slug.slice(1)}`;

      let data = {
        name,
        email,
        image,
        contact,
        gender,
        userName,
      };

      if (slug === 'doctor') {
        data = {
          ...data,
          specialization,
          description,
          experience,
          fees,
          time,
        };
      } else if (slug === 'patient' || slug === 'radiologist') {
        data = {
          ...data,
          age,
        };
      } else if (slug === 'appointment') {
        data = {
          _id: row._id,
          name,
          age,
          contact,
          gender,
          time,
          reason,
          status,
          date, 
        };
      }

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.status === 200) {
        alert(`${slug.charAt(0).toUpperCase() + slug.slice(1)} profile updated successfully!`);
        setOpenUpdateModal(false);
        window.location.reload();
      } else {
        alert('Please fill all the fields!');
        console.error(`Error updating ${slug}:`, await response.json());
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <StyledUpdateModal>
      <div className="modal">
        <span className="close" onClick={() => setOpenUpdateModal(false)}>
          X
        </span>
        <h1>Update {slug}</h1>
        <Form onSubmit={handleSubmit}>
          <Input placeholder="Name" value={name} onChange={handleNameChange} />
          {(slug === 'patient' || slug === 'radiologist' || slug === 'doctor') && <Input placeholder="Email" value={email} disabled />}
          {(slug === 'patient' || slug === 'radiologist') && <Input placeholder="Username" value={userName} onChange={handleUserNameChange} />}
          <Input placeholder="Contact" value={contact} onChange={handleContactChange} />
          <Input placeholder="Gender" value={gender} onChange={handleGenderChange} />

          {slug === 'doctor' && <Input placeholder="Specialization" value={specialization} onChange={handleSpecializationChange} />}
          {slug === 'doctor' && <Input placeholder="Description" value={description} onChange={handleDescriptionChange} />}
          {slug === 'doctor' && <Input placeholder="Experience" value={experience} onChange={handleExperienceChange} />}
          {(slug === 'doctor' || slug === 'appointment') && <Input placeholder="Time" value={time} onChange={handleTimeChange} />}
          {slug === 'doctor' && <Input placeholder="Fees" value={fees} onChange={handleFeesChange} />}
          {(slug === 'patient' || slug === 'radiologist' || slug === 'appointment') && <Input placeholder="Age" value={age} onChange={handleAgeChange} />}

          {slug === 'appointment' && <Input placeholder="Reason" value={reason} onChange={handleReasonChange} />}
          {slug === 'appointment' && <Input placeholder="Status" value={status}  onChange={handleStatusChange}/>}
          {slug === 'appointment' && <Input placeholder="Date" value={date} onChange={handleDateChange} />}

          <Button onClick={handleSubmit}>Update {slug.charAt(0).toUpperCase() + slug.slice(1)}</Button>
        </Form>
      </div>
    </StyledUpdateModal>
  );
};

const StyledUpdateModal = styled.div`
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
    background-color: rgb(127,128,210, 0.9);
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

export default UpdateModal;

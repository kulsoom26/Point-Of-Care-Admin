import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import Add from "../components/Add";
import { API_URL } from '../config';

const StyledUsers = styled.div`
  .info {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;

    button {
      padding: 5px;
      cursor: pointer;
    }
  }

  .actionIcons {
    display: flex;
    gap: 10px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  width: 10%;
  border: none;
  padding: 15px 20px;
  background-color: rgba(206, 90, 103, 0.8); 
  color: white;
  cursor: pointer;
  font-size: 25px;
  font-family: Merriweather;
  border-radius: 15px;
  align-self: center;
`;

const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  font-size: 30px;
  font-family: Merriweather;
  color: green; 
  animation: fade 1.5s infinite;

  @keyframes fade {
    0%, 20%, 50%, 80%, 100% {
      opacity: 0.5;
    }
    40%, 60% {
      opacity: 1;
    }
  }
}
`;

const columns = [
  { field: "_id", headerName: "ID", width: 80 },
  {
    field: "image",
    headerName: "Image",
    width: 100,
    renderCell: (params) => {
      return <img src={params.row.image || "/noavatar.png"} alt="" />;
    },
  },
  {
    field: "name",
    type: "string",
    headerName: "Name",
    width: 180,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 250,
  },
  {
    field: "contact",
    type: "string",
    headerName: "Contact",
    width: 150,
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    type: "string",
  },
  {
    field: "specialization",
    headerName: "Specialization",
    width: 200,
    type: "string",
  },
  {
    field: "description",
    headerName: "Description",
    width: 200,
    type: "string",
  },
  {
    field: "experience",
    headerName: "Experience",
    width: 200,
    type: "string",
  },
  {
    field: "fees",
    headerName: "Fees",
    width: 150,
    type: "string",
  },
  {
    field: "time",
    headerName: "Time",
    width: 200,
    type: "string",
  },
];



const Doctors = () => {
  const [open, setOpen] = useState(false);
  const [doctorRows, setDoctorRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/admin/getDoctors`);
        const data = await response.json();
        console.log(data);
        setDoctorRows(data);
        localStorage.setItem('doctors', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledUsers>
      <div className="info">
        <h1 style={{fontFamily: "Montserrat", fontSize:'40px', fontWeight: "700"}}>Doctors</h1>
        <Button onClick={() => setOpen(true)}>Add New Doctor</Button>
      </div>
      {loading ? (
        <Loading>Please wait! while it's loading...</Loading>
      ) : (
      <DataTable slug="doctor" columns={columns} rows={doctorRows} />)}
      {open && <Add slug="doctor" columns={columns} setOpen={setOpen}/>}
    </StyledUsers>
  );
};

export default Doctors;

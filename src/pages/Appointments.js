import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
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
    field: "name",
    type: "string",
    headerName: "Patient Name",
    width: 200,
  },
  {
    field: "doctorName",
    type: "string",
    headerName: "Doctor Name",
    width: 200,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 300,
  },
  {
    field: "contact",
    headerName: "Contact",
    width: 200,
    type: "string",
  },
  {
    field: "age",
    headerName: "Age",
    width: 150,
    type: "string",
  },
  {
    field: "gender",
    headerName: "Gender",
    width: 150,
    type: "string",
  },
  {
    field: "reason",
    headerName: "Reason",
    width: 150,
    type: "string",
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    type: "string",
  },
  {
    field: "time",
    headerName: "Time",
    width: 150,
    type: "string",
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    type: "string",
  },
];

const Appointments = () => {
  const [appointmentRows, setAppointmentRows] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_URL}api/admin/getAppointments`);
        const data = await response.json();
        console.log(data);
        setAppointmentRows(data);
        localStorage.setItem('appointments', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching appointments:', error);
      }
      finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledUsers>
      <div className="info">
        <h1 style={{fontFamily: "Montserrat", fontSize:'40px', fontWeight: "700"}}>Appointments</h1>
        
      </div>
      {loading ? (
        <Loading>Please wait! while it's loading...</Loading>
      ) : (
        <DataTable slug="appointment" columns={columns} rows={appointmentRows} />
      )}
    </StyledUsers>
  );
};

export default Appointments;

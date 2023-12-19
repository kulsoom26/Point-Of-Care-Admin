import React from "react";
import styled from "styled-components";
import DataTable from "../components/DataTable";
import { reportRows } from "../data";

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

const columns = [
  { field: "_id", headerName: "ID", width: 80 },
  {
    field: "patientName",
    type: "string",
    headerName: "Patient Name",
    width: 200,
  },
  {
    field: "email",
    type: "string",
    headerName: "Email",
    width: 350,
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
    field: "result",
    headerName: "Result",
    width: 150,
    type: "string",
  },
  {
    field: "percentage",
    headerName: "Percentage",
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



const Reports = () => {

  return (
    <StyledUsers>
      <div className="info">
        <h1 style={{fontFamily: "Montserrat", fontSize:'40px', fontWeight: "700"}}>Reports</h1>
        
      </div>
      <DataTable slug="report" columns={columns} rows={reportRows} />
    </StyledUsers>
  );
};

export default Reports;

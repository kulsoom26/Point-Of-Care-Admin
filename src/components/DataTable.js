import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import UpdateModal from './Update';
import { API_URL } from '../config';

const DataTable = ({ columns, rows, slug }) => {
  const StyledDataTable = styled.div`
    .dataGrid {
      background: white;
      padding: 20px;
      width: fit-content;

      .MuiDataGrid-toolbarContainer {
        flex-direction: row-reverse;
        font-size: 20px;
      }

      .css-ptkaw2-MuiDataGrid-root .MuiDataGrid-row {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        font-size: 20px !important;
        width: -webkit-fit-content;
        width: -moz-fit-content;
        width: fit-content;
        break-inside: avoid;
    }

      .css-t89xny-MuiDataGrid-columnHeaderTitle {
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        font-size: 22px;
        font-family: Montserrat;
        font-weight: 700;
      }
      .css-yrdy0g-MuiDataGrid-columnHeaderRow {
        background-color: rgb(127,128,210, 0.5);
      }

      img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }

      .action {
        display: flex;
        gap: 15px;

        .delete,
        .update {
          cursor: pointer;
        }
      }
    }
  `;

  const [openUpdateModal, setOpenUpdateModal] = useState(false);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleUpdateClick = (row) => {
    setSelectedRow(row);
    setOpenUpdateModal(true);
  };

  const handleDeleteClick = async (id) => {
    const confirmDelete = window.confirm(`Are you sure you want to delete this ${slug}?`);

    if (confirmDelete) {
      try {
        const apiUrl = `${API_URL}api/admin/delete${slug.charAt(0).toUpperCase() + slug.slice(1)}`;

        const response = await fetch(apiUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ itemId: id }),
        });

        if (response.status === 200) {
          alert(`${slug.charAt(0).toUpperCase() + slug.slice(1)} record deleted successfully!`);
          window.location.reload();
        } else {
          alert(`Error deleting ${slug}. Please try again.`);
          console.error(`Error deleting ${slug}:`, await response.json());
        }
      } catch (error) {
        alert(`An error occurred while deleting ${slug}. Please try again later.`);
        console.error(`Error deleting ${slug}:`, error);
      }
    }
  };

  const actionColumn = {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => {
      if (slug === 'report') {
        return (
          <div className="action">
            <IconButton className="delete" onClick={() => handleDeleteClick(params.row._id)}>
              <DeleteIcon color="error" />
            </IconButton>
          </div>
        );
      }

      return (
        <div className="action">
          <Link>
            <IconButton className="update" onClick={() => handleUpdateClick(params.row)}>
              <UpdateIcon style={{ color: 'green' }} />
            </IconButton>
          </Link>
          <IconButton className="delete" onClick={() => handleDeleteClick(params.row._id)}>
            <DeleteIcon color="error" />
          </IconButton>
        </div>
      );
    },
  };

  return (
    <StyledDataTable>
      <DataGrid
        className="dataGrid"
        rows={rows}
        columns={[...columns, actionColumn]}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableDensitySelector
        disableColumnSelector
        getRowId={(row) => row._id}
        getRowHeight={() => 100}
      />
      {openUpdateModal && (
        <UpdateModal
          slug={slug}
          columns={columns}
          row={selectedRow}
          setOpenUpdateModal={setOpenUpdateModal}
        />
      )}
    </StyledDataTable>
  );
};

export default DataTable;

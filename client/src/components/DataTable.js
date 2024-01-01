import React from 'react';
import Layout from './Layout';

const DataTable = ({ dataList, handleEdit, handleDelete }) => {

  
  return (
    
    <div className="tableContainer">
     <Layout>
      <table>
     
        <thead>
          <tr>
            <th>Doctor ID</th>
            <th>Name</th>
            <th>Specialization</th>
            <th>Schedule</th>
            <th>Date</th>
            <th>Fees per Consultation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {dataList.length > 0 ? (
            dataList.map((el) => (
              <tr key={el._id}>
                <td>{el.doctor_id}</td>
                <td>{el.name}</td>
                <td>{el.specialization}</td>
                <td>{el.schedule}</td>
                <td>{el.date}</td>
                <td>{el.fees_per_consultation}</td>
                <td>
                  <button className="btn btn-edit" onClick={() => handleEdit(el)}>Edit</button>
                  <button className="btn btn-delete" onClick={() => handleDelete(el._id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" style={{ textAlign: "center" }}>No data</td>
            </tr>
          )}
        </tbody>
        
      </table>
      </Layout>
    </div>
 
  );
};

export default DataTable;

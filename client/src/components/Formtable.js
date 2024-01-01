import React from 'react';
import "../css/Formtable.css";

import { MdClose } from 'react-icons/md';

const Formtable = ({ handleSubmit, handleOnChange, handleclose, rest, isEdit }) => {
  return (
    <div className="addContainer">
      <form onSubmit={handleSubmit}>
        <div className="close-btn" onClick={handleclose}><MdClose /></div>
        <h2>{isEdit ? 'Edit Doctor' : 'Add Doctor'}</h2> 
        
        {/* Change the header text */}
        <label htmlFor="doctor_id">Doctor ID: </label>
        <input type="text" id="doctor_id" name="doctor_id" onChange={handleOnChange} value={rest.doctor_id} />

        <label htmlFor="name">Name: </label>
        <input type="text" id="name" name="name" onChange={handleOnChange} value={rest.name} />

        <label htmlFor="specialization">Specialization: </label>
        <input type="text" id="specialization" name="specialization" onChange={handleOnChange} value={rest.specialization} />

        <label htmlFor="schedule">Schedule: </label>
        <input type="text" id="schedule" name="schedule" onChange={handleOnChange} value={rest.schedule} />

        <label htmlFor="date">Date: </label>
        <input type="text" id="date" name="date" onChange={handleOnChange} value={rest.date} />

        <label htmlFor="fees_per_consultation">Fees per Consultation: </label>
        <input type="text" id="fees_per_consultation" name="fees_per_consultation" onChange={handleOnChange} value={rest.fees_per_consultation} />
     


        <button className="btn" type="submit">
          {isEdit ? 'Update' : 'Submit'} {/* Change the button text */}
        </button>
      </form>
    </div>
  );
}

export default Formtable;

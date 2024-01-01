
// FormPage.js
import React from 'react';
import Formtable from './Formtable';
import Layout from './Layout';

const FormPage = ({ handleSubmit, handleOnChange, handleclose, rest }) => {
  

  return (
    <Layout> 
    <div>
      <Formtable
        handleSubmit={handleSubmit}
        handleOnChange={handleOnChange}
        handleclose={handleclose}
        rest={rest}
      />
    </div>
    </Layout>
  );
};

export default FormPage;

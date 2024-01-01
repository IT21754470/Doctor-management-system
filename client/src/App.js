
import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Formtable from './components/Formtable';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import DataTable from './components/DataTable';

axios.defaults.baseURL = 'http://localhost:8090/';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]); // To store search results
  //const navigate = useNavigate();

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  // Function to handle the search logic
  const handleSearch = async () => {
    try {
      // Make an API call to search by ID
      const response = await axios.get(`/search?id=${searchQuery}`);
      if (response.data.success) {
        setSearchResults(response.data.data);
      } else {
        setSearchResults([]); // Clear search results if not found
      }
    } catch (error) {
      console.error('Error searching:', error);
      setSearchResults([]); // Clear search results in case of an error
    }
  };

  return (
    <Router>
      <div className="container">
      
        <Routes>
          <Route path="/" element={<FormtableAndDataTable searchResults={searchResults} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-doctor" element={<Formtable />} />
        </Routes>
      </div>
    </Router>
  );
}

function FormtableAndDataTable({ searchResults }) {
  const [isAddMode, setIsAddMode] = useState(true);
  const [addSection, setAddSection] = useState(false);
  const [editSection, setEditSection] = useState(false);
  const [formData, setFormData] = useState({
    doctor_id: '',
    name: '',
    specialization: '',
    schedule: '',
    date: '',
    fees_per_consultation: '',
  });

  const [editMode, setEditMode] = useState(false);
  const [formDataEdit, setFormDataEdit] = useState({
    doctor_id: '',
    name: '',
    email: '',
    mobile: '',
    _id: '',
  });

  const [dataList, setDataList] = useState([]);
  const navigate = useNavigate();

  const handleEdit = (el) => {
    setFormDataEdit(el);
    setEditSection(true);
    setEditMode(false);
  };

  const handleOnChange = (e) => {
    const { value, name } = e.target;
    if (formData && name in formData) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await axios.post('/create', formData);
    if (data.data.success) {
      setAddSection(false);
      alert(data.data.message);
      getFetchData();
      setFormData({
        doctor_id: '',
        name: '',
        specialization: '',
        schedule: '',
        date: '',
        fees_per_consultation: '',
      });
    }
  };

  const getFetchData = async () => {
    const data = await axios.get('/getData');
    if (data.data.success) {
      setDataList(data.data.data);
    }
  };

  useEffect(() => {
    getFetchData();
  }, []);

  const handleDelete = async (id) => {
    const data = await axios.delete('/delete/' + id);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const data = await axios.put('/update', formDataEdit);
    if (data.data.success) {
      getFetchData();
      alert(data.data.message);
      setEditSection(false);
    }
  };

  const handleEditOnChange = (e) => {
    const { value, name } = e.target;
    setFormDataEdit((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Filter dataList based on search results
  const filteredDataList = searchResults.length > 0 ? searchResults : dataList;

  return (
    <div className="container">
      <button className="btn btn-add" onClick={() => setAddSection(true)}>
        Add
      </button>

      {addSection && (
        <Formtable
          title={editMode ? 'Edit Doctor' : 'Add Doctor'}
          handleSubmit={handleSubmit}
          handleOnChange={handleOnChange}
          handleclose={() => setAddSection(false)}
          rest={formData}
          isEdit={editMode}
        />
      )}

      {editSection && (
        <Formtable
          title="Edit Doctor"
          handleSubmit={handleUpdate}
          handleOnChange={handleEditOnChange}
          handleclose={() => setEditSection(false)}
          rest={formDataEdit}
          isEdit={true}
        />
      )}

      {/* Render the DataTable component */}
      <DataTable
        dataList={filteredDataList}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
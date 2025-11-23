import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';

const Profiles = () => {
  const navigate = useNavigate();
  const [Profiles, setProfiles] = useState([]);
  const [originalProfiles, setOriginalProfiles] = useState([]);
  const [search, setSearch] = useState({
    experience: '',
    technology: '',
  });

  const [semiFilter, setSemiFilter] = useState([]);
  
  // Get unique technologies and experiences for filter options
  const getUniqueValues = (profiles, key) => {
    return [...new Set(profiles.map(profile => profile[key]).filter(Boolean))]
      .map(value => ({ label: value, value: value }));
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get('http://localhost:8080/ascentitllc/AllProfiles')
      .then((res) => {
        setProfiles(res.data);
        setOriginalProfiles(res.data);
        setSemiFilter(res.data);
      })
      .catch((e) => console.log(e));
  };

  // Modern search handler
  const handleSearch = (searchTerm, filters) => {
    let filtered = [...originalProfiles];
    
    // Text search across multiple fields
    if (searchTerm) {
      filtered = filtered.filter(profile => 
        profile.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.technology?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.gmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.recruiter?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        profile.visa?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    // Apply filters
    if (filters.technology) {
      filtered = filtered.filter(profile => 
        profile.technology?.toLowerCase() === filters.technology.toLowerCase()
      );
    }
    
    if (filters.experience) {
      filtered = filtered.filter(profile => 
        profile.experience?.toString() === filters.experience
      );
    }
    
    if (filters.visa) {
      filtered = filtered.filter(profile => 
        profile.visa?.toLowerCase() === filters.visa.toLowerCase()
      );
    }
    
    if (filters.progress) {
      filtered = filtered.filter(profile => 
        profile.progress?.toLowerCase() === filters.progress.toLowerCase()
      );
    }
    
    setProfiles(filtered);
  };

  // Legacy filter function (keeping for backward compatibility)
  const filterpr = (e) => {
    const { name, value } = e.target;
    setSearch({
      ...search,
      [name]: value,
    });

    setProfiles(
      semiFilter.filter((item) => {
        const techMatch = item.technology.toLowerCase().includes(search.technology.toLowerCase());
        const expMatch = item.experience.toString().toLowerCase().includes(value.toLowerCase());
        return techMatch && expMatch;
      })
    );
  };
const view=(id)=>{
   navigate(`/view/${id}`)
}
const edit=(id)=>{
 navigate(`/edit/${id}`)
}
  // Define filter options for the search bar
  const searchFilters = [
    {
      key: 'technology',
      label: 'Technology',
      type: 'select',
      icon: 'fa-code',
      options: getUniqueValues(originalProfiles, 'technology')
    },
    {
      key: 'experience',
      label: 'Experience',
      type: 'select', 
      icon: 'fa-chart-line',
      options: getUniqueValues(originalProfiles, 'experience').sort((a, b) => parseInt(a.value) - parseInt(b.value))
    },
    {
      key: 'visa',
      label: 'Visa Status',
      type: 'select',
      icon: 'fa-passport',
      options: getUniqueValues(originalProfiles, 'visa')
    },
    {
      key: 'progress',
      label: 'Status',
      type: 'select',
      icon: 'fa-tasks',
      options: getUniqueValues(originalProfiles, 'progress')
    }
  ];

  // Generate suggestions for autocomplete
  const searchSuggestions = [
    ...getUniqueValues(originalProfiles, 'name').map(item => item.value),
    ...getUniqueValues(originalProfiles, 'technology').map(item => item.value),
    ...getUniqueValues(originalProfiles, 'visa').map(item => item.value)
  ];

  return (
    <div style={{ marginTop: '8%', padding: '0 2rem' }}>
      {/* Modern Search Bar */}
      <div className="profiles-header" style={{ marginBottom: '2rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2 style={{ 
            color: '#1e293b', 
            fontWeight: '700', 
            fontSize: '2.5rem',
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            <i className="fas fa-users" style={{ marginRight: '1rem', color: '#3b82f6' }}></i>
            Candidate Profiles
          </h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
            Search and manage candidate profiles efficiently
          </p>
        </div>
        
        <SearchBar
          placeholder="Search candidates by name, technology, email..."
          onSearch={handleSearch}
          filters={searchFilters}
          suggestions={searchSuggestions}
          className="profiles-search"
        />
      </div>
      <div className="input-group">
        <div className="form-outline mx-5">
          <input
            type="search"
            id="technology"
            className="form-control"
            name="technology"
            placeholder="Technology"
            value={search.technology}
            onChange={filterpr}
          />
        </div>
        <div className="form-outline">
          <input
            type="search"
            id="experience"
            className="form-control"
            name="experience"
            placeholder="Experience"
            value={search.experience}
            onChange={filterpr}
          />
        </div>
      </div>

      <div className="table-container">
        <table className="table table-hover">
          <thead>
            <tr>
              <th scope="col">Sl.No</th>
              <th scope="col">Candidate Name</th>
              <th scope="col">Technology</th>
              <th scope="col">Experience</th>
              <th scope="col">Visa</th>
              <th scope="col">Email Id</th>
              <th scope="col">Contact</th>
              <th scope="col">Edit</th>
              <th scope="col">Contact</th>
            </tr>
          </thead>
          <tbody>
            {Profiles.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item.name}</td>
                <td>{item.technology}</td>
                <td>{item.experience}</td>
                <td>{item.visa}</td>
                <td>{item.gmailId}</td>
                <td>{item.contact}</td>
                <td><button className='btn btn-primary' onClick={()=>edit(item.id)}>Edit</button></td>
                <td><button className='btn btn-success' onClick={()=>view(item.id)}>View</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Profiles;

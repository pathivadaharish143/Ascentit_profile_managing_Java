import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profiles = () => {
  const navigate = useNavigate();
  const [Profiles, setProfiles] = useState([]);
  const [search, setSearch] = useState({
    experience: '',
    technology: '',
  });

  const [semiFilter, setSemiFilter] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await axios
      .get('http://localhost:8080/ascentitllc/AllProfiles')
      .then((res) => {
        setProfiles(res.data);
        setSemiFilter(res.data);
      })
      .catch((e) => console.log(e));
  };

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
  return (
    <div style={{ marginTop: '10%' }}>
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

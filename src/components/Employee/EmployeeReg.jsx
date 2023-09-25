import React from 'react'

const EmployeeReg = () => {
    const currentDate = new Date().toISOString().split('T')[0];
  
    const [files, setFiles] = useState([]);
    const [profile, setProfile] = useState({
      name: '',
      gender: 'Other',
      technology: '',
      experience: '',
      visa: '',
      recruiter: '',
      contact: '',
      gmailId: '',
      file:[],
      note: '',
      progress: 'Progress',
      submissionDate: currentDate,
    });
   
  
  
    const handleFileChange = (e) => {
      const files = Array.from(e.target.files);
      setFiles(files);
    };
    const eventhandle = (event) => {
      const { name, value } = event.target;
      setProfile({ ...profile, [name]: value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      const formData = new FormData();
    // Append each file to the FormData object with the name 'files'
  for (const file of files) {
    formData.append('files', file, file.name); // Use the file name as the third argument
  }
     // Append other profile data to the FormData object
  for (const key in profile) {
    if (key !== 'files') {
      formData.append(key, profile[key]);
    }
  }
    console.log(files)
    console.log(profile)
    setProfile({...profile,file:files})
      axios
    .post('http://localhost:8080/ascentitllc/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then(() =>
        toast.success('Profile successfully Submitted', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        })
      )
      .catch((error) => console.log(error));
    
     
      // setProfile({
      //   name: '',
      //   gender: 'Other',
      //   technology: '',
      //   otherTechnology: '',
      //   experience: '',
      //   visa: '',
      //   otherVisa: '',
      //   recruiter: '',
      //   contact: '',
      //   gmailId: '',
      //   file: '',
      //   note: '',
      //   progress: 'Progress',
      //   submissionDate: currentDate,
      // });
    };
  
    const usVisaOptions = [
      'Other',
      'H1B',
      'Us-Citizen',
      'Green Card',
      'L1',
      'E3',
      'TN',
      'O1',
      'H2B',
      'J1',
      'B1',
      'F1',
      'M1',
      'E1',
      'E2',
      'H4',
      'L2',
      'E3D',
      'O2',
      'H2A',
      'F2',
      'M2',
      'J2',
      'E3R',
      'O3',
      'P1',
      'P2',
      'P3',
      'P4',
      'Q1',
      'R1',
      'R2',
      'T1',
      'T2',
      'U1',
      'U2',
      'U3',
      'U4',
      'U5',
      'V1',
      'V2',
      'V3',
      'V4',
      'V5',
    ];
  
    const technologyOptions = [
      'Other',
      'Java',
      'Python',
      'JavaScript',
      'C#',
      '.NET',
      'PowerApps',
      'Power BI',
      'PHP',
      'Ruby',
      'Swift',
      'Kotlin',
      'Go',
      'Rust',
      'TypeScript',
      'HTML/CSS',
      'React',
      'Angular',
      'Vue.js',
      'Node.js',
      'Express.js',
      'Spring Boot',
      'Django',
      'Flask',
      'ASP.NET',
      'Laravel',
      'Ruby on Rails',
      'iOS Development',
      'Android Development',
      'DevOps',
      'Data Science',
      'Machine Learning',
      'Artificial Intelligence',
      'Cloud Computing',
      'Big Data',
      'Blockchain',
      'Cybersecurity',
      'Frontend Development',
      'Backend Development',
      'Full-Stack Development',
      'Database Administration',
      'UI/UX Design',
      'Game Development',
      'Embedded Systems',
      'AR/VR Development',
      'Internet of Things (IoT)',
    ];
  
  
    const numericExperienceOptions = Array.from({ length: 30 }, (_, i) => (i + 1).toString());
  
    return (
  
      <>
  
      <div className="container-fluid py-5 mb-4">
        <Card className="shadow p-3">
          <Card.Body>
            <Card.Title>Employee Registration</Card.Title>
          
            <Form onSubmit={handleSubmit} >
              <div className="row mb-4">
                <div className="col-md-4">
                  <Form.Group controlId="name">
                    <Form.Label>Candidate Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Candidate name"
                      required
                      name="name"
                      value={profile.name}
                      onChange={eventhandle}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="gender">
                    <Form.Label>Gender</Form.Label>
                    <Form.Select
                      required
                      name="gender"
                      value={profile.gender}
                      onChange={eventhandle}
                    >
                      <option>Other</option>
                      <option>Male</option>
                      <option>Female</option>
                    </Form.Select>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="technology">
                    <Form.Label>Technology</Form.Label>
                    <Form.Control
                      as="select"
                      value={profile.technology}
                      onChange={eventhandle}
                      name="technology"
                      required
                    >
                      <option value="">Select Technology</option>
                      {technologyOptions.map((tech) => (
                        <option key={tech} value={tech}>
                          {tech}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </Form.Control>
                    {profile.technology === 'Other' && (
                      <Form.Control
                        type="text"
                        placeholder="Enter other technology"
                        value={profile.technology}
                        name="technology"
                        onChange={eventhandle}
                        required
                      />
                    )}
                  </Form.Group>
                </div>
              </div>
  
              <div className="row mb-4">
                <div className="col-md-4">
                  <Form.Group controlId="experience">
                    <Form.Label>Experience</Form.Label>
                    <Form.Control
                      as="select"
                      value={profile.experience}
                      onChange={eventhandle}
                      name="experience"
                      required
                    >
                      <option value="">Select Experience</option>
                      {numericExperienceOptions.map((exp) => (
                        <option key={exp} value={exp}>
                          {exp}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </Form.Control>
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="visa" >
                    <Form.Label>Visa</Form.Label>
                    <Form.Control
                      as="select"
                      value={profile.visa}
                      onChange={eventhandle}
                      name="visa"
                      required
                    >
                      <option value="">Select Visa</option>
                      {usVisaOptions.map((visa) => (
                        <option key={visa} value={visa}>
                          {visa}
                        </option>
                      ))}
                      <option value="Other">Other</option>
                    </Form.Control>
                    {profile.visa === 'Other' && (
                      <Form.Control
                        type="text"
                        placeholder="Enter other visa"
                        value={profile.visa}
                        name="Visa"
                        onChange={eventhandle}
                        required
                      />
                    )}
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="recruiter">
                    <Form.Label>Recruiter</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter recruiter mailId"
                      value={profile.recruiter}
                      name="recruiter"
                      onChange={eventhandle}
                      required
                    />
                  </Form.Group>
                </div>
              </div>
  
              <div className="row mb-4">
                <div className="col-md-4">
                  <Form.Group controlId="contact">
                    <Form.Label>Contact</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Candidate contact"
                      value={profile.contact}
                      name="contact"
                      onChange={eventhandle}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                  <Form.Group controlId="gmailId">
                    <Form.Label>Gmail ID</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter Candidate Gmail ID"
                      value={profile.gmailId}
                      name="gmailId"
                      onChange={eventhandle}
                      required
                    />
                  </Form.Group>
                </div>
                <div className="col-md-4">
                <Form.Group controlId="files">
    <Form.Label>Upload Files</Form.Label>
    <Form.Control
      type="file"
      name="files"
      multiple
      onChange={handleFileChange}
      required
    />
  </Form.Group>
                </div>
              </div>
  
              <div className="row mb-4">
                <div className="col-md-4">
                  <Form.Group controlId="note">
                    <Form.Label>Note</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={3}
                      placeholder="Enter Candidate note"
                      value={profile.note}
                      name="note"
                      onChange={eventhandle}
                    />
                  </Form.Group>
                </div>
  
                <div className="col-md-4">
                  <Form.Group controlId="submissionDate">
                    <Form.Label>Submission Date</Form.Label>
                    <Form.Control
                      type="date"
                      defaultValue={currentDate}
                      readOnly
                      value={profile.submissionDate}
                      name="submissionDate"
                      onChange={eventhandle}
                    />
                  </Form.Group>
                </div>
  
                <div className="col-md-4">
                  <Form.Group controlId="progress">
                    <Form.Label>Progress</Form.Label>
                    <Form.Select
                      required
                      name="progress"
                      value={profile.progress}
                      onChange={eventhandle}
                    >
                      <option>Progress</option>
                      <option>Working</option>
                      <option>Placed</option>
                      <option>Bench</option>
                    </Form.Select>
                  </Form.Group>
                 
                </div>
                <div className="text-end  mb-5">
                <Button variant="warning" type="submit" style={{ backgroundColor: '#fd7e14' }}>
                  Submit
                </Button>
              </div>
              </div>
             
             
            </Form>
           
          </Card.Body>
        </Card>
      </div>
      </>
      
    );
  };

export default EmployeeReg
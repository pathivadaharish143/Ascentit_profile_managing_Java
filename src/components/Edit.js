import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Edit = () => {
  const { id } = useParams();

  const [profile, setProfile] = useState({
    name: '',
    gender: '',
    technology: '',
    experience: '',
    visa: '',
    recruiter: '',
    contact: '',
    gmailId: '',
    file: [],
    note: '',
    progress: '',
  });
  const [isEditing, setIsEditing] = useState(true);
  const [fileInput, setFileInput] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ascentitllc/getbyid/${id}`);
        setProfile(response.data);
        setFileInput([]); // Clear any existing file inputs
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log(profile)
    try {
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('gender', profile.gender);
      formData.append('technology', profile.technology);
      formData.append('experience', profile.experience);
      formData.append('visa', profile.visa);
      formData.append('recruiter', profile.recruiter);
      formData.append('contact', profile.contact);
      formData.append('gmailId', profile.gmailId);
      formData.append('note', profile.note);
      formData.append('progress', profile.progress);

      // Append existing files to the FormData
      for (let i = 0; i < profile.file.length; i++) {
        formData.append('files', profile.file[i]);
      }

      // Append new files to the FormData
      for (let i = 0; i < fileInput.length; i++) {
        formData.append('files', fileInput[i]);
      }

      await axios.patch(`http://localhost:8080/ascentitllc/edit/${id}`, formData);

      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleFileInputChange = (e) => {
    const files = e.target.files;
    setFileInput(files);
  };

  return (
    <div className="container-fluid">
      <Card className="shadow p-3">
        <Card.Body>
          <Card.Title>Profile Details</Card.Title>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col md={4}>
                <Form.Group controlId="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.name}
                    name="name"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, name: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.gender}
                    name="gender"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, gender: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="technology">
                  <Form.Label>Technology</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.technology}
                    name="technology"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, technology: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="experience">
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.experience}
                    name="experience"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, experience: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="visa">
                  <Form.Label>Visa</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.visa}
                    name="visa"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, visa: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="recruiter">
                  <Form.Label>Recruiter</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.recruiter}
                    name="recruiter"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, recruiter: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="contact">
                  <Form.Label>Contact</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.contact}
                    name="contact"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, contact: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="gmailId">
                  <Form.Label>Gmail ID</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.gmailId}
                    name="gmailId"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, gmailId: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Form.Group controlId="note">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={profile.note}
                    name="note"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, note: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="progress">
                  <Form.Label>Progress</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.progress}
                    name="progress"
                    readOnly={!isEditing}
                    onChange={(e) => {
                      if (isEditing) {
                        setProfile({ ...profile, progress: e.target.value });
                      }
                    }}
                  />
                </Form.Group>
              </Col>
            </Row>
            
            {/* Attachments */}
            <Row>
              <Col md={4}>
              <Form.Group controlId="files">
                  <Form.Label>Attachments</Form.Label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx,.txt"
                    multiple
                    onChange={handleFileInputChange}
                    disabled={!isEditing}
                  />
                </Form.Group>
              </Col>
            </Row>

            {/* Edit and Save buttons */}
            <div className="d-flex justify-content-end">
              {isEditing ? (
                <>
                  <Button variant="primary" type="submit">
                    Save
                  </Button>
                  <Button variant="secondary" onClick={toggleEdit}>
                    Cancel
                  </Button>
                </>
              ) : (
                <Button variant="primary" onClick={toggleEdit}>
                  Edit
                </Button>
              )}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Edit;

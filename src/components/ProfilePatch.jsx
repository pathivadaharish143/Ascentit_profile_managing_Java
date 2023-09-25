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
  const [profile, setProfile] = useState({});
  const [isEditing, setIsEditing] = useState(false); // Flag to enable/disable editing
  const [fileInput, setFileInput] = useState([]); // For file input
  const [existingFiles, setExistingFiles] = useState([]); // Store existing files

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ascentitllc/getbyid/${id}`);
        setProfile(response.data);
        // Retrieve existing files
        setExistingFiles(response.data.files || []); // Assuming files field exists in your profile data
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // Function to handle form submission when editing
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a FormData object to send form data including files
      const formData = new FormData();
      formData.append('name', profile.name);
      formData.append('gender', profile.gender);
      formData.append('technology', profile.technology);
      formData.append('experience', profile.experience);
      formData.append('visa', profile.visa);
      formData.append('contact', profile.contact);
      formData.append('gmailId', profile.gmailId);
      formData.append('note', profile.note);
      formData.append('progress', profile.progress);
      
      // Append existing files if no new files are selected
      if (fileInput.length === 0 && existingFiles.length > 0) {
        for (let i = 0; i < existingFiles.length; i++) {
          formData.append('files', existingFiles[i]);
        }
      } else {
        // Append new files to the FormData
        for (let i = 0; i < fileInput.length; i++) {
          formData.append('files', fileInput[i]);
        }
      }

      // Send a PUT request to update the profile with the modified data
      await axios.put(`http://localhost:8080/ascentitllc/update/${id}`, formData);

      // Disable editing mode after submission
      setIsEditing(false);
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  // Function to toggle editing mode
  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  // Function to handle file input change
  const handleFileInputChange = (e) => {
    const files = e.target.files;
    setFileInput(files);
  };

  // Helper function to chunk an array into groups of a specified size
  const chunkArray = (arr, size) => {
    const chunkedArray = [];
    for (let i = 0; i < arr.length; i += size) {
      chunkedArray.push(arr.slice(i, i + size));
    }
    return chunkedArray;
  };

  const fields = Object.entries(profile);
  const chunkedFields = chunkArray(fields, 3);

  return (
    <div className="container-fluid">
      <Card className="shadow p-3">
        <Card.Body>
          <Card.Title>Profile Details</Card.Title>
          <Form onSubmit={handleFormSubmit}>
            {chunkedFields.map((rowFields, rowIndex) => (
              <Row key={rowIndex}>
                {rowFields.map(([fieldKey, fieldValue]) => (
                  <Col md={4} key={fieldKey}>
                    <Form.Group controlId={fieldKey}>
                      <Form.Label>{fieldKey}</Form.Label>
                      <Form.Control
                        type="text"
                        value={fieldValue}
                        name={fieldKey}
                        readOnly={!isEditing}
                        onChange={(e) => {
                          if (isEditing) {
                            const updatedProfile = { ...profile };
                            updatedProfile[fieldKey] = e.target.value;
                            setProfile(updatedProfile);
                          }
                        }}
                      />
                    </Form.Group>
                  </Col>
                ))}
              </Row>
            ))}

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

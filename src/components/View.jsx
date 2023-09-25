// ProfileDetail.js
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaEnvelope, FaSlack, FaTelegram, FaWhatsapp } from 'react-icons/fa';

const ProfileDetail = () => {
  const { id } = useParams();
  const [profile, setProfile] = useState({});
  const [shareableLink, setShareableLink] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/ascentitllc/getbyid/${id}`);
        setProfile(response.data);
        generateShareableLink(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  // Function to generate a shareable link with profile details
  const generateShareableLink = (profileData) => {
    const shareableText = `Candidate Name: ${profileData.name}%0AGender: ${profileData.gender}%0ATechnology: ${profileData.technology}%0AExperience: ${profileData.experience}%0AVisa: ${profileData.visa}%0ARecruiter: ${profileData.recruiter}%0AContact: ${profileData.contact}%0AGmail ID: ${profileData.gmailId}%0ANote: ${profileData.note}%0AProgress: ${profileData.progress}%0ASubmission Date: ${profileData.submissionDate}`;
    const whatsappLink = `https://api.whatsapp.com/send?text=${shareableText}`;
    const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(shareableText)}`;
    const gmailLink = `mailto:?subject=Profile Details: ${profileData.name}&body=${shareableText}`;
    const slackLink = `https://slack.com/intl/en-in/app/home?utm_source=slack&utm_medium=referral&utm_campaign=logo_share&utm_content=logo_share-button&team=${encodeURIComponent(
      'your-slack-team-id'
      
    )}`;
 
    setShareableLink({ whatsappLink, gmailLink, slackLink, telegramLink });
  };
 
  const handleDownloadFile = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/ascentitllc/downloadFilesAsZip/${id}`, {
        responseType: 'blob', // Set the response type to blob
      });
      const blob = new Blob([response.data], { type: 'application/zip' });

      // Create a blob URL for the downloaded file and trigger a download
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${profile.name}.zip`; // Specify the file name here
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  };
 
  return (
    <div className="container-fluid">
      <Card className="shadow p-3">
        <Card.Body>
          <Card.Title>Profile Details</Card.Title>
          <Form>
            <Row>
              <Col md={4}>
                <Form.Group controlId="name">
                  <Form.Label>Candidate Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Candidate name"
                    required
                    name="name"
                    value={profile.name}
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="gender">
                  <Form.Label>Gender</Form.Label>
                  <Form.Select
                    required
                    name="gender"
                    value={profile.gender}
                    readOnly
                  >
                    <option>Other</option>
                    <option>Male</option>
                    <option>Female</option>
                  </Form.Select>
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="share">
                  <Form.Label>Share</Form.Label>
                  <div>
                    <Button
                      variant="primary"
                      onClick={() => window.open(shareableLink.whatsappLink, '_blank')}
                      className="me-2"
                    >
                       <FaWhatsapp/> 
                    </Button>
                    <Button
                      variant="primary"
                      onClick={() => window.open(shareableLink.gmailLink, '_blank')}
                      className="me-2"
                    >
                       <FaEnvelope /> 
                    </Button>
                    <Button
                      className="me-2"
                      variant="primary"
                      onClick={() => window.open(shareableLink.slackLink, '_blank')}
                    >
                     <FaSlack /> 
                    </Button>
                    <Button
  variant="primary"
  onClick={() => window.open(shareableLink.telegramLink, '_blank')}
  className="me-2"
>
  <FaTelegram /> 
</Button>
                  </div>
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
                    readOnly
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
                    readOnly
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
                    readOnly
                 
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
                    readOnly
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
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="submissionDate">
                  <Form.Label>Submission Date</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.submissionDate}
                    name="submissionDate"
                    readOnly
                  />
                </Form.Group>
              </Col>
              
            </Row>

            <Row>
              <Col md={4}>
                <Form.Group controlId="progress">
                  <Form.Label>Progress</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.progress}
                    name="progress"
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
                <Form.Group controlId="note">
                  <Form.Label>Note</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    value={profile.note}
                    name="note"
                    readOnly
                  />
                </Form.Group>
              </Col>
              <Col md={4}>
              <Form.Group controlId="files">
                  <Form.Label>Documents</Form.Label>
                  <Button variant="primary" onClick={handleDownloadFile}>
                    Download Files
                  </Button>
                
                </Form.Group>
              </Col>
             
             
              <Col md={4}>
                <Form.Group controlId="technology">
                  <Form.Label>Technology</Form.Label>
                  <Form.Control
                    type="text"
                    value={profile.technology}
                    name="technology"
                    readOnly
                  />
                </Form.Group>
              </Col>
            </Row>
            
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProfileDetail;

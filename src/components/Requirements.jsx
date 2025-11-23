import React from 'react';
import './Dashboard.css';

const latestJobs = [
  {
    id: 101,
    title: 'Principal Java Architect',
    company: 'AscentIT LLC',
    location: 'New York, NY',
    experience: '10+ Years',
    datePosted: 'Nov 16, 2025',
    visaStatus: 'H1B/GC/USC',
    jobType: 'Full-time',
    skills: ['Java', 'System Design', 'Enterprise Architecture', 'Cloud Migration', 'Team Leadership'],
    description: 'Lead enterprise-wide Java architecture decisions and guide technical strategy for large-scale applications. Drive innovation and mentor senior developers.'
  },
  {
    id: 102,
    title: 'Java Kubernetes Developer',
    company: 'CloudScale Technologies',
    location: 'Remote',
    experience: '4-6 Years',
    datePosted: 'Nov 16, 2025',
    visaStatus: 'Any Visa',
    jobType: 'Contract',
    skills: ['Java', 'Kubernetes', 'Docker', 'Helm', 'Service Mesh', 'Istio'],
    description: 'Build and deploy containerized Java applications on Kubernetes. Experience with cloud-native development and orchestration required.'
  },
  {
    id: 103,
    title: 'Senior Java GraphQL Developer',
    company: 'APINext Solutions',
    location: 'San Francisco, CA',
    experience: '5-7 Years',
    datePosted: 'Nov 16, 2025',
    visaStatus: 'USC/GC Only',
    jobType: 'Full-time',
    skills: ['Java', 'GraphQL', 'Spring Boot', 'Apollo Server', 'Schema Design'],
    description: 'Design and implement GraphQL APIs for modern web and mobile applications. Focus on performance optimization and schema evolution.'
  },
  {
    id: 104,
    title: 'Java Fintech Developer',
    company: 'PaymentTech Innovations',
    location: 'Austin, TX',
    experience: '3-5 Years',
    datePosted: 'Nov 16, 2025',
    visaStatus: 'H1B/GC/USC',
    jobType: 'Full-time',
    skills: ['Java', 'Payment Processing', 'PCI Compliance', 'Banking APIs', 'Fraud Detection'],
    description: 'Develop secure payment processing systems and financial applications. Experience with regulatory compliance and high-volume transactions essential.'
  },
  {
    id: 105,
    title: 'Java Event Sourcing Developer',
    company: 'EventStream Corp',
    location: 'Seattle, WA',
    experience: '4-6 Years',
    datePosted: 'Nov 16, 2025',
    visaStatus: 'Any Visa',
    jobType: 'Contract',
    skills: ['Java', 'Event Sourcing', 'CQRS', 'Apache Kafka', 'Event Store'],
    description: 'Build event-driven architectures using event sourcing patterns. Experience with distributed systems and event streaming platforms required.'
  }
];

const javaRoles = [
  {
    id: 1,
    title: 'Senior Java Developer',
    company: 'AscentIT LLC',
    location: 'Atlanta, GA',
    experience: '5-7 Years',
    datePosted: 'Nov 15, 2025',
    visaStatus: 'H1B/GC/USC',
    jobType: 'Full-time',
    skills: ['Java 8+', 'Spring Boot', 'Microservices', 'REST API', 'AWS'],
    description: 'We are seeking a Senior Java Developer to join our dynamic team. The ideal candidate will have extensive experience in Java development, microservices architecture, and cloud technologies.'
  },
  {
    id: 2,
    title: 'Java Full Stack Engineer',
    company: 'TechCorp Solutions',
    location: 'Remote',
    experience: '3-5 Years',
    datePosted: 'Nov 14, 2025',
    visaStatus: 'Any Visa',
    jobType: 'Contract',
    skills: ['Java', 'React', 'Angular', 'Spring', 'PostgreSQL'],
    description: 'Join our innovative team as a Full Stack Java Engineer. You will work on both frontend and backend development, creating scalable web applications.'
  },
  {
    id: 3,
    title: 'Java Backend Developer',
    company: 'DataFlow Inc',
    location: 'Dallas, TX',
    experience: '2-4 Years',
    datePosted: 'Nov 13, 2025',
    visaStatus: 'USC/GC Only',
    jobType: 'Full-time',
    skills: ['Java', 'Spring Framework', 'MongoDB', 'Docker', 'Kafka'],
    description: 'We are looking for a Java Backend Developer to design and implement robust backend services. Experience with distributed systems is a plus.'
  },
  {
    id: 4,
    title: 'Java Microservices Architect',
    company: 'CloudTech Innovations',
    location: 'San Francisco, CA',
    experience: '7-10 Years',
    datePosted: 'Nov 12, 2025',
    visaStatus: 'H1B/GC/USC',
    jobType: 'Full-time',
    skills: ['Java', 'Microservices', 'Kubernetes', 'AWS', 'Spring Cloud'],
    description: 'Design and architect microservices-based solutions for enterprise applications. Lead technical decisions and mentor development teams.'
  },
  {
    id: 5,
    title: 'Junior Java Developer',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    experience: '1-2 Years',
    datePosted: 'Nov 12, 2025',
    visaStatus: 'Any Visa',
    jobType: 'Full-time',
    skills: ['Java', 'Spring', 'MySQL', 'Git', 'JUnit'],
    description: 'Perfect opportunity for a junior developer to grow their skills in a fast-paced startup environment working on cutting-edge projects.'
  }
];

const Requirements = () => (
  <div className="requirements-professional-bg">
    <div className="requirements-professional-container">
      <header className="requirements-professional-header">
        <h1>Current Job Openings</h1>
        <p>Explore our latest Java development opportunities</p>
      </header>

      <section className="latest-jobs-section">
        <h2 className="latest-jobs-title">
          <i className="fa fa-star"></i>
          Latest Jobs - Posted Today
        </h2>
        <div className="requirements-professional-grid">
          {latestJobs.map(role => (
            <div key={role.id} className="requirements-professional-card latest-job-card">
              <div className="latest-job-badge">NEW TODAY</div>
              <div className="job-card-header">
                <div className="job-title-section">
                  <h2>{role.title}</h2>
                  <div className="job-meta">
                    <span className="company">{role.company}</span>
                    <span className="location">{role.location}</span>
                  </div>
                </div>
                <div className="job-badges">
                  <span className="job-type-badge">{role.jobType}</span>
                  <span className="visa-badge">{role.visaStatus}</span>
                </div>
              </div>
              
              <div className="job-details">
                <div className="job-detail-row">
                  <strong>Experience:</strong> {role.experience}
                </div>
                <div className="job-detail-row">
                  <strong>Posted:</strong> {role.datePosted}
                </div>
                <div className="job-detail-row">
                  <strong>Skills:</strong>
                  <div className="skills-container">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="job-description">
                <h4>Job Description</h4>
                <p>{role.description}</p>
              </div>
              
              <div className="job-card-footer">
                <a href="/submission" className="submit-profile-btn">Submit Profile</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="all-jobs-section">
        <h2 className="all-jobs-title">All Open Positions</h2>
        <div className="requirements-professional-grid">
          {javaRoles.map(role => (
            <div key={role.id} className="requirements-professional-card">
              <div className="job-card-header">
                <div className="job-title-section">
                  <h2>{role.title}</h2>
                  <div className="job-meta">
                    <span className="company">{role.company}</span>
                    <span className="location">{role.location}</span>
                  </div>
                </div>
                <div className="job-badges">
                  <span className="job-type-badge">{role.jobType}</span>
                  <span className="visa-badge">{role.visaStatus}</span>
                </div>
              </div>
              
              <div className="job-details">
                <div className="job-detail-row">
                  <strong>Experience:</strong> {role.experience}
                </div>
                <div className="job-detail-row">
                  <strong>Posted:</strong> {role.datePosted}
                </div>
                <div className="job-detail-row">
                  <strong>Skills:</strong>
                  <div className="skills-container">
                    {role.skills.map((skill, idx) => (
                      <span key={idx} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="job-description">
                <h4>Job Description</h4>
                <p>{role.description}</p>
              </div>
              
              <div className="job-card-footer">
                <a href="/submission" className="submit-profile-btn">Submit Profile</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  </div>
);

export default Requirements;

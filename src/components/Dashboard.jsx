import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedYear: '2025',
      selectedMonth: '',
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  saveModalData = () => {
    this.setState({ showModal: false });
  }

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year });
  };

  render() {
    return (
      <div className="dashboard-bg">
        <div className="dashboard-hero">
          <h1>Welcome, Admin</h1>
          <p>Empower your team, track progress, and drive success with your modern dashboard.</p>
        </div>
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="navi">
                <ul>
                  <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                  <li><a href="/requirements"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Requirements</span></a></li>
                  <li><a href="profiles"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profiles</span></a></li>
                  <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Complaints</span></a></li>
                  <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Reports</span></a></li>
                  <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Settings</span></a></li>
                  <li><a href="/contact"><i className="fa fa-envelope" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Contact Us</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row">
                <header className="dashboard-header">
                  <div className="col-md-7">
                    <nav className="navbar-default pull-left">
                      <div className="navbar-header">
                        <button type="button" className="navbar-toggle collapsed" data-toggle="offcanvas" data-target="#side-menu" aria-expanded="false">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                        </button>
                      </div>
                    </nav>
                  </div>
                  <div className="col-md-12">
                    {/* header-rightside cleaned: removed submit, fav icons, dropdown */}
                  </div>
                </header>
              </div>
              <div className="user-dashboard">
                <div className="row">
                  <div className="col-md-6 col-sm-6 col-xs-12 gutter">
                    <div className="dashboard-card">
                      <h2 className="dashboard-card-title">Your Sale</h2>
                      <DropdownButton
                        title={`Month: ${this.state.selectedMonth || 'Select Month'}`}
                        onSelect={month => this.setState({ selectedMonth: month })}
                        id="sales-month-dropdown"
                      >
                        <Dropdown.Item eventKey="January">January</Dropdown.Item>
                        <Dropdown.Item eventKey="February">February</Dropdown.Item>
                        <Dropdown.Item eventKey="March">March</Dropdown.Item>
                        <Dropdown.Item eventKey="April">April</Dropdown.Item>
                        <Dropdown.Item eventKey="May">May</Dropdown.Item>
                        <Dropdown.Item eventKey="June">June</Dropdown.Item>
                        <Dropdown.Item eventKey="July">July</Dropdown.Item>
                        <Dropdown.Item eventKey="August">August</Dropdown.Item>
                        <Dropdown.Item eventKey="September">September</Dropdown.Item>
                        <Dropdown.Item eventKey="October">October</Dropdown.Item>
                        <Dropdown.Item eventKey="November">November</Dropdown.Item>
                        <Dropdown.Item eventKey="December">December</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-6 col-xs-12 gutter">
                    <div className="dashboard-card">
                      <h2 className="dashboard-card-title">Report</h2>
                      <DropdownButton
                        title={`Year: ${this.state.selectedYear}`}
                        onSelect={this.handleYearSelect}
                        id="report-year-dropdown"
                      >
                        {Array.from({ length: 20 }, (_, i) => 2025 - i).map(year => (
                          <Dropdown.Item eventKey={year} key={year}>{year}</Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Project Modal */}
        <Modal show={this.state.showModal} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add Project</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="text" placeholder="Project Title" name="name" />
            <input type="text" placeholder="Post of Post" name="mail" />
            <input type="text" placeholder="Author" name="password" />
            <textarea placeholder="Description"></textarea>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.closeModal}>Close</Button>
            <Button variant="primary" onClick={this.saveModalData}>Save</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default Dashboard;

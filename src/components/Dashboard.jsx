import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js'; // Import Bootstrap JavaScript after jQuery and Popper.js
import { Button, Modal, DropdownButton, Dropdown } from 'react-bootstrap';
import './Dashboard.css';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedYear: 'Last Year', // Default selection
    };
  }

  openModal = () => {
    this.setState({ showModal: true });
  }

  closeModal = () => {
    this.setState({ showModal: false });
  }

  saveModalData = () => {
    // Implement your logic to save the data here
    this.setState({ showModal: false });
  }

  handleYearSelect = (year) => {
    this.setState({ selectedYear: year });
  };

  render() {
    return (
      <>
        <div className="container-fluid display-table">
          <div className="row display-table-row">
            <div className="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
              <div className="navi">
                <ul>
                  <li className="active"><a href="#"><i className="fa fa-home" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Home</span></a></li>
                  <li><a href="requirements"><i className="fa fa-tasks" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Requirements</span></a></li>
                  <li><a href="profiles"><i className="fa fa-user" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Profiles</span></a></li>
                  <li><a href="#"><i className="fa fa-bar-chart" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Complaints</span></a></li>
                  <li><a href="#"><i className="fa fa-calendar" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Reports</span></a></li>
                  <li><a href="#"><i className="fa fa-cog" aria-hidden="true"></i><span className="hidden-xs hidden-sm">Settings</span></a></li>
                </ul>
              </div>
            </div>
            <div className="col-md-10 col-sm-11 display-table-cell v-align">
              <div className="row">
                <header>
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
                    <div className="header-rightside">
                      <ul className="list-inline header-top pull-right pt-5%">
                        <li className="hidden-xs"><a href="submission" className="add-project" onClick={this.openModal}>Submit Profile</a></li>
                        <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i></a></li>
                        <li>
                          <a href="#" className="icon-info">
                            <i className="fa fa-bell" aria-hidden="true"></i>
                            <span className="label label-primary">3</span>
                          </a>
                        </li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown"><img src="http://jskrishna.com/work/merkury/images/user-pic.jpg" alt="user" />
                            <b className="caret"></b></a>
                          <ul className="dropdown-menu">
                            <li>
                              <div className="navbar-content">
                                <span>JS Krishna</span>
                                <p className="text-muted small">
                                  me@jskrishna.com
                                </p>
                                <div className="divider"></div>
                                <a href="#" className="view btn-sm active">View Profile</a>
                              </div>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </header>
              </div>
              <div className="user-dashboard">
                <h1>Hello, JS</h1>
                <div className="row">
                  <div className="col-md-5 col-sm-5 col-xs-12 gutter">
                    <div className="sales">
                      <h2>Your Sale</h2>
                      <DropdownButton
                        title={`Period: ${this.state.selectedYear}`}
                        onSelect={this.handleYearSelect}
                        id="sales-period-dropdown"
                      >
                           <Dropdown.Item href="#">2012</Dropdown.Item>
    <Dropdown.Item href="#">2014</Dropdown.Item>
    <Dropdown.Item href="#">2015</Dropdown.Item>
    <Dropdown.Item href="#">2016</Dropdown.Item>
                      </DropdownButton>
                    </div>
                  </div>
                  <div className="col-md-7 col-sm-7 col-xs-12 gutter">
                    <div className="sales report">
                      <h2>Report</h2>
                      <DropdownButton
                        title={`Period: ${this.state.selectedYear}`}
                        onSelect={this.handleYearSelect}
                        id="report-period-dropdown"
                      >
                            <Dropdown.Item href="#">2012</Dropdown.Item>
    <Dropdown.Item href="#">2014</Dropdown.Item>
    <Dropdown.Item href="#">2015</Dropdown.Item>
    <Dropdown.Item href="#">2016</Dropdown.Item>
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
      </>
    );
  }
}

export default Dashboard;

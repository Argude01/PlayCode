import React from 'react';
import '../css/App.css';
import { Row, Col } from 'react-bootstrap';
import { NavBar } from './NavBar';
import { PanelsContainer } from './PanelsContainer';
import { ProjectsContainer } from './ProjectsContainer';
import { LeftSideBar } from './LeftSideBar';

class App extends React.Component
{
  render ()
  {
    return (
      <div className="container-fluid">
        <Row>
          <NavBar />
        </Row>
        <Row>
          <Col md="auto">
            <LeftSideBar />
          </Col>
          <Col>
            <div className="jumbotron">
              <ProjectsContainer />
              <hr></hr>
              <PanelsContainer id="teacher-section" /> 
            </div>
          </Col>
        </Row>
        <footer>
          <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
        </footer>
      </div>
    );
  }
}

export default App;
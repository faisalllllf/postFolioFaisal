import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import hrmproject from "../../Assets/Projects/hrmproject.png";
import suicide from "../../Assets/Projects/suicide.png";
import hotelll from "../../Assets/Projects/hotelll.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hrmproject}
              isBlog={false}
              title="hrm"
              description="Human Resources Management it is website to manage all employees in one organization to maintain employee data."
              ghLink="https://github.com/faisalllllf/Hrm.git"
            //  demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hotelll}
              isBlog={false}
              title="Hotel Management"
              description="Web application For Hotel Management of a particular Hotel TEchnologies used are Java react and Api and Aws and mysql"
              ghLink="https://github.com/faisalllllf/HotelsManage.git"
             // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Stocks Data management"
              description="Spring Boot and Spring Security. The service will provide real-time or near real-time stock quotes to client applications."
              ghLink="https://github.com/faisalllllf/StockService.git"
            //  demoLink=""              
            />
          </Col>

        

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;


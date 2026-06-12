import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/BOOK.png";
import shoe from "../../Assets/Projects/medical.png";
import toDo from "../../Assets/Projects/TODO.png";
import foood from "../../Assets/Projects/foood.png";
import bank from "../../Assets/Projects/bank.png";

import rate from "../../Assets/Projects/ride.png";
import invent from "../../Assets/Projects/inn.png";
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
              imgPath={invent}
              isBlog={false}
              title=" AI Book Chat Platform"
              description="an AI-powered platform that transforms static PDFs into real-time conversational experiences. Implemented natural voice synthesis, ElevenLabs persona previews, and secure authentication. Users can extract text from PDFs, interact with their content via voice, and access session transcripts, creating a seamless, dynamic library experience."


              ghLink="https://github.com/edenWerke/Bookiefied.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

 <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoe}
              isBlog={false}
              title="Care Pluse"
              description="a healthcare platform that streamlines patient registration, appointment scheduling, and medical records management. Designed and implemented complex forms, interactive UI components, and Email notifications to enhance user experience. Ensured responsive design and usability across devices, improving efficiency for patients and clinic staff. Learned and applied modern front-end best practices while integrating dynamic features"
              ghLink="https://github.com/edenWerke/CarePluse.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

<Col md={4} className="project-card">
            <ProjectCard
              imgPath={rate}
              isBlog={false}
              title="Real-Time Rides & Payments"
              description="a full-stack Uber clone using React Native and Expo, enabling real-time ride tracking, driver-rider matching, and secure payments. Leveraged edge-ready features for fast performance and seamless user experience. Delivered a scalable, high-performance app that mimics core Uber functionality while showcasing modern mobile development skills."
              ghLink="https://github.com/edenWerke/Uber-ride.git"
              // demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bank}
              isBlog={false}
              title="Bankist App"
              description="The Finance Manager App is a banking system designed for seamless financial management. It empowers users to efficiently handle their finances by providing easy access to essential features. With this app, users can check their current balance, view transaction history, securely transfer money, request loans, and even close accounts—all with just a few taps."
              ghLink="https://github.com/edenWerke/BankistApp.git"
              // demoLink="https://chatify-49.web.app/"
            />
          </Col>


         




          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={foood}
              isBlog={false}
              title="Food Recipe"
              description="The Food Recipe App is a comprehensive platform designed for cooking enthusiasts of all levels. Users can explore a vast collection of recipes, ranging from quick meals to gourmet dishes, all categorized for easy navigation. Each recipe includes detailed ingredients, step-by-step instructions, and cooking tips to ensure successful preparation.
"
              ghLink="https://github.com/edenWerke/food-recipe.git"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>



         
          

          


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={toDo}
              isBlog={false}
              title="TODO-app"
              description="The Todo App built with React is a lightweight and intuitive task management tool that helps users organize their daily activities. With a clean and responsive interface, users can easily add, edit, and delete tasks. The app allows for task categorization and prioritization, enabling users to focus on what matters most."
              ghLink="https://github.com/edenWerke/my-todo-app.git"
              // demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

      
    

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

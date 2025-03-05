import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import book from "../../Assets/Projects/BOOK.png";
import shoe from "../../Assets/Projects/SHOEE.png";
import toDo from "../../Assets/Projects/TODO.png";
import foood from "../../Assets/Projects/foood.png";
import bank from "../../Assets/Projects/bank.png";

import rate from "../../Assets/Projects/rate3.jpg";
import invent from "../../Assets/Projects/inn.jpg";
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
              imgPath={shoe}
              isBlog={false}
              title="Shoe Shop App"
              description="TThe Shoe Shop App is a user-friendly platform designed for an enhanced online footwear shopping experience. Users can easily browse a variety of shoe styles, including sneakers, boots, and sandals, using an intuitive search function. The app provides detailed product descriptions, high-quality images, and customer reviews to aid decision-making."
              ghLink="https://github.com/edenWerke/Shoe-shop-app.git"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
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
              imgPath={invent}
              isBlog={false}
              title="Inventory Tracking System"
              description="The Inventory Management System developed using PHP is a robust solution designed to streamline the tracking and management of stock levels. This web-based application enables users to efficiently monitor inventory across multiple locations, with real-time updates on stock availability.

Key features include adding and editing product details, tracking stock movements."
              ghLink="https://github.com/edenWerke/ims.git"
              // demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>


          

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rate}
              isBlog={false}
              title="Donate-Blood-App"
              description="The Donate App created with Vue is a user-friendly platform designed to facilitate charitable giving. Users can easily browse various causes and organizations, make donations, and track their contributions over time. The app features a clean and responsive design, making navigation seamless on any device."
              ghLink="https://github.com/edenWerke/Donate-blood.git"
              // demoLink="https://blogs.soumya-jit.tech/"
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

// import React from "react";
// import Card from "react-bootstrap/Card";
// import { ImPointRight } from "react-icons/im";

// function AboutCard() {
//   return (
//     <Card className="quote-card-view">
//       <Card.Body>
//         <blockquote className="blockquote mb-0">
//           <p style={{ textAlign: "justify" }}>
//             Hello there, I am <span className="purple">Eden Werke </span>
//             <br />
//              pursuing a Bachelor’s degree in <span className="purple">Software Engineering </span>at Mekelle University.
//             <br />
//             {/* I have completed Integrated MSc (IMSc) in Maths and Computing at BIT */}
 
//             <br />
//             <br />
//             Apart from coding, some other activities that I love to do!
//           </p>
//           <ul>
//             <li className="about-activity">
//               <ImPointRight /> solving puzzles 
//             </li>
//             <li className="about-activity">
//               <ImPointRight />Chilling with Friends
//             </li>
//             <li className="about-activity">
//               <ImPointRight /> Travelling
//             </li>
//           </ul>

//           <p style={{ color: "rgb(155 126 172)" }}>
//           "Every expert was once a beginner who practiced... a lot!"{" "}
//           </p>
//           <footer className="blockquote-footer">Malcolm Gladwell</footer>
//         </blockquote>
//       </Card.Body>
//     </Card>
//   );
// }

// export default AboutCard;
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello there, I am <span className="purple">Eden Werke</span>, 
            pursuing a Bachelor’s degree in <span className="purple">Software Engineering</span> 
            at Mekelle University.
          </p>
          <p style={{ textAlign: "justify", marginTop: "10px" }}>
            Apart from coding, some other activities that I love to do:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> solving puzzles
            </li>
            <li className="about-activity">
              <ImPointRight /> Chilling with friends
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every expert was once a beginner who practiced... a lot!"
          </p>
          <footer className="blockquote-footer">Malcolm Gladwell</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

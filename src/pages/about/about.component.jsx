import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./about.styles.css";
import Profile from "../../assets/img/profile/profile.jpg";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const About = () => {
  return (
    <div id="about">
      <div className="about">
        <h1 className="pt-3 text-center font-details pb-3">ABOUT ME</h1>
        <Container>
          <Row className="pt-3 pb-5 align-items-center">
            <Col xs={12} md={6}>
              <Row className="justify-content-center mb-2 mr-2 ">
                <Image className="profile justify-content-end" alt="profile" src={Profile} thumbnail fluid />
              </Row>
            </Col>
            <Col xs={12} md={6}>
              {/* Enter your own information here */}
              <Row className=" align-items-start p-2 my-details rounded">
                Hi! I am <strong>&nbsp;Luis Vasquez</strong>
                <br />A passionate developer and designer, from Dominican Republic. I am a Full Stack Web Developer I use React.js, Redux, Express.js, Node.js, firebase and PostgreSQL etc as my tech stack.
                <br />
                Working with the clients, my goal is always driven towards providing amazing experience with the best level of quality and service to them. <br/>
                 I'm also a 3d graphics specialist as you can see in the projects section.
                <br />
my love for design and technology begun when i was a boy I always liked to creat thing like drawing and small games. now I became better at merging good design with useful technology               <br />
              Nice to meet you!
                <br />
                 <br />
                <Col className="d-flex justify-content-center flex-wrap">
                  <div>
                    <a href="./contact">
                      <Button className="m-2" variant="outline-primary">
                        Let's talk
                      </Button>
                    </a>
                  </div>

                  <div>
                    {/* put your git account link here in href */}
                    <a href="https://github.com/luicho06?tab=repositories" target="_blank" rel="noopener noreferrer">
                      <Button className="m-2" variant="outline-dark">
                        GitHub
                      </Button>
                    </a>
                  </div>

                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;

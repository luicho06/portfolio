import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./contact-form.styles.css";

const ContactForm = () => {

  return (
    <div id="contact">
      <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
      <Jumbotron className="contact-jumbotron">
        <Row>
          <Col className="d-flex justify-content-center flex-wrap">
            <div className="m-2">
              <a href="https://mail.google.com/mail/u/0/?tab=rm#inbox" target="_blank" rel="noopener noreferrer">
                <Button variant="outline-danger" title=" luicho_l@hotmail.com ">
                  <i className="fas fa-envelope-square"></i> Email Me
                </Button>
              </a>
            </div>


            <div className="m-2">
              <a href=" https://github.com/luicho06?tab=repositories " target="_blank" rel="noopener noreferrer">
                <Button variant="outline-dark" title="My other projects">
                  <i className="fab fa-github-square"></i> GitHub
                </Button>
              </a>
            </div>
            <div className="m-2">
              <a href="https://www.youtube.com/channel/UCzFNBuID8JCx1caZUU8r_XQ?view_as=subscriber" target="_blank" rel="noopener noreferrer">
                <Button id="youtube-btn" variant="outline-info" title="My YouTube Channel">
                <i class="fab fa-youtube"></i> Youtube
                </Button>
              </a>
            </div>


          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ContactForm;

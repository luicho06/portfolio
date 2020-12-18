import React from "react";
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";

// projects
import grave_background_for_web from "../../assets/img/projects/grave_background_for_web.png";
import muscle_car from "../../assets/img/projects/muscle car.jpg";
import fighterJet from "../../assets/img/projects/plane_orto.png";
import castle from "../../assets/img/projects/castle.png";
import corridor from "../../assets/img/projects/corridor.png";
import field from "../../assets/img/projects/field.png";
import plane from "../../assets/img/projects/plane.png";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";


import "./projects-timeline.styles.css";

const TimeLine = () => {
  return (
    <div id="projects">
      <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
      <Timeline>
        <Events>
        {/* Project: Todo List With MUI */}
        {/* Add your own data here */}
        <ImageEvent
            date="02/09/2020"
            className="text-center"
            text="Grave Peace Art"
            src={grave_background_for_web}
            alt="grave"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is an Art of Peace , created with Blender. it represents the peace after death. I created complitly using Blender. for the background I used a hdri and for the grass I used blender's default particle system.
                        <hr />
                        <strong>Skills:</strong>
                        <ul className="list-styles pt-1">
                          <li>Basic 3D modelling</li>
                          <li>u v unwrapping knowledge</li>
                          <li>particle effects kwodlege</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">



              </div>
            </div>
          </ImageEvent>


{/* Project: Muscle car */}
<ImageEvent
            date="19/11/2019"
            className="text-center"
            text="Muscle Car"
            src={muscle_car}
            alt="muscle carr"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I created this art to test my 3D modelling abilities. it came out well!. I used a blueprint of a chevrolet muscle car
                        and added my own touch to the final design like the big engine coming out of the front. I was inspired by Fast and Furious movies to create this peace. I used blender for the modeling of the car
                        and Substance Painter for the texturing and finally sketchfab for ligthing and visualization.
                        <hr />
                        <strong>Skills:</strong>
                        <ul className="list-styles pt-1">
                          <li>advance 3D modelling</li>
                          <li>advance shading and texturing knowledge</li>
                          <li>advance prociduralism knowledge</li>
                          <li>advance set-lighting knwoledge</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

              </div>
            </div>
          </ImageEvent>

          {/* Project: Fighter Jet */}
          <ImageEvent
            date="12/08/2020"
            className="text-center"
            text="Fighter Jet"
            src={fighterJet}
            alt="Get GitHub Info"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This war plane is a notorious air plaen used in world war 2. it was fast and deadly.it was created in england, this planes made a lot of history for it self for its speed.
                        I used blender for the 3d modelling and Susbtance painter for the shading and lighting and visualization.
                        <hr />
                        <strong>Skills:</strong>
                        <ul className="list-styles pt-1">
                          <li>advance modelling</li>
                          <li>advance shading and texturing workflow</li>
                          <li>hard_surface modelling knowledge</li>
                          <li>advance texturing knowledge</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

              </div>
            </div>
          </ImageEvent>

          {/* Project: castle */}
          <ImageEvent
            date="21/01/2020"
            className="text-center"
            text="Castle"
            src={castle}
            alt="castle"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>This castle was inspired by the famous Super Mario's castle, instead of a brigth color I used clack for ist base color
                        this peace is heavely inspired by nintendo graphics. it was complitely made in blender.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>basic 3d modelling</li>
                          <li>basick shading</li>
                          <li>intermidiate modifiers knowledge</li>
                          <li>basic particle effects knowledge</li>
                        </ul>
                        <hr />


                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

              </div>
            </div>
          </ImageEvent>

          {/* Project: corridor */}

          <ImageEvent
            date="14/01/2020"
            className="text-center"
            text="Corridor"
            src={corridor}
            alt="corridor"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>this piece was created to give the viewer a sense of horror and suspense.
                        it's inspire from the resident evil franshise.I used blender and subtance painter to create it.
                        <hr />
                        <strong>skills:</strong>
                        <ul className="list-styles pt-1">
                          <li>Advance shading workflow</li>
                          <li>advance texturing creation knowledge</li>
                          <li>advance proceduralism knowledge</li>
                          <li>advance lighting set and dressing workflow</li>
                          <li>basic 3D modelling workflow</li>
                          <li>advance uv unwrapping knwoledge</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

              </div>
            </div>
          </ImageEvent>

          {/* Project: field */}

          <ImageEvent
            date="2/11/2020"
            className="text-center"
            text="Field"
            src={field}
            alt="field"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> I create this fiel inspired by the fiels of upstate new York, specificaly the orange county's fields
                        I happen to go ther constantly and theres nothing more satisfying then a morning view of PineBush's field. I used blender to create this piece.
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                        <li>Advance shading workflow</li>
                        <li>advance proceduralism knowledge</li>
                        <li>advance lighting set and dressing workflow</li>
                        <li>advance uv unwrapping knwoledge</li>
                        <li>advance particle effects knowledge</li>
                        <li>Basic 3D sculpting</li>
                        </ul>
                        <hr />

                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">

              </div>
            </div>
          </ImageEvent>

          {/* Project: plane */}
          <ImageEvent
            date="04/12/2020"
            className="text-center"
            text="Plane"
            src={plane}
            alt="plane"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>This war plane is a notorious air plaen used in world war 2. it was fast and deadly.it was created in england, this planes made a lot of history for it self for its speed.
                        I used blender for the 3d modelling and Susbtance painter for the shading and lighting and visualization.
                        <hr />
                        <strong>Skills:</strong>
                        <ul className="list-styles pt-1">
                        <li>advance modelling</li>
                        <li>advance shading and texturing workflow</li>
                        <li>hard_surface modelling knowledge</li>
                        <li>advance texturing knowledge</li>
                        </ul>
                        <hr />



                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>

            </div>
          </ImageEvent>
        </Events>
      </Timeline>
    </div>
  );
};

export default TimeLine;

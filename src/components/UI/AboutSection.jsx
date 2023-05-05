import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/aboutsection.css";
import aboutImg from "../../images/koyaking3.jpeg";

const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="9">
            <div className="about_section_content">
             
              <h2 className="section_title">Welcome to Extreme Adventures..</h2>
              <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget dui non eros dignissim congue eget a velit. Nam quis tellus
                vel tellus cursus ultricies. Sed ipsum dui, feugiat vitae
                finibus at, suscipit vitae mi. Curabitur viverra auctor odio vel
                gravida. Morbi sit amet posuere metus. Aenean finibus id dolor a
                euismod. Sed placerat felis nec elit ornare, quis malesuada
                lacus semper. Praesent leo ligula, tincidunt vestibulum elit eu,
                pellentesque euismod lorem.
              </p>
              <div className="about_section-item d-flex align-items-center">
                <p className="section_description d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> 

                <p className="section_description d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> 

                <p className="section_description d-flex align-items-center gap-2">
                <i class="ri-checkbox-circle-line"></i>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p> 


              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about_img">
              <img src={aboutImg} alt="" className="w-60"  />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

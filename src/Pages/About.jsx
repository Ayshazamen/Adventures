import React from "react";
import "../styles/about.css";
import aboutImg from "../images/koyaking3.jpeg";
import { Col } from "reactstrap";

const chooseData = [
  {
      id:1,
      title: "Complete Guide",
      icon:"ri-community-line",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eget d",
  },

  {
      id:2,
      title: "custom package",
      icon:"ri-briefcase-line",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eget d",

  },

  {
      id:3,
      title: "Adventure Trail",
      icon:"ri-map-pin-5-fill",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eget d",
  },

  {
      id:4,
      title: "various Adventures",
      icon:"ri-sailboat-fill",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit eget d",
  }

]
const About = () => {
  return (
    
    <div className="about_section_content">
      <Col lg="12" md="12">
    <h1 className="section_title1 text-center">About Us</h1>
    <h2 className="section_subtitle text-center">Welcome to Extreme Adventures..</h2>
              <p className="section_description text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget dui non eros dignissim congue eget a velit. Nam quis tellus
                vel tellus cursus ultricies.<br></br> Sed ipsum dui, feugiat vitae
                finibus at, suscipit vitae mi. Curabitur viverra auctor odio vel
                gravida. Morbi sit amet posuere metus.<br></br> Aenean finibus id dolor a
                euismod. Sed placerat felis nec elit ornare, quis malesuada
                lacus semper. Praesent leo ligula,<br></br> tincidunt vestibulum elit eu,
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


               
     
      
     <Col lg="6" md="6">
      <div className="about_img">
            <img src={aboutImg} alt="" className="w-10"/>
          </div>
          </Col>
          
          </div>

          </Col>
    

    
    
      <div className="container">
        <div className="about_wrapper">
          <div className="about_content">

          <div className="about_content">
            <h1 className="title text-center">Know More About Us...</h1>
            <p className="parag text-center"><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Fusce maximus nec neque vitae dapibus. 
             Proin dapibus eleifend libero,<br></br> vel maximus diam molestie id. In hac habitasse platea dictumst. 
             Ut at nunc vitae eros pretium ultrices in condimentum quam.<br></br> In cursus interdum erat vitae lobortis. 
             Etiam a tincidunt lorem, vel hendrerit augue.
              Vestibulum at tempus tellus.<br></br> Aenean suscipit sem in velit varius vulputate. 
              Curabitur ornare pretium augue quis convallis. Morbi accumsan<br></br> malesuada augue,
               id tristique purus vehicula et. Aenean nec suscipit ipsum. Etiam convallis ipsum quis libero auctor,<br></br> 
               sed iaculis leo egestas.Curabitur viverra mauris eu ipsum sodales pharetra. 
               Nullam ut varius ipsum ullamcorper posuere lorem.<br></br> Aliquam ullamcorper est id diam varius,
                ut luctus nulla facilisis. </b></p>
           
            </div>

            <h2 className="highlight text-center">We provide</h2>
           
            <div className="choose_item_wrapper">
              {
                chooseData.map((item,index)=>(
                  <div className="choose_us-item text-center" key={index}>
                    <span className="choose_us-icon">
                      <i class={item.icon}></i>
                    </span>
                    <div>
                    <h4 className="choose_us-title">{item.title}</h4>
                    <p className="description">
                      {item.desc}
                    </p>
                    </div>

                  </div>
                ))
              }
            </div>
          </div>
          
          
        </div>
      </div>
      </div>
   
  );
    
};

export default About;
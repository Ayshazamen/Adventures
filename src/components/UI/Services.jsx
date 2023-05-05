import React from "react";
import { Col } from "reactstrap";
import '../../styles/services.css';



const servicesData = [
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


const Services = () => {
  return (
    <section id='services'>
      <div className="service">
      <div className="container">
      <Col lg='12' className="mb-5 text-center" >
            
            <h2 className="section_title">Popular Services</h2>

          </Col>

        <div className="service_item">
          {
            servicesData.map((item,index) =>(
              <div className="service_item">
                <span className="service_icon" key={index}>
                <i class={item.icon}/>
                </span>
                <h6> {item.title}</h6>
                <p className="section_description">{item.desc}</p>
                </div>
                
                
                 
              
            ))
          }
        </div>
      </div>
      </div>
    </section>

  );
  
        };

export default Services;
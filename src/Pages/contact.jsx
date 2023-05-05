import React from "react";
import "../styles/about.css";
import img1 from "../images/kayaking.jpg";

const ContactUs = () => {
  return (
    <>
      {/* Contact Header */}
      <div className="complete">
      <div className="contact text-center">

        <h1>Contact Us</h1>
        <p className="section_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                eget dui non eros dignissim congue eget a velit. Nam quis tellus
                vel tellus cursus ultricies.<br></br> Sed ipsum dui, feugiat vitae
                finibus at, suscipit vitae mi. Curabitur viverra auctor odio vel
                gravida. Morbi sit amet posuere metus.<br></br> Aenean finibus id dolor a
                euismod. Sed placerat felis nec elit ornare, quis malesuada
                lacus semper. Praesent leo ligula, <br></br>tincidunt vestibulum elit eu,
                pellentesque euismod lorem.
              </p>
        <div className="contactimg">
          <div className="img">
            <img src={img1} alt="" />
          </div>
          
        </div>
        <div className="ContactContent">
         
          <form action="" text-center className="subsec">
            <h6 >Contact us Now</h6>
            <div className="form-group ">
              <input 
                type="text"
                className="form-control"
                placeholder="Your Name"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                className="form-control"
                placeholder="Your Email"
                required
              />
            </div>

            <div className="form-group">
              <input
                type="number"
                className="form-control"
                placeholder="Your Number"
                required
              />
            </div>

            <div className="form-group">
              <textarea
                rows="6"
                className="form-control"
                placeholder="How We Can Help You"
                required
              ></textarea>
            </div>

            <button className="btn">Submit Now</button>
          </form>
          
        </div>

      </div>
      
     </div>
    </>
  );
};
export default ContactUs;
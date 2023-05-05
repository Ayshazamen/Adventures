import React from "react";
import "../../styles/packages.css";
import { Col } from "reactstrap";






const Products = ({adventureName,imgUrl}) => {

  return <Col lg='4' md='4' sm='6' className="mb-5">

      
  
      <div className="adventure_item">
      
      <div className="adventure_img">
        <img src={imgUrl} alt="" className="w-100" />

      </div>

      <div className="adventure_item-content mt-4">
        
      <h4 className="section_title text-center">{adventureName}</h4>
        
      </div>



    </div>
      
  </Col>
};

export default Products;
import React from "react";
import "../styles/packages.css";
import {  Col } from "reactstrap";
import kayaking from "../images/kayaking.jpg";
import bungeejump from "../images/bungeejump.jpg";
import highdive from "../images/highdive.jpg";
import scubadiving from "../images/scubadiving.jpg";
import zipline from "../images/zipline.jpg";
import snowboarding from "../images/snowboarding.jpg";
import AdventureIdea from "../components/UI/adventureidea";
const adventureData = [
  {
    id: 1,
    adventureName:"Kayaking",
    imgUrl:kayaking,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
 
  {
    id: 2,
    adventureName:"Bungee Jump",
    imgUrl:bungeejump,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 3,
    adventureName:"High Dive",
    imgUrl:highdive,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
 
  {
    id: 4,
    adventureName:"Snow Boarding",
    imgUrl:snowboarding,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 5,
    adventureName:"Scuba Diving",
    imgUrl:scubadiving,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 6,
    adventureName:"Zip Line",
    imgUrl:zipline,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
 
  
]

const Packages = ({ adventureName, imgUrl }) => {
  return (
    <Col className="mb-5">
      <Col lg="12" className="mb-5 text-center">
        <h2 className="section_title text-center">popular packages</h2>
      </Col>
      <div className="image">
      {adventureData.map((item) => (
        <AdventureIdea
        imgUrl={item.imgUrl}
          adventureName={item.adventureName}
      
         
        />
      ))}
      </div>

      <div className="adventure_item1">
        <div className="adventure_img align-center">
          <img src={imgUrl} alt="" className="w-100" />
        </div>

        <div className="adventure_item-content mt-4">
          <h4 className="section_title text-center">{adventureName}</h4>
        </div>
      </div>
    </Col>
  );
};

export default Packages;

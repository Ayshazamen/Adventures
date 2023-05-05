import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import "../styles/Home.css";
import HeroSlider from "../components/UI/HeroSlider";
import Helmet from "../components/UI//Helmet";
import AdventureIdea from "../components/UI/adventureidea";
import AboutSection from "../components/UI/AboutSection";
import Services from "../components/UI/Services";
import Products from "../components/UI/products";
import img01 from "../images/img01.jpg";
import img02 from "../images/img02.jpg";
import img03 from "../images/img03.jpg";
import img04 from "../images/img04.jpg";

import img06 from "../images/img06.jpg";
import img07 from "../images/img07.jpg";
import img08 from "../images/img08.jpg";
import img09 from "../images/img09.jpg";

import equipment1 from "../images/equipment1.jpg";
import equipment2 from "../images/equipment2.jpg";
import equipment3 from "../images/equipment3.jpg";
import equipment4 from "../images/equipment4.jpg";
import equipment5 from "../images/equipment5.jpg";
import equipment6 from "../images/equipment6.jpg";
import { useDispatch, useSelector } from "react-redux";
import { HomeSlice } from "../Reducers/homeSlice";

const adventureData = [
  {
    id: 1,
    adventureName:"Kayaking",
    imgUrl:img01,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 2,
    adventureName:"Canyoning",
    imgUrl:img02,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 3,
    adventureName:"Bungee Jump",
    imgUrl:img03,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 4,
    adventureName:"High Dive",
    imgUrl:img04,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  
  {
    id: 6,
    adventureName:"Sky Diving",
    imgUrl:img06,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 7,
    adventureName:"Scuba Diving",
    imgUrl:img07,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  
  {
    id: 9,
    adventureName:"Snow Boarding",
    imgUrl:img09,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
 
  
]

const productData = [
  {
    id: 1,
    adventureName:"equipment1",
    imgUrl:equipment1,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 2,
    adventureName:"equipment2",
    imgUrl:equipment2,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 3,
    adventureName:"equipment3",
    imgUrl:equipment3,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 4,
    adventureName:"equipment4",
    imgUrl:equipment4,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 5,
    adventureName:"equipment5",
    imgUrl:equipment5,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  {
    id: 6,
    adventureName:"equipment6",
    imgUrl:equipment6,
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  
  },
  
  
]


const Home = () => {
  const state=useSelector(state=>state.HomeReducer)
 const datanew=state.value??[]
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(HomeSlice.actions.getProductdata(productData))},[])
  return (
  <Helmet title ='Home'>
    {/*===========Hero section============*/}

    <HeroSlider />
    


    {/*=============adventure ideas=============*/}

    <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5 text-center" >
           
            <h2 className="section_title">Extreme Adventures</h2>

          </Col>

          {
            adventureData.map(item=>(
              <AdventureIdea  imgUrl={item.imgUrl}/>

            ))
          }
           <AdventureIdea />
          
        </Row>
      </Container>
    </section>


     


    

   

    {/*===============about section================*/}

    <AboutSection/>

    {/*=============service section=============*/}

    <Services/>

   {/*=============featured products=============*/}

   <section>
      <Container>
        <Row>
          <Col lg='12' className="mb-5 text-center" >
           
            <h2 className="section_title">Featured Products</h2>

          </Col>

          {
            datanew.map(item=>(
              <AdventureIdea  imgUrl={item.imgUrl}/>

            ))
          }

       <Products/>
        </Row>
      </Container>
    </section>
        
   


  </Helmet>
  );
    
};

export default Home;
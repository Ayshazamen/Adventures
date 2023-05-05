import React,{useRef} from "react";
import {Container, Row, Button, Col} from 'reactstrap'
import { NavLink, Link } from "react-router-dom";
import '../../styles/header.css';

const nav_links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/packages',
    display:'Packages'
  },
  
  {
    path:'/contact',
    display:'Contact Us'
  },
  
];

const Header = () => {

  const menuRef = useRef(null)
  const toggleMenu = () => menuRef.current.classList.toggle('menu_active')
  return <header className="header">
   
      <Row>
        <Col lg='4' md='3' sm='4'>
          <div className="logo">
          <i class="ri-earth-fill"></i>
            <span>Adventures<Link to='/home' className="d-flex align-items-center
            gap-1">
           
            
            </Link></span>

          </div>
        </Col>

        
          {/*================Navigation starts===============*/}

          <div className="main_navbar">
            <Container>
              <div className="navigation_wrapper d-flex align-items-center 
              justify-content-between">
                <span className="mobile_menu">
                  <i class="ri-menu-line" onClick={toggleMenu}></i>
                </span>
                <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {
                    nav_links.map((item,index) => (
                        <NavLink to={item.path} className={navClass=> navClass.isActive ? 'nav_active nav_item' :'nav_item' } key={index}>{item.display}</NavLink>
                    ))
                    
                  }
                </div>
              </div>

              <div>
                <div >
                  <input type="text" placeholder="Search" />
                </div>
              </div>
                  
              </div>
            </Container>
          

          
          {/*===============Navigation ends===============*/}

          
       
         </div>
      </Row>
    
  </header>
};

export default Header;
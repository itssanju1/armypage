import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'
import '../Allcss/Nevbaaar.css'

const Navigation = () => {
  return (
<>
<div className='navbaarcss'>
<Navbar expand="lg" className="navbaarcss">
    
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-auto">
           <LinkContainer to={'/Home'}><Nav.Link>Home</Nav.Link></LinkContainer> 
           <LinkContainer to={'/Certificate'}><Nav.Link>Certificate</Nav.Link></LinkContainer> 
           <LinkContainer to={'/SubmitYourRun'}><Nav.Link>Submit Your Run</Nav.Link></LinkContainer> 
            
            
          </Nav>
        </Navbar.Collapse>
      
    </Navbar>
    </div>
</>
    )
}

export default Navigation



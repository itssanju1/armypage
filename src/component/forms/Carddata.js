import React from 'react'
import two from '../Images/madel.jpg'
import three from '../Images/cirtifi.jpg'
import one from '../Images/tshirt.jpg'
import '../Allcss/Carddata.css'
import { Col, Row } from 'react-bootstrap'

const Carddata = () => {
  return (
    <>
    <div className='carddata'>
      <Row>
        <Col md={8}>
        <div className='carddata1'>
      <img src={one} alt='i'></img>
      <img src={two} alt='i'></img>
      <img src={three} alt='i'></img>
      
     </div>

        </Col>
        <Col md={4}>
          <p className='carddata2'>Giveaways</p>
        </Col>
      </Row>
     
     
    </div>
    </>
  )
}

export default Carddata
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import pic1 from '../Images/pic1.jpg'
import '../Allcss/Formcontrol.css'

const Data = () => {
  return (
    <>
    <div className='data1'>
    <Container>
        <Row>
            <Col md={8}>
             
            <h1 className='details1'>About The Infantry Marathon</h1>
            <h4 className='details'>"Impossible takes Time. Difficult will be done immediarely!"</h4>
            <p className='details'>The Infantry Marathon is a celebration of the grandeur and camaraderie of the indian Army along with the lover for fellow citizens and nation. Every year the Infantry Marathon is organised to commemorate the Infantry Day which is the foundation day of Infantry, the largest fighting arm of the Indian Army.</p>
            <p className='details'>While the saga of battlefields and wars has lionised the Army, the motive of The Infantry Marathon is to share the love for country in equal spirit with army brothers and natives hand in hand.</p>
            </Col>
            <Col md={4}>
                <img src={pic1} className='pic1'></img>
            </Col>
        </Row>
    </Container>
    </div>
    </>
  )
}

export default Data
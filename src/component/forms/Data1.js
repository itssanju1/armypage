import React from 'react'
import '../Allcss/Data1.css'
import { Col, Container, Row } from 'react-bootstrap'

const Data1 = () => {
  return (
   <>
   <div className='data1style'>
    <Container>
        <Row>
            <Col md={6}>
                <p className='data1p'>"RunVeer 5.0" is the fourth edition of The Infantry Marathon and will collate the celebration of 77th Infantry Day. Gather up to display your dedication for the nation and the spirit of solidarity.</p>
            </Col>
            <Col md={6}>
            <video className='videotag'>
                <source src='' type='video/mp4' ></source>
            </video>
            </Col>
        </Row>
    </Container>
   </div>
   </>
  )
}

export default Data1
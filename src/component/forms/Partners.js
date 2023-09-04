import React from 'react'
// import '../Allcss/Carddata.css'
import Footer from '../footer/Footer'
import { Card, Col, Row } from 'react-bootstrap'

const Partners = () => {
  return (
   <>

   <p className='partners'>Our Partners</p>
   <Row>
    <Col md={2}><Card style={{width:'10rem' ,height:'10rem',borderRadius:'10px',marginLeft:'5rem'}}>
    <Card.Img src='' alt=''></Card.Img>
   </Card></Col>
    <Col md={2}>
    <Card style={{width:'10rem' ,height:'10rem',borderRadius:'10px',marginLeft:'2rem'}}>
    <Card.Img src='' alt=''></Card.Img>
   </Card>
    </Col>
    <Col md={2}>
    <Card style={{width:'10rem' ,height:'10rem',borderRadius:'10px',marginLeft:'2px'}}>
    <Card.Img src='' alt=''></Card.Img>
   </Card>
    </Col>
    <Col md={2}>
    <Card style={{width:'10rem' ,height:'10rem',borderRadius:'10px',marginLeft:'2px'}}>
    <Card.Img src='' alt=''></Card.Img>
   </Card>
    </Col>
    <Col md={2}>
    <Card style={{width:'10rem' ,height:'10rem',borderRadius:'10px'}}>
    <Card.Img src='' alt=''></Card.Img>
   </Card>
    </Col>
    
   </Row>
   
   
   </>
  )
}

export default Partners
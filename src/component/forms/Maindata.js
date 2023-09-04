import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Registerform from './Registerform'
import '../Allcss/Formcontrol.css'
import one from '../Images/LOGO1.png'
import two from '../Images/pic.jpg'
import Data from './Data'

const Maindata = () => {
  return (
    <>
    <div className='bg-image'>
        <Container>
            <Row>
                <Col md={8}>
                    <div >
                        <img src={one} className='imgstyle'></img>
                        <p className='divstyle'>THE INFANTRY MARATHON</p>
                        <p className='divstyle1'>--------RUNVEER 5.0--------</p>
                        <p className='divstyle1'>RANNVEERO KO NAMAN</p>
                    </div>
                </Col>
                <Col md={4}>
                    <Registerform/>
                </Col>
            </Row>
        </Container>
        <div>
            <img src={two}  className='style1'></img>
        </div>
        
    </div>
    
    </>
  )
}

export default Maindata
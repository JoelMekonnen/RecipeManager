import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import  Form  from 'react-bootstrap/Form'
import { pay } from '../../assets'
export default function HeroSection() {
  return (
    <Container fluid style={{ height:"100%", padding:"0px" }}>
          <Row className='tw-w-full tw-h-2/4 tw-justify-center' >
              <Col lg={8}>
                 <Row className="justify-content-center">
                     <h1 className='tw-font-inter tw-text-center tw-text-green-400 headerFamily !tw-mt-16 !tw-ml-16 tw-text-bold' style={{ textAlign:"center" }}> GET YOUR MENU ON </h1>
                 </Row>
                 <Row className="justify-content-center">
                    <Col lg={10} className="!tw-ml-16">
                        <p className="tw-text-xl tw-text-gray-400 tw-mt-5 !tw-ml-16 md:tw-ml-10" style={{ textAlign:"center" }}> Manage your menus and recipes for the real time event of the customers need  although they may decline the request for rfp this is a great achievement. so many titles have been chosen for this actual thing but things are not going as they seem.</p>
                    </Col>
                 </Row>
                 <Row className='justify-content-center'>
                     <Col lg={6} className='!tw-mt-16'> 
                         <img src={pay} alt='QR-pay' className='tw-w-full tw-rounded-lg tw-opacity-50 hover:tw-opacity-100 tw-ml-10' />
                     </Col>
                 </Row>
              </Col>
          </Row>
    </Container>
  )
}

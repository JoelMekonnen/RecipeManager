import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import  Form  from 'react-bootstrap/Form'
import { foodBG } from '../../assets'
export default function HeroSection() {
  return (
    <Container fluid style={{ height:"100%", padding:"0px" }}>
          <Row className='tw-w-full tw-h-2/4 tw-justify-center tw-bg-smoothRed' >
              <Col lg={8}>
                  <h1 className='tw-text-center tw-text-white customParagraph tw-ml-20 tw- tw-mt-4 tw-text-bold'> GET YOUR RECIPE ON </h1>
              </Col>
          </Row>
    </Container>
  )
}

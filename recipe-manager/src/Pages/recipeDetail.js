import React from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import { pizza } from '../assets'
export default function RecipeDetail(props) {
  const location = useLocation()
  const { recipe } = location.state
  console.log(recipe)
  return (
      <div>
           <Header/>
           <Container className='tw-bg-gray-200 mt-3 p-3'>
                <Row className="justify-content-center">
                    <Col lg={12}>
                            <h1 className='h1'  style={{ 'fontFamily':'Source Sans Pro', "marginLeft":"15%" }} > { recipe["recipe-Name"] } </h1> 
                    </Col>
                </Row>
           </Container>
           <Container className='mt-3'>
                <Row className='justify-content-center'>
                    <Col lg={4} className="tw-rounded-sm tw-bg-gray-300" style={{ "height":"300px" }}>
                          <img src={pizza} alt='burgerImage'/>
                    </Col>
                    <Col lg={7} className="tw-rounded-sm tw-bg-gray-300" style={{ "marginLeft":"20px" }}>
                          <p style={{ "fontFamily":"montserrat", "lineHeight":"2.5", "padding":"30px"}} className='tw-mt-3'> { recipe["recipe-description"] } </p>
                    </Col> 
                </Row>
                <Row className='tw-rounded-sm tw-bg-gray-300 mt-5 p-3'>
                    
                    <ul>
                        {
                            recipe["recipe"].map((recipes)=> {
                                  return <div>
                                      <li style={{ "marginLeft":"30px", "marginTop":"20px" }}> { recipes } </li>
                                  </div>
                            })
                        }
                    </ul>
                </Row>
           </Container>
      </div>
  )
}

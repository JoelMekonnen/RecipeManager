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
      <div className='tw-bg-gray-900 tw-pb-20'>
           <Header/>
           <Container fluid>
             <Row className='justify-content-center tw-p-[50px]'>
                    <Col lg={8} className='justify-content-center'>
                        <Row className="justify-content-center">
                            <Col lg={6}>
                               <img src={pizza} alt='burgerImage' className='tw-align-middle tw-h-[300px] tw-ml-[100px]'/>
                            </Col>
                        </Row>
                    </Col>
             </Row>
           </Container>
           <Container fluid>
               <Row className="justify-content-center">
                    <Col lg={8}>
                            <h3 className='h1 tw-text-xl tw-text-green-400 tw-mt-5 !tw-ml-16 md:tw-ml-10 tw-text-center tw-uppercase'> { recipe["recipe-Name"] } </h3> 
                    </Col>
                </Row>
                <Row className="justify-content-center">
                   <Col lg={6} className="tw-rounded-lg tw-bg-gray-800  !tw-mt-5" style={{ "marginLeft":"20px" }}>
                       <Row>
                           <h3 className='tw-text-md tw-text-green-400 !tw-mt-4 md:tw-ml-10 tw-text-start tw-uppercase'> Description </h3> 
                       </Row>
                       <Row>
                          <p className='tw-text-gray-400 tw-text-xl tw-pb-5 tw-pl-5 !tw-pr-5 tw-ml-5'> { recipe["recipe-description"] } </p>
                       </Row>
                    </Col> 
                </Row>
           </Container>
            <Container fluid className='mt-3'>
                <Row className='tw-rounded-sm mt-5 p-3 justify-content-center'>
                    <Col lg={6} className="tw-bg-gray-800 tw-text-gray-400 tw-text-xl tw-rounded-lg">
                        <Row>
                           <h3 className='tw-text-md tw-text-green-400 !tw-mt-4 md:tw-ml-10 tw-text-start tw-uppercase'> Recipes </h3> 
                        </Row>
                        <Row>
                            <ul className='tw-space-y-4 tw-text-gray-500 tw-list-disc tw-list-inside dark:tw-text-gray-400'>
                                {
                                    recipe["recipe"].map((recipes)=> {
                                        return <div>
                                            <li style={{ "marginLeft":"30px", "marginTop":"20px" }}> { recipes } </li>
                                        </div>
                                    })
                                }
                            </ul>
                        </Row>
                        
                    </Col>
                </Row>
                <Row className='tw-rounded-lg tw-mt-5 tw-p-3 justify-content-center'>
                    <Col lg={6} className="tw-bg-gray-800 tw-text-gray-400 tw-text-xl">
                        <Row>
                           <h3 className='tw-text-md tw-text-green-400 !tw-mt-4 md:tw-ml-10 tw-text-start tw-uppercase'> Procedures </h3> 
                        </Row>
                        <Row>
                            <ul className='tw-space-y-4 tw-text-gray-500 tw-list-disc tw-list-inside dark:tw-text-gray-400'>
                                {
                                    recipe["procedures"].map((proc)=> {
                                        return <div>
                                            <li style={{ "marginLeft":"30px", "marginTop":"20px" }}> { proc } </li>
                                        </div>
                                    })
                                }
                            </ul>
                        </Row>
                        
                    </Col>
                </Row>
           </Container>
      </div>
  )
}

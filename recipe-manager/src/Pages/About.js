import React, { Component } from 'react'
import Header from '../Components/Header'
import LocalDiningRoundedIcon from '@mui/icons-material/LocalDiningRounded';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import KitchenIcon from '@mui/icons-material/Kitchen';
import LockIcon from '@mui/icons-material/Lock';
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import { restaurant } from '../assets';

export default class About extends Component {
  render() {
    return (
       <div className='tw-bg-gray-900 tw-pb-5'>
          <Header/>
          <Container fluid>
                <Row className='justify-content-center'>
                    <Col lg={8} className='lg:!tw-mt-20'>
                          <Row className='justify-content-center'>
                                <h1 className='h1 !tw-ml-[40px] tw-text-green-400 tw-text-center tw-uppercase headerFamily'> About Recipe Manager </h1>
                          </Row>
                          <Row className="justify-content-center">
                              <Col lg={6}>
                               <p className='!tw-text-gray-400 tw-text-center !tw-mt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam</p>
                              </Col>
                          </Row>
                          <Row className='justify-content-center'>
                            <Col lg={6} className='!tw-mt-16'>
                                <img src={restaurant} alt='QR-pay' className='tw-w-full tw-rounded-lg tw-opacity-50 hover:tw-opacity-100 tw-ml-10' />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                
                <Row className='justify-content-center'>
                    <Col lg={8} className='lg:tw-mt-20'>
                         <Row className="justify-content-center !tw-mt-12">
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px] !tw-align-middle'>
                                          <Row className='justify-content-center'>
                                                     <LocalDiningRoundedIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px]'> </LocalDiningRoundedIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily'> Made For resturants </h5>
                                          </Row>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px]'>
                                    <Row className='justify-content-center'>
                                                     <EmojiFoodBeverageIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px] hover:!tw-text-green-400'> </EmojiFoodBeverageIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily hover:!tw-text-green-400'> Making Life Simple </h5>
                                          </Row>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px]'>
                                          <Row className='justify-content-center'>
                                                     <KitchenIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px]'> </KitchenIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily'> Keep it safe </h5>
                                          </Row>  
                                    </Card>
                                </Col>
                         </Row>
                         <Row className="justify-content-center !tw-mt-12">
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px] !tw-align-middle'>
                                          <Row className='justify-content-center'>
                                                     <LockIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px]'> </LockIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily'> Secure storage </h5>
                                          </Row>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px]'>
                                    <Row className='justify-content-center'>
                                                     <EmojiFoodBeverageIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px] hover:!tw-text-green-400'> </EmojiFoodBeverageIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily hover:!tw-text-green-400'> Making Life Simple </h5>
                                          </Row>
                                    </Card>
                                </Col>
                                <Col lg={3}>
                                    <Card className='tw-border-none !tw-bg-gray-800 !tw-text-gray-400 !tw-h-[100px]'>
                                          <Row className='justify-content-center'>
                                                     <LocalDiningRoundedIcon  className='!tw-text-white !tw-w-[50px] !tw-h-[50px]'> </LocalDiningRoundedIcon>  
                                          </Row>
                                          <Row className='justify-content-center'>
                                               <h5 className='h5  tw-text-gray-400 tw-text-center tw-uppercase headerFamily'> Made For resturants </h5>
                                          </Row>
                                    </Card>
                                </Col>
                         </Row>
                        
                    </Col>
                </Row>
          </Container>
       </div>
    )
  }
}

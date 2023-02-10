import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import  Form  from 'react-bootstrap/Form'



export default function TrendingSection() {
  var recipes = [
      {
           "id": 1,
           "recipe-Name": "Alicha Tibse",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ],
      }, 
      {
          "id": 2,
          "recipe-Name": "Siga FirFir",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ]
      },
      {
        "id": 3,
         "recipe-Name": "Alicha Tibse",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ]
      },
      {
        "id": 4,
        "recipe-Name": "Alicha Tibse",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   }, 
   {
       "id": 5,
       "recipe-Name": "Siga FirFir",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   },
   {
      "id": 6,
      "recipe-Name": "Alicha Tibse",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   }
  ]
  return (
      <Container fluid>
          <Row className='justify-content-center p-3 mt-4 tw-bg-green-400'>
                <Col lg={6} xs={12} md={12} sm={10}>
                   <Row className='justify-content-center'>
                      <h1 className='h1 headerFamily'> Create, Manage, and Save your Recipes </h1>
                   </Row>
                    <Row className='justify-content-center'>
                      <p style={{ "fontFamily":"Source Sans Pro" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat metus magna, in volutpat dolor sodales non. Aliquam erat volutpat. Proin quis nibh tempus, mattis tortor commodo, tempor lectus. Cras mi lorem, congue quis neque eu, malesuada posuere purus. Duis tristique turpis at magna lobortis, vitae suscipit elit consectetur. Aenean.  </p>
                   </Row> 
                </Col>
          </Row>
          <Row className='justify-content-center mt-5 mb-5'>
              <Col lg={4}>
                  <Row>
                  <Form className="col-lg-6">
                        <Form.Group className=''>
                             <Form.Control type="text" placeholder="search"/>
                        </Form.Group>
                     </Form>
                     <Button className='col-lg-2 btn-success'>
                         Search
                     </Button>
                  </Row>
                     
              </Col>
          </Row>
          <Container>
          <Row className="justify-content-center mt-5 ">
                {
                    recipes.map((myrecipe) => {
                         return  (
                           <Col lg={4} className='p-1' key={myrecipe.id}>
                              <Card>
                                <div className="tw-bg-gray-100 tw-text-black">
                                <Card.Body>
                                    <Row className='justify-content-center'>
                                            <h3 style={{ textAlign:"center" }} className='headerFamily'> { myrecipe['recipe-Name'] }</h3>
                                    </Row>
                                    <Row className='justify-content-center'>
                                            <p className='customParagraph'> { myrecipe['recipe-description'] }</p>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col lg={3}>
                                            <Row>
                                               <Link to="/recipeDetail" state={{ recipe:myrecipe }} type="button" class="tw-text-white tw-bg-green-700 tw-hover:bg-green-800 tw-hover:tw-text-white tw-focus:outline-none tw-focus:ring-4 tw-focus:ring-green-300 tw-font-medium tw-rounded-full tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mb-2 tw-dark:bg-green-600 tw-dark:hover:bg-green-700 dark:focus:ring-green-900">View</Link>
                                            </Row>
                                        </Col> 
                                        <Col lg={3}>
                                        <button type="button" class="tw-text-white tw-bg-yellow-700 tw-hover:bg-yellow-800 tw-focus:outline-none tw-focus:ring-4 tw-focus:ring-yellow-300 tw-font-medium tw-rounded-full tw-text-sm tw-px-5 tw-py-2.5 tw-text-center tw-mb-2 tw-dark:bg-yellow-600 tw-dark:hover:bg-yellow-700 dark:focus:ring-yellow-900">Share</button>
                                        
                                        </Col>
                                    </Row>
                                 </Card.Body>
                                </div>
                           
                              </Card>
                           </Col>
                        );
                    })
                }
          </Row>

          </Container>
      </Container>
           
      
  )
}

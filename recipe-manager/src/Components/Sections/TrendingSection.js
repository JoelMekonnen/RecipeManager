import React from 'react'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'


export default function TrendingSection() {
  var recipes = [
      {
           "recipe-Name": "Alicha Tibse",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ]
      }, 
      {
          "recipe-Name": "Siga FirFir",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ]
      },
      {
         "recipe-Name": "Alicha Tibse",
           "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
           "recipe": [
               "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
           ]
      },
      {
        "recipe-Name": "Alicha Tibse",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   }, 
   {
       "recipe-Name": "Siga FirFir",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   },
   {
      "recipe-Name": "Alicha Tibse",
        "recipe-description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus semper nisi at fermentum gravida. In ipsum leo, dignissim at purus vel, dignissim scelerisque dolor. In molestie facilisis augue quis commodo. Vestibulum aliquet non sem at fringilla. Vestibulum eget aliquet diam",
        "recipe": [
            "1KG Meat", "2 oninons", "2 tommatoes", "salt", "pepper"
        ]
   }
  ]
  return (
      <Container fluid>
          <Row className='justify-content-center p-3 mt-4' style={{ 'backgroundColor':'#EFEFEF' }}>
                <Col lg={6} xs={12} md={12} sm={10}>
                   <Row className='justify-content-center'>
                      <h1 className='h1 headerFamily'> Create, Manage, and Save your Recipes </h1>
                   </Row>
                    <Row className='justify-content-center'>
                      <p style={{ "fontFamily":"Source Sans Pro" }}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur feugiat metus magna, in volutpat dolor sodales non. Aliquam erat volutpat. Proin quis nibh tempus, mattis tortor commodo, tempor lectus. Cras mi lorem, congue quis neque eu, malesuada posuere purus. Duis tristique turpis at magna lobortis, vitae suscipit elit consectetur. Aenean.  </p>
                   </Row> 
                </Col>
          </Row>
          <Container>
          <Row className="justify-content-center mt-5">
                {
                    recipes.map((myrecipe) => {
                         return  (
                           <Col lg={4} className='p-1'>
                              <Card>
                                 <Card.Body>
                                    <Row className='justify-content-center'>
                                            <h3 style={{ textAlign:"center" }} className='headerFamily'> { myrecipe['recipe-Name'] }</h3>
                                    </Row>
                                    <Row className='justify-content-center'>
                                            <p className='customParagraph'> { myrecipe['recipe-description'] }</p>
                                    </Row>
                                    <Row className='justify-content-center'>
                                        <Col lg={6}>
                                            <Button>
                                                View Recipe
                                            </Button>
                                        </Col> 
                                    </Row>
                                 </Card.Body>
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

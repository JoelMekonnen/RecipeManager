import React from 'react'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
export default function Footer() {
  return (
    <Container fluid className="!tw-bg-gray-700 tw-h-[100px] !tw-mt-20">
         <Row className='justify-content-center'>
             <Col lg={8}>
                 <Row className='justify-content-center !tw-mt-4'>
                     <Col lg={6}>
                     <footer className="!tw-p-4  !tw-rounded-lg !tw-shadow md:!tw-flex md:!tw-items-center md:!tw-justify-between md:!tw-p-6">
                        <span className="!tw-text-sm !tw-text-gray-500 sm:!tw-text-center dark:!tw-text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:tw-underline"></a>. All Rights Reserved.
                        </span>
                        <ul className="!tw-flex !tw-flex-wrap !tw-items-center !tw-mt-3 tw-text-sm !tw-text-gray-500 dark:!tw-text-gray-400 sm:!tw-mt-0">
                            <li>
                                <a href="#" className="!tw-mr-4 !tw-text-gray-300 tw-no-underline hover:!tw-underline md:!tw-mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="!tw-mr-4 !tw-text-gray-300  tw-no-underline hover:!tw-underline md:!tw-mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="!tw-mr-4 !tw-text-gray-300 tw-no-underline hover:!tw-underline md:!tw-mr-6">Licensing</a>
                            </li>
                            <li>
                                <a href="#" className="hover:!tw-underline !tw-text-gray-300  tw-no-underline">Contact</a>
                            </li>
                        </ul>
                    </footer>
                     </Col>
                 </Row>
             </Col>
         </Row>
   
    </Container>
   
  )
}

import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../Components/Header'
import { Row, Col, Card, Container, Button } from 'react-bootstrap'
import axios from 'axios'
import request_urls from '../../utils/connection'


export default function CreateCompany() {
  const [companyName, setCompanyName] = useState("")
  const [companyLocation, setCompanyLocation] = useState("")
  const [companyDescription, setCompanyDescription] = useState("")

 const handleSubmit = async (e) => {
         e.preventDefault()
         var user_token = sessionStorage.getItem("user-token")
         const config = {
               headers: {
                   Authorization: "Bearer " + user_token
               }
         }
         var data = {
              "compName":companyName,
              "compLocation":companyLocation,
              "compDescription":companyDescription
         }
         axios.post(request_urls.createCompany, data, config).then((res) => {
                 console.log(res.data)
         })

        
  }
  return (
    <>
        <div className='tw-bg-gray-900 tw-h-screen tw-bg-[url("../public/Food.jpg")] tw-bg-no-repeat tw-bg-cover tw-bg-center'>
        <div className='tw-bg-gray-900 tw-pb-5'>
          <Header/>
        </div>
        <Container fluid>
              <Row className="justify-content-center">
                    <Col lg={10}>
                        <Row className='justify-content-center'>
                              <Col lg={10} className="tw-bg-gray-700 !tw-pb-10 !tw-mt-20 !tw-rounded-[50px]">
                                  <Row className="justify-content-center">
                                      <h1 className="tw-text-center tw-uppercase !tw-mt-20 !tw-text-gray-200 headerFamily">Set Up Company Details</h1>
                                  </Row>
                                  <Row className='justify-content-center'>
                                     <Col lg={8}>
                                        <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-2 !tw-mt-10">
                                          <div>
                                              <label htmlFor="companyName" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Company Name</label>
                                              <input type="text" id="companyName" onChange={(e) => { setCompanyName(e.target.value)}} className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="your company name" required />
                                          </div>
                                          <div>
                                            <label htmlFor="companyLocation" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Company Location</label>
                                            <input type="text" id="companyLocation"  onChange={(e) => {setCompanyLocation(e.target.value)}}  className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="your company location" required />
                                         </div>
                                        </div>
                                        <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-2 !tw-mt-10">
                                          <div>
                                              <label htmlFor="" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Description</label>
                                              <textarea rows={5} cols={5} onChange={(e) => {setCompanyDescription(e.target.value)}} id="email" className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="company description" required></textarea>
                                          </div>
                                        </div>
                                     </Col>
                                  </Row>
                                  <Row className='justify-content-center !tw-mt-10'>
                                      <Col lg={3}>
                                            <Row className="justify-content-center">
                                                      <button type="button" onClick={handleSubmit} className="tw-text-gray-900 !tw-bg-green-400 hover:!tw-bg-green-500  tw-border tw-border-gray-300 focus:tw-outline-none  focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-gray-900 dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Register</button>
                                             </Row>
                                      </Col>
                                  </Row>
                                  
                              </Col>

                        </Row>
                    </Col>
              </Row>
        </Container>
      </div>
    </>
  )
}

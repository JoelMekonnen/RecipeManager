
import React, { Component } from 'react'
import Header from '../Components/Header';
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import request_urls from '../utils/connection'
import { redirect } from 'react-router-dom';

import axios from 'axios';

export default class Register extends Component {
    constructor(props) {
         super(props)
         this.state = {
             firstname:"",
             lastname:"",
             email:"",
             password:"",
             confirmPassword:""

         }
    }
   handleSubmit = (e) => {
            e.preventDefault()
            var data = {
                "email":this.state.email,
                "firstname":this.state.firstname,
                "lastname":this.state.lastname,
                "password":this.state.password,
                "password2":this.state.confirmPassword
            }
            axios.post(request_urls.register, data).then((res) => {
                  if(res.status === 200) {
                       window.location.replace("/Login");
                  }
            }).catch((error) => {
                console.log(error.message)
            })
  }
  render() {
    return (
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
                                      <h1 className="tw-text-center tw-uppercase !tw-mt-20 !tw-text-gray-200 headerFamily">Register To Recipe Manager</h1>
                                  </Row>
                                  <Row className='justify-content-center'>
                                     <Col lg={8}>
                                        <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-2 !tw-mt-10">
                                          <div>
                                              <label htmlFor="first_name" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">First name</label>
                                              <input type="text" id="first_name" onChange={(e) => {this.setState({firstname:e.target.value});} } className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="John" required />
                                          </div>
                                          <div>
                                            <label htmlFor="last_name" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Last name</label>
                                            <input type="text" id="last_name"  onChange={(e) => {this.setState({lastname:e.target.value});}}  className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="Snow" required />
                                         </div>
                                        </div>
                                        <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-2 !tw-mt-10">
                                          <div>
                                              <label htmlFor="email" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Email</label>
                                              <input type="email" onChange={(e) => {this.setState({email:e.target.value});}} id="email" className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder="snow@gmail.com" required />
                                          </div>
                                          <div>
                                              <label htmlFor="password" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Password</label>
                                              <input type="password"  onChange={(e) => {this.setState({password:e.target.value});}}  id="password" className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required />
                                          </div>
                                        </div>
                                        <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-2 !tw-mt-10">
                                          <div>
                                              <label htmlFor="confirmPassword" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Confirm Password</label>
                                              <input type="password" onChange={(e) => {this.setState({confirmPassword:e.target.value});}}  id="confirmPassword" className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" required />
                                          </div>
                                        </div>
                                     </Col>
                                  </Row>
                                  <Row className='justify-content-center !tw-mt-10'>
                                      <Col lg={3}>
                                            <Row className="justify-content-center">
                                                      <button type="button" onClick={this.handleSubmit} className="tw-text-gray-900 !tw-bg-green-400 hover:!tw-bg-green-500  tw-border tw-border-gray-300 focus:tw-outline-none  focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-gray-900 dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Register</button>
                                             </Row>
                                      </Col>
                                  </Row>
                                  
                              </Col>

                        </Row>
                    </Col>
              </Row>
        </Container>
</div>
    )
  }
}

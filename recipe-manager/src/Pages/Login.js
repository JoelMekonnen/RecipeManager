import React, { Component } from 'react'
import Header from '../Components/Header'
import axios from 'axios'
// import { LoginBG } from '../assets'
import { Row, Col, Card,  Container, Button} from 'react-bootstrap'
import  FormData  from 'form-data'
import request_urls from '../utils/connection'

export default class Login extends Component {
  handleSubmit = (e) => {
     e.preventDefault()
    // var reqData = new FormData()
    // reqData.append('email', this.state.email)
    // reqData.append('password', this.state.password)
    var data = {
        "email":this.state.email,
        "password":this.state.password
    }
    // console.log(reqData)
    axios.post(request_urls.login, data).then((res) => {
        if(res.status === 200) {
             console.log(res.data)
             if(res.data.user.accountType === "OWNER") {
                   window.location.replace("/Admin/Home")
             }
        }
    }).catch((error) => {
         console.log(error.message)
    })

  }
  constructor(props) {
      super(props)
      this.state = {
          email: "",
          password: "",
      }
  }
  render() {
    return (
         <div className='tw-bg-gray-900 tw-h-screen tw-bg-[url("../public/Food.jpg")] tw-bg-no-repeat tw-bg-cover tw-bg-center'>
              <div className='tw-bg-gray-900 tw-pb-5'>
                <Header/>
              </div>
              <Container fluid>
                    <Row className="justify-content-center">
                          <Col lg={8}>
                              <Row className='justify-content-center'>
                                    <Col lg={8} className="tw-bg-gray-700 !tw-h-[500px] !tw-mt-20 !tw-rounded-[50px]">
                                        <Row className="justify-content-center">
                                            <h1 className="tw-text-center tw-uppercase !tw-mt-20 !tw-text-gray-200 headerFamily">Login to Recipe Manager</h1>
                                        </Row>
                                        <Row className='justify-content-center'>
                                           <Col lg={6}>
                                              <div className="tw-grid tw-gap-6 mb-6 md:tw-grid-cols-1 !tw-mt-10">
                                                  <div>
                                                      <input type="email"  id="email" onChange={ (e) => { this.setState({email:e.target.value}); } }  className="!tw-bg-gray-800 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-500 focus:!tw-border-green-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-green-500 dark:focus:tw-border-green-500" placeholder="email" required />
                                                  </div>
                                                  <div>
                                                     <input type="password" id="password" onChange={ (e) => { this.setState({password:e.target.value}); } }  className="!tw-bg-gray-800  tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-green-500 focus:!tw-border-green-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-green-500 dark:focus:tw-border-green-500" placeholder="password" required />
                                                  </div>
                                                  
                                              </div>
                                           </Col>
                                        </Row>
                                        <Row className='justify-content-center !tw-mt-10'>
                                            <Col lg={3}>
                                                  <Row className="justify-content-center">
                                                            <button type="button" onClick={this.handleSubmit} className="tw-text-gray-900 !tw-bg-green-400 hover:!tw-bg-green-500  tw-border tw-border-gray-300 focus:tw-outline-none  focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-gray-900 dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Login</button>
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

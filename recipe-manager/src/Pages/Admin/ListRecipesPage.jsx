import React from 'react'
import { AppHeader, AppSidebar, AppFoooter, Appcontent } from '../../Components/index'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CRow } from '@coreui/react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {
     CCol,
     CButton,
     CTable,
     CTableBody,
     CTableDataCell,
     CTableHead,
     CTableHeaderCell,
     CTableRow,
     CFormInput
} from '@coreui/react'
import request_urls from '../../utils/connection'


export default function ListRecipesPage() {
  const [recipes, setRecipes] = useState([])
  // lets get all the recipes
  const getRecipes = () => {
      
       const userToken = localStorage.getItem('user-token')
       const config = {
            headers: {
                 "Authorization":"Bearer " + userToken
            }
       }
       axios.get(request_urls.getRecipe, config).then((result) => {
             setRecipes(result.data.msg)
       }).catch((result) => {
            console.log(result)
       })

  }
  useEffect(() => {
     getRecipes()
  })
  return (
       <div className="!tw-bg-gray-900">
           <ToastContainer 
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
           />
           <AppSidebar/>
           <div className="wrapper d-flex flex-column tw-bg-gray-900" style={{ marginTop:"0px" }}>
                <AppHeader className="tw-bg-gray-900 tw-border-none"/>
                <CContainer className="min-vh-100">
                      <div className="body flex-grow-1 px-3">
                           <CRow className="justify-content-center border-bottom-0">
                                <CCol sm={10} lg={12}>
                                     <CRow className='justify-content-center'>
                                            <CCol lg={3}>
                                            <h3 className="h3 tw-uppercase" style={{ color:"white", textAlign:"center" }}> My Recipes </h3>
                                      </CCol>
                                      <CCol lg={6}>
                                          <CFormInput type="text" id="searchIngredient"  placeholder="search ingredient"/>
                                      </CCol>
                                      <CCol lg={3}>
                                           <CButton  className="btn-primary tw-uppercase"> Create Recipes </CButton>
                                      </CCol>
                                     </CRow>
                                </CCol>
                           </CRow>
                           <CRow className="justify-content-center !tw-mt-5">
                              <CCol sm={10} lg={12}>
                                 <CRow className="justify-content-center">
                                 <CTable className="!tw-rounded-lg !tw-mt-5" striped>
                                      <CTableHead>
                                          <CTableRow>
                                             <CTableHeaderCell className="tw-text-white"> # </CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Recipes</CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Price </CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Action </CTableHeaderCell>
                                          </CTableRow>
                                      </CTableHead>
                                      <CTableBody>
                                          { 
                                              recipes.map((recipe, idx) => {
                                                     return (
                                                        <CTableRow key={idx}>
                                                            <CTableDataCell className="!tw-text-white">
                                                                  { idx }
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-white" >
                                                                {recipe.recipeName}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-white">
                                                                 {recipe.totalPrice}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-white">
                                                                 {/* <Button className='bg-success'> update </Button> */}
                                                                 <Link to={ "/Admin/Recipe/" + recipe._id + "/Detail" }  className="btn btn-primary">View</Link>
                                                            </CTableDataCell>
                                                      </CTableRow>
                                                     )
                                              })
                                           }
                                      </CTableBody>
                                   </CTable>
                                 </CRow>
                                 </CCol>
                                 </CRow>
                      </div>
                </CContainer>
           </div>
       </div>
  )
}

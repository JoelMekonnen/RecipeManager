import React from 'react'


import {AppHeader, AppSidebar, AppFooter, AppContent} from '../../Components/index'

import { useState, useEffect, useRef } from 'react'
import request_urls from '../../utils/connection'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { setUpdated, hideUpdated, hideCreated } from '../../features/IngredientSlice'
import axios from 'axios'
import {
  CRow,
  CCol,
  CFormInput,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CContainer,
  CCardBody,
  CButton,
  CButtonGroup,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

export default function CreateIngredient({refresh, setRefresh}) {
  // const [ingredientInfo, setIngredientInfo] = useState({})
  const [ingredientName, setIngredientName] = useState("")
  const [ingredientPrice, setIngredientPrice] = useState(0)
  const [ingredientChanged, setIngredientChanged] = useState(false)

  const dispatch = useDispatch()


  useEffect(() => {
  
  }, [])
  const createIngredient = async () => {
        const userToken = localStorage.getItem('user-token')
        const config = {
            headers: {
                "Authorization":"Bearer " + userToken
            }
        }
        const data = {
             "ingName":ingredientName,
             "price":ingredientPrice,

        }
        axios.post(request_urls.createIngredient, data, config).then((result) => {
                   if(result.status === 200) {
                          toast.success("Created Ingredient Successfully")
                          setRefresh(!refresh)
                          
                   }
        }).catch((e) => {
              console.log(e)
        })
  }
  
  return (
     <div className="!tw-bg-gray-900">
         <div className="wrapper d-flex flex-column tw-bg-gray-900" style={{ marginTop:"0px" }}>
              <CContainer style={{ marginBottom:"10px" }}>
                    <div className="body flex-grow-1 px-3">
                       <CRow className="justify-content-center border-bottom-0">
                          <CCol lg={12}>
                             <CRow>
                               <h1 className="!tw-text-white tw-uppercase" style={{ textAlign:"center", marginTop:"50px" }}> Create ingredient </h1>
                             </CRow>
                             <CRow >
                                 <CCol lg={12}>
                                      <CCard className="!tw-bg-gray-700" style={{ marginTop:"30px" }}>
                                          <CCardBody>
                                              <CRow>
                                                  <CCol lg={6}>
                                                        <div>
                                                            <label htmlFor="ingredientName" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Ingredient</label>
                                                            <input type="text" id="ingredientName" onChange= {(e) => { setIngredientName(e.target.value); }}  className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder='ingredient' required />
                                                        </div>
                                                  </CCol>
                                                  <CCol lg={6}>
                                                        <div>
                                                            <label htmlFor="first_name" className="tw-block tw-mb-2 tw-text-sm tw-font-medium tw-text-gray-900 dark:tw-text-white">Price</label>
                                                            <input type="text" id="first_name" onChange={(e) => {setIngredientPrice(e.target.value)} } className="!tw-bg-gray-600 tw-border tw-border-gray-300 tw-text-gray-900 tw-text-sm tw-rounded-lg focus:tw-ring-blue-500 focus:tw-border-blue-500 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:tw-ring-blue-500 dark:focus:tw-border-blue-500" placeholder='price' required />
                                                        </div>
                                                  </CCol>
                                              </CRow>
                                              <CRow className='justify-content-center'>
                                                   <CCol lg={4} style={{ marginTop:"20px" }}>
                                                        <CRow className='justify-content-center'>
                                                              <CButton className='btn btn-primary' onClick={createIngredient}>Create</CButton>
                                                        </CRow>
                                                   </CCol>
                                                   <CCol lg={4} style={{ marginTop:"20px", marginLeft:"20px" }}>
                                                        <CRow className='justify-content-center'>
                                                              <CButton className='btn btn-danger' onClick={(e) => { dispatch(hideCreated()); }}>CANCEL</CButton>
                                                        </CRow>
                                                         
                                                   </CCol>
                                              </CRow>
                                          </CCardBody>
                                      </CCard>
                                 </CCol>
                             </CRow> 
                          </CCol>
                       </CRow>
                    </div>
              </CContainer>

         </div>
     </div>
  )
}

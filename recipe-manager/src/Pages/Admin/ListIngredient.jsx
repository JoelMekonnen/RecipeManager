import React, { useCallback } from 'react'
import {AppHeader, AppSidebar, AppFooter, AppContent} from '../../Components/index'
import { useState, useEffect, useRef} from 'react';
import request_urls from '../../utils/connection';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import axios from 'axios';
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
import { Button } from 'react-bootstrap';
export default function ListIngredient() {
    const [ingredientList, setIngredientList] = useState([])
    const [ingredients, setIngredients] = useState([])
    const [buttonArray, setButtonArray] = useState([])
    const [activeButtonArray, setActiveButtonArray] = useState([])
    const [itemPerPage, setItemPerPage] = useState(10)
    const [prevPageIndex, setPrevPageIndex] = useState(0)
    const [nextPageIndex, setNextPageIndex] = useState(itemPerPage)
    const [buttonPerPage, setButtonPerPage] = useState(10)
    const [firstButtonIndex, setFistButtonIndex] = useState(0)
    const [lastButtonIndex, setLastButtonIndex] = useState(buttonPerPage)

    const isLoaded = useRef(false)
    
    useEffect(() => {
        if(isLoaded.current) {
            return
        } else {
            isLoaded.current = true
            const getIngredient = () => {
                const userToken = localStorage.getItem('user-token')
                const config = {
                    headers: {
                       "Authorization":"Bearer " + userToken
                    }
                }
                axios.get(request_urls.getIngredients, config).then((result) => {
                       setIngredients(result.data.ing)
                       const ingredientList = result.data.ing
                       setIngredientList(ingredientList)
                }).catch((e) => {
                     console.log(e)
                }) 
            }
            getIngredient()
        }
        
    }, [])
    const NavigatePage =  useCallback((idx) => {
        setPrevPageIndex(((idx - 1) * itemPerPage) + 1)
        setNextPageIndex(idx*itemPerPage)
        // setIngredientList(ingredientList.slice(prevPageIndex, nextPageIndex))
    }, [itemPerPage])
    const setLastButton = () => {
          setFistButtonIndex(lastButtonIndex + 1)
          setLastButtonIndex(firstButtonIndex + buttonPerPage)
    }
    useEffect(() => {
        console.log("use Effect twice")
        const setPagination = () => {
            setButtonArray([])
            // lets fetch all the results first
            const dataChunkSize = 10
            const buttonPerPage = 10
            const pageList = ingredients.length / dataChunkSize
            // console.log(pageList)
            const buttonPerLine = pageList / buttonPerPage
            // we populate the button array
            console.log("triggered here")
            for(let i = firstButtonIndex; i < lastButtonIndex; i++)
            {
                  setButtonArray( b => [...b, <CButton key={i} className="btn btn-primary" onClick={()=>{NavigatePage(i)}}>{ i }</CButton>])
            }
            // then show limmited array
            
        //    console.log(buttonArray)
      }
         setPagination()
    }, [ingredients, NavigatePage, firstButtonIndex, lastButtonIndex])
   
  return (
    <div className="!tw-bg-gray-900">
           <AppSidebar/>
           <div className="wrapper d-flex flex-column tw-bg-gray-900" style={{ marginTop:"0px" }}>
                <AppHeader className="tw-bg-gray-900 tw-border-none"/>
                <CContainer className="min-vh-100">
                      <div className="body flex-grow-1 px-3">
                           <CRow className="justify-content-center border-bottom-0">
                              <CCol sm={10} lg={12}>
                                   <CRow>
                                      <CCol lg={3}>
                                            <h3 className="h3 tw-uppercase" style={{ color:"white", textAlign:"center" }}> Ingredients List </h3>
                                      </CCol>
                                      <CCol lg={6}>
                                          <CFormInput type="text" id="searchIngredient" placeholder="search ingredient"/>
                                      </CCol>
                                      <CCol lg={3}>
                                           <CButton className="btn-primary !tw-uppercase"> Add Ingredient </CButton>
                                      </CCol>
                                   </CRow>
                                   
                              </CCol>
                           </CRow>
                           <CRow className="justify-content-center !tw-mt-5">
                              <CCol sm={10} lg={12}>
                                 <CRow className="justify-content-center">
                                 <CTable className="!tw-bg-gray-600 !tw-rounded-lg !tw-mt-5">
                                      <CTableHead>
                                          <CTableRow>
                                             <CTableHeaderCell className="tw-text-white"> # </CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Ingredient</CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Price </CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Date Added </CTableHeaderCell>
                                             <CTableHeaderCell className="tw-text-white"> Action </CTableHeaderCell>
                                          </CTableRow>
                                      </CTableHead>
                                      <CTableBody>
                                          { 
                                              ingredientList.slice(prevPageIndex, nextPageIndex).map((ingredient, idx) => {
                                                     return <CTableRow key={idx}>
                                                            <CTableDataCell className="tw-text-white">
                                                                  { prevPageIndex +idx }
                                                            </CTableDataCell>
                                                            <CTableDataCell className="tw-text-white" >
                                                                {ingredient.name}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="tw-text-white">
                                                                 {ingredient.unitPrice}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="tw-text-white">
                                                                 {ingredient.createdAt}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="tw-text-white">
                                                                 <Button className='bg-success'> update </Button>
                                                            </CTableDataCell>
                                                     </CTableRow>
                                              })
                                           }
                                      </CTableBody>
                                  </CTable>
                                  
                                 </CRow>
                                 <CRow className='justify-content-center'>
                                    <CCol lg={1}>
                                         
                                        <CButton className={`btn btn-success ${firstButtonIndex === 0 ? "disabled" : ""}`}> <ChevronLeftIcon /> </CButton>
                                    </CCol>
                                     {
                                        
                                         buttonArray.map((res, idx) => {
                                              return <CCol lg={1}>{res}</CCol>
                                              
                                         })
                                      }
                                      <CCol lg={1}>
                                        <CButton className='btn btn-success' onClick={() => { setLastButton() }}> <ChevronRightIcon/> </CButton>
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

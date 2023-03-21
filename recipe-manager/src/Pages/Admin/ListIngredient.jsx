import React, { useCallback } from 'react'
import {AppHeader, AppSidebar, AppFooter, AppContent} from '../../Components/index'
import { useState, useEffect, useRef} from 'react';
import request_urls from '../../utils/connection';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link } from 'react-router-dom';
import UpdateIngredient from './UpdateIngredient';
import axios from 'axios';
import { setUpdated, hideUpdated, setCreated, hideCreated } from '../../features/IngredientSlice';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import CreateIngredient from './CreateIngredient';
import 'react-toastify/dist/ReactToastify.css';
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
    const [ingredients, setIngredients] = useState([])
    const [buttonArray, setButtonArray] = useState([])
    const [itemPerPage, setItemPerPage] = useState(10)
    const [prevPageIndex, setPrevPageIndex] = useState(1)
    const [nextPageIndex, setNextPageIndex] = useState(itemPerPage)
    const [buttonPerPage, setButtonPerPage] = useState(10)
    const [firstButtonIndex, setFirstButtonIndex] = useState(1)
    const [lastButtonIndex, setLastButtonIndex] = useState(buttonPerPage)
    const [refresh, setRefresh] = useState(false)
    // const [viewUpdate, setUpdateElement] = useState(false)
    const [updateElementID, setUpdateElementId] = useState(-1)

    const isLoaded = useRef(false)
    const isBtnLoaded = useRef(false)
    
    const dispatch = useDispatch()
    const viewUpdate = useSelector((state) => state.ingredientUpdate)
    

    const getIngredient = () => {
        const userToken = localStorage.getItem('user-token')
        const config = {
            headers: {
               "Authorization":"Bearer " + userToken
            }
        }
        axios.get(request_urls.getIngredients, config).then((result) => {
               setIngredients(result.data.ing.reverse())
            
        }).catch((e) => {
             console.log(e)
        }) 
    }
    useEffect(() => {
        // if(isLoaded.current) {
        //     return
        // } else {
        //     isLoaded.current = true
        //     getIngredient()
        // }
        getIngredient()
    }, [refresh])
    const NavigatePage =  useCallback((idx) => {
        setPrevPageIndex(((idx - 1) * itemPerPage) + 1)
        setNextPageIndex(idx*itemPerPage)
    }, [itemPerPage])

    const setLastButton = () => {
          setFirstButtonIndex(firstButtonIndex + buttonPerPage)   
          setLastButtonIndex(lastButtonIndex + buttonPerPage)
        //   console.log(firstButtonIndex.toString() + " " + lastButtonIndex.toString())
    }
    const setPrevButton = () => {
          setFirstButtonIndex(firstButtonIndex - buttonPerPage)
          setLastButtonIndex(lastButtonIndex - buttonPerPage)
    }
    useEffect(() => {
        const setPagination = () => {
                 const dataChunkSize = 10
                 const pageList = ingredients.length / dataChunkSize
                 const buttonPerLine = pageList / 10
                 // we populate the button array
                 console.log(buttonPerLine)
                 for(let i = 0; i < pageList; i++)
                 {
                       setButtonArray( b => [...b, i])
                 }
      }
         setPagination()
    }, [ingredients])
    const pageSearchPagination = (num) => {
        setButtonArray([])
        console.log(num)
        for(let i = 0; i < Math.floor(num); i++)
        {
              setButtonArray( b => [...b, i])
        }
    }
    const ingredientPageSearch = async (queryText) => {
            if(queryText.target.value !== "") {
                setIngredients([])
                setButtonArray([])
                const userToken = localStorage.getItem('user-token')
                const config = {
                    headers: {
                       "Authorization":"Bearer " + userToken
                    }
                }
                const data = {
                     "query": queryText.target.value
                }
                axios.post(request_urls.searchIngredient, data, config).then((result) => {
                    // console.log(result.data.ing)
                       let pageVal = result.data.ing.length / 10
                       let buttonPerPage = (pageVal / 10)
                       setIngredients(result.data.ing)
                       pageSearchPagination(buttonPerPage)
                       
                }).catch((e) => {
                     console.log(e)
                }) 
            }  else {
                 setButtonArray([])
                 getIngredient()
            }
    }
    const handleUpdate = (ingredientID) => {
           setUpdateElementId(ingredientID)
           dispatch(setUpdated())

    }
    
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
           <div className='display:hidden' value={refresh}></div>
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
                                          <CFormInput type="text" id="searchIngredient" onKeyUp={ingredientPageSearch}  placeholder="search ingredient"/>
                                      </CCol>
                                      <CCol lg={3}>
                                           <CButton  onClick={(e) => { dispatch(hideUpdated()); dispatch(setCreated()); }} className="btn-primary !tw-uppercase"> Add Ingredient </CButton>
                                      </CCol>
                                   </CRow>
                              </CCol>
                           </CRow>
                           {
                               viewUpdate.ingredientUpdated ? <UpdateIngredient id={updateElementID} setRefresh={setRefresh} refresh={refresh}/> : ""
                           }
                           {
                               viewUpdate.ingredientCreated ? <CreateIngredient setRefresh={setRefresh} refresh={refresh}/> : ""
                           }
                           <CRow className="justify-content-center !tw-mt-5">
                              <CCol sm={10} lg={12}>
                                 <CRow className="justify-content-center">
                                 <CTable className="!tw-rounded-lg !tw-mt-5" striped>
                                      <CTableHead>
                                          <CTableRow>
                                             <CTableHeaderCell className="!tw-text-gray-400"> # </CTableHeaderCell>
                                             <CTableHeaderCell className="!tw-text-gray-400"> Ingredient</CTableHeaderCell>
                                             <CTableHeaderCell className="!tw-text-gray-400"> Price </CTableHeaderCell>
                                             <CTableHeaderCell className="!tw-text-gray-400"> Date Added </CTableHeaderCell>
                                             <CTableHeaderCell className="!tw-text-gray-400"> Action </CTableHeaderCell>
                                          </CTableRow>
                                      </CTableHead>
                                      <CTableBody>
                                          { 
                                              ingredients.slice(prevPageIndex - 1, nextPageIndex).map((ingredient, idx) => {
                                                     return (
                                                        <CTableRow key={idx}>
                                                            <CTableDataCell className="!tw-text-gray-400">
                                                                  { prevPageIndex +idx }
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-gray-400" >
                                                                {ingredient.name}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-gray-400">
                                                                 {ingredient.unitPrice}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-gray-400">
                                                                 {ingredient.createdAt}
                                                            </CTableDataCell>
                                                            <CTableDataCell className="!tw-text-gray-400">
                                                                 {/* <Button className='bg-success'> update </Button> */}
                                                                 <Button onClick={() => { handleUpdate(ingredient._id) }} className="btn btn-primary">Update</Button>
                                                            </CTableDataCell>
                                                      </CTableRow>
                                                     )
                                              })
                                           }
                                      </CTableBody>
                                  </CTable>
                                 </CRow>
                                 <CRow className='justify-content-center'>
                                    <CCol lg={1}>
                                         
                                        <CButton className={`btn btn-success ${(firstButtonIndex === 0 || firstButtonIndex - buttonPerPage < 0) ? "d-none" : ""}`} onClick={setPrevButton}> <ChevronLeftIcon /> </CButton>
                                    </CCol>
                                     {
                                        
                                         buttonArray.slice(firstButtonIndex, lastButtonIndex).map((res, idx) => {
                                            return <CCol lg={1} key={idx}>
                                                    
                                                         <CButton  key= {idx} className="btn btn-primary" onClick={()=>{NavigatePage(res)}}>{ res }</CButton>
                                                     
                                              </CCol>
                                         })
                                      }
                                      <CCol lg={1}>
                                        <CButton className={`btn btn-success ${(lastButtonIndex * buttonPerPage >= ingredients.length) ? "d-none" : ""}`} onClick={setLastButton}> <ChevronRightIcon/> </CButton>
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

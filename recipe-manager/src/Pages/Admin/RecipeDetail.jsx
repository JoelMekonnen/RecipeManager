import React from 'react'
import { AppHeader, AppSidebar, AppFoooter, Appcontent } from '../../Components/index'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CRow } from '@coreui/react'
import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { Link, useParams } from 'react-router-dom'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IndeterminateCheckBoxIcon from '@mui/icons-material/IndeterminateCheckBox';
import axios from 'axios'
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
     CFormInput,
     CCard,
     CCardBody,
     CCardFooter,
     CCardHeader,
     CCardText
} from '@coreui/react'
import request_urls from '../../utils/connection'


export default function RecipesDetailPage(props) {

  let { id } = useParams()
  
  const [recipes, setRecipes] = useState([]) // the recipe state
  const [ingList, setIngList] = useState([]) // the ingredient list for the recipe
  const [procList, setProcList] = useState([]) // the procedures or the steps for cooking the ingredients
  const [ingSearchResult, setIngSearchResult] = useState([]) // the returned result list by the search
  const [recipeName, setRecipeName] = useState("") // the name of the ingedient selected to be added
  const [searchIngredientName, setSearchIngredientName] = useState("") // the ingredient searched
  const [ingredientID, setIngredientID] = useState("") // the id of the selected ingredient
  const [ingAmmount, setIngAmmount] = useState(0)  // the new ammount to be added
  const [ingUnit, setIngUnit] = useState("")  // the unit of the ingredient
  const [updated, setUpdated] = useState(false) // to check if there was a successful update
  const [toggleUpdate, setToggleUpdate] = useState(false) // to show the new ingredient adding form
  const [totalPrice, setTotalPrice] = useState(0) // the total price

  useEffect(() => {
      // lets get all the recipes
  const getRecipes = () => {
     const userToken = localStorage.getItem('user-token')
     const config = {
          headers: {
               "Authorization":"Bearer " + userToken
          }
     }
     axios.get(request_urls.getRecipeById + id, config).then((result) => {
          let ingredientList = result.data.msg[0].ingredientList;
          setRecipes(result.data.msg[0])
          setRecipeName(result.data.msg[0].name)
          setIngList(ingredientList)
          setProcList(result.data.msg[0].procedure)
          setTotalPrice(result.data.msg[0].totalPrice)
          // lets get the total of the recipe
     }).catch((error) => {
          console.log(error)
     })

}
     getRecipes()
  }, [id, updated])
  const searchIngredient = (queryText) => {
     setSearchIngredientName(queryText.target.value)
     if(queryText.target.value !== "") {
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
              setIngSearchResult(result.data.ing.splice(0, 4))
                 
          }).catch((e) => {
               console.log(e)
          }) 
      }  else {
           setIngSearchResult([])
      }

  }
  const changeIngredientName = (name, id) => {
     //    console.log("result clicked " + name)
        setIngredientID(id)
        setSearchIngredientName(name)
        setIngSearchResult([])
  }
  // lets update the recipe
  const updateRecipe = () => {
         // lets make a recipe ingredientList
          const userToken = localStorage.getItem('user-token')
          const config = {
              headers: {
                 "Authorization":"Bearer " + userToken
              }
          }
          // lets validate the input 
          if((ingredientID === "") || (ingAmmount === 0) || (ingUnit === "")) {
                      toast.error("can not update fill all the fields required")
          } else {
               let ingredients = {
                         ingredientID:ingredientID,
                         ammount:ingAmmount,
                         unit:ingUnit
               }
               ingList.push(ingredients)
               axios.post(request_urls.updateRecipe, { name:recipeName, ingredientList:ingList, procedure:procList, recipe_id:recipes._id}, config).then((result) => {
                         if(result.status === 200) {
                              toast.success("update successfull")
                         }
                         setUpdated(!updated)
                         setToggleUpdate(false)
                         setIngredientID("")
                         
               })
          }
        

  }
  const deleteButtonClicked = (idx) => {
       console.log("Delete button clicked " + idx)
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
           <div className="wrapper d-flex flex-column tw-bg-gray-900 tw-pb-5" style={{ marginTop:"0px" }}>
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
                                  <CCol lg={12}>
                                      <CCard className='!tw-bg-gray-800 tw-rounded-lg' >
                                            <CCardHeader>
                                                <h1 className="tw-text-white" style={{ textAlign:"center" }}>{ recipes.recipeName } - { recipes.totalPrice + " birr" } </h1>
                                            </CCardHeader>
                                            <CCardBody>
                                                 <CTable className='!tw-rounded-lg' striped>
                                                     <CTableHead>
                                                          <CTableRow>
                                                                 <CTableHeaderCell className="!tw-text-gray-400"> # </CTableHeaderCell>
                                                                 <CTableHeaderCell className="!tw-text-gray-400"> Ingredient</CTableHeaderCell>
                                                                 <CTableHeaderCell className="!tw-text-gray-400"> amount </CTableHeaderCell>
                                                                 <CTableHeaderCell className="!tw-text-gray-400"> Unit </CTableHeaderCell>
                                                                 <CTableHeaderCell className="!tw-text-gray-400"> Action </CTableHeaderCell>
                                                          </CTableRow>
                                                     </CTableHead>
                                                      <CTableBody>
                                                       <>
                                                      {
                                                       ingList.map((ing, idx) => {
                                                             return(
                                                            <CTableRow key={'row_' + idx}>
                                                                  <CTableDataCell  className="!tw-text-gray-400">
                                                                      {idx + 1}
                                                                 </CTableDataCell>
                                                                 <CTableDataCell  className="!tw-text-gray-400">
                                                                      {ing.ingredientID.name + " - " + ing.ingredientID.unitPrice + " birr"}
                                                                 </CTableDataCell>
                                                                 <CTableDataCell  className="!tw-text-gray-400">
                                                                       {ing.ammount}
                                                                 </CTableDataCell>
                                                                 <CTableDataCell className="!tw-text-gray-400">
                                                                       {ing.unit}
                                                                 </CTableDataCell>
                                                                 <CTableDataCell className="!tw-text-gray-400">
                                                                       <Button className='btn btn-danger' onClick={() => { deleteButtonClicked(idx) }}> Delete </Button>
                                                                 </CTableDataCell>
                                                             </CTableRow>
                                                            )
                                                       })
                                                      }
                                                      {
                                                            toggleUpdate ?
                                                            <CTableRow>
                                                            <CTableDataCell className='!tw-text-gray-400'>
                                                                 { ingList.length + 1 }
                                                            </CTableDataCell>
                                                            <CTableDataCell className='!tw-text-gray-400'>
                                                                 <CCol lg={10}>
                                                                 <CRow>
                                                                      <CFormInput type='text' value={searchIngredientName} onChange={searchIngredient}  placeholder='ingredient name'/>
                                                                  </CRow>
                                                                  <CRow>
                                                                           {
                                                                                     ingSearchResult.length !== 0 ? <div className="tw-bg-white" key={"something"}>
                                                                                               {
                                                                                                    ingSearchResult.map((result, idx) => {
                                                                                                         return(
                                                                                                              <div>
                                                                                                                   <p onClick={() => { changeIngredientName(result.name, result._id) }} key={"result_" + idx} className='hover:tw-cursor-crosshair'> { result.name } </p>
                                                                                                                   <hr />
                                                                                                              </div>
                                                                                                         )
                                                                                                         
                                                                                                    })
                                                                                               }
                                                                                          </div> : " "
                                                                           }
                                                                  </CRow>
                                                                 </CCol>
                                                             
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                 <CCol lg={8}>
                                                                      <CFormInput type='number'  onChange={(e) => {setIngAmmount(e.target.value)}}   placeholder='ammount'/>
                                                                 </CCol>
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                 <CCol lg={8}>
                                                                      <CFormInput type='text'  onChange={(e) => {setIngUnit(e.target.value)}} placeholder='unit'/>
                                                                 </CCol>
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                  <Button className="btn btn-success" onClick={updateRecipe} style={{ }}> Update </Button> 
                                                            </CTableDataCell>
                                                       </CTableRow> : ""
                                                      }
                                                      </>
                                                      </CTableBody>
                                                 </CTable>
                                                  {/* {
                                                        toggleUpdate ? <CRow className='justify-content-center'>
                                                                 <CCol lg={4} className="!tw-mt-5 !tw-mb-5">
                                                                      <CRow>
                                                                           <CFormInput type='text' value={searchIngredientName} onChange={searchIngredient}  placeholder='ingredient name'/>
                                                                      </CRow>
                                                                      <CRow>
                                                                           {
                                                                                     ingSearchResult.length !== 0 ? <div className="tw-bg-white" key={"something"}>
                                                                                               {
                                                                                                    ingSearchResult.map((result, idx) => {
                                                                                                           return(
                                                                                                               <div>
                                                                                                                   <p onClick={() => { changeIngredientName(result.name, result._id) }} key={"result_" + idx} className='hover:tw-cursor-crosshair'> { result.name } </p>
                                                                                                                   <hr />
                                                                                                               </div>
                                                                                                           )
                                                                                                          
                                                                                                    })
                                                                                               }
                                                                                          </div> : " "
                                                                           }
                                                                      </CRow>
                                                                 </CCol>
                                                                 <CCol lg={3} className="!tw-mt-5 !tw-mb-5">
                                                                       <CFormInput type='number'  onChange={(e) => {setIngAmmount(e.target.value)}}   placeholder='ammount'/>
                                                                 </CCol>
                                                                 <CCol lg={3} className="!tw-mt-5 !tw-mb-5">
                                                                       <CFormInput type='text'  onChange={(e) => {setIngUnit(e.target.value)}} placeholder='unit'/>
                                                                 </CCol>
                                                                 <CCol lg={2} className="!tw-mt-5 !tw-mb-5">
                                                                       <AddCircleIcon  style={{ color:"white" }}/>
                                                                 </CCol>

                                                      </CRow> : ""
                                                  } */}
                                                  <CRow className='justify-content-center '>
                                                       {
                                                       !toggleUpdate ? <CCol lg={4}>
                                                            <CRow>
                                                                    <Button className="btn btn-primary" style={{ marginTop:"30px"  }} onClick={(e) => { setToggleUpdate(true) }}> <AddCircleIcon/>  Add Ingredient </Button> 
                                                            </CRow>
                                                        </CCol> : "" 
                                                        }
                                                        {
                                                        toggleUpdate ? 
                                                            <CRow className='justify-content-center'>
                                                                 
                                                                 <CCol lg={4} style={{ marginLeft:"30px" }}>
                                                                      <CRow>
                                                                                <Button className="btn btn-danger" onClick={(e) => { setToggleUpdate(false);setSearchIngredientName("");setIngAmmount(0);setIngUnit("") }} style={{ marginTop:"30px", marginLeft:"30px" }}> Cancel </Button>    
                                                                      </CRow>
                                                                 </CCol> 
                                                            </CRow>
                                                            
                                                            : 
                                                          ""
                                                        } 
                                                  </CRow>
                                            </CCardBody>
                                      </CCard>
                                  </CCol>
                           </CRow>
                           <CRow className="justify-content-center !tw-mt-5">
                                  <CCol lg={12}>
                                      <CCard className='!tw-bg-gray-700 tw-rounded-lg' >
                                            <CCardBody>
                                             {
                                                       procList.map((proc, idx) => {
                                                             return(
                                                                 <div>
                                                                      <CRow className='justify-content-center' key={'row_' + idx}>
                                                                                <CCol lg={2} className='!tw-mt-5 !tw-mb-5 tw-text-white'>
                                                                                     <h5> Step - { idx + 1 } </h5>
                                                                                </CCol>
                                                                                <CCol lg={4} className="!tw-mt-5 !tw-mb-5 tw-text-white">
                                                                                     <h5>{ proc }</h5>
                                                                                </CCol>
                                                                                <CCol lg={2} className="!tw-mt-5 !tw-mb-5">
                                                                                      <IndeterminateCheckBoxIcon style={{ color:"red" }}/>
                                                                                </CCol>
                                                                      </CRow>
                                                                       <hr style={{ borderColor:"white" }}/>
                                                                 </div>
                                                            
                                                            )
                                                       })
                                                  }
                                                  <CRow className='justify-content-center '>
                                                       <CCol lg={4}>
                                                            <CRow>
                                                                  <Button className="btn btn-primary" style={{ marginTop:"30px"  }}> <AddCircleIcon/>  Add Steps </Button>
                                                            </CRow>
                                                        </CCol>
                                                        
                                                        
                                                  </CRow>
                                            </CCardBody>
                                      </CCard>
                                  </CCol>
                           </CRow>
                      </div>
                </CContainer>
           </div>
       </div>
  )
}

import React from 'react'
import {AppHeader, AppSidebar, AppFooter, AppContent} from '../../Components/index'
import { useState, useEffect, useRef } from 'react'
import request_urls from '../../utils/connection'
import { toast, ToastContainer } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { CFormInput } from '@coreui/react'
import { Button } from 'react-bootstrap'
import axios from 'axios'
import {
  CRow,
  CCol,
  // CFormInput,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
  CCard,
  CContainer,
  CCardHeader,
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
import '../../css/style.css'
// this function creates the recipe
export default function CreateRecipePage() {

  // lets create the recipe creater
  const [ingList, setIngList] = useState([])
  const [procList, setProcList] = useState([])
  const [ingSearchResult, setIngSearchResult] = useState([]) // the returned result list by the search
  const [searchIngredientName, setSearchIngredientName] = useState("") // the ingredient searched
  const [ingredient, setIngredient] = useState({}) // the id of the selected ingredient
  const [ingAmmount, setIngAmmount] = useState(0)  // the new ammount to be added
  const [ingUnit, setIngUnit] = useState("")
  const [proc, setProc] = useState("")
  const [recipeName, setRecipeName] = useState("")
  const [recipePrice, setRecipePrice] = useState(0)
  const [recipes, setRecipes] = useState({
         name:"",
         ingList:[],
         procedure:[],
         price:0
  })
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
 const changeIngredientName = (result) => {
  //    console.log("result clicked " + name)
     setIngredient(result)
     setSearchIngredientName(result.name)
     setIngSearchResult([])
 }

 const addIngredientToRecipes = () => {
        ingList.push({
              ingredientID:ingredient,
              ammount:ingAmmount,
              unit:ingUnit
        })
        let ingListArray = {
             ingredientID:ingredient._id,
             ammount:ingAmmount,
             unit:ingUnit
        }
        setSearchIngredientName("")
        recipes.ingList.push(ingListArray)
        setIngredient({})
        setIngAmmount(0)
        setIngUnit("")
 }
   // lets delete the ingredient from the recipe
  const deleteButtonClicked = (idx) => {
    console.log(ingList[0].ingredientID._id)
    let newIngList = ingList.filter(list => list.ingredientID._id !== idx);
    setIngList(newIngList);
//     setRecipes((prevstate) => ({ ...prevstate, ingList:newIngList}))
     recipes.ingList = newIngList
  }
  // lets create a new recipe
  const addProcedureToRecipe = () => {
       setProcList([...procList, proc])
       recipes.procedure.push(proc)
       setProc("")
  } 
  // lets add a remove procedure button
  const removeProcedure = (idx) => {
        let newProcList = procList.filter((elm, index) => {
               return index !== idx
        })
        setProcList(newProcList)
        recipes.procedure = newProcList
  }
  // now lets upload the recipe
  const uploadRecipe = () => {
       // lets curate the recipe data
       recipes.name = recipeName
       recipes.price = recipePrice
       console.log(recipes)
       if((recipes.name === "") || (recipes.ingList.length === 0) || (recipes.procedure.length === 0) || (recipes.price === 0))
       {
              toast.error("Please fill all the fields required")
       } else {
          const userToken = localStorage.getItem('user-token')
          const config = {
              headers: {
                 "Authorization":"Bearer " + userToken
              }
          }
          axios.post(request_urls.createRecipes, recipes, config).then((result) => {
              // console.log(result.data.ing)
               if(result.status === 200) {
                    toast.success("successfully created the recipe")
                         setRecipes({
                              name:"",
                              ingList:[],
                              procedure:[],
                              price:0
                         })
                         setRecipeName("")
                         setRecipePrice(0)
                         setIngList([])
                         setIngUnit("")
                         setProcList([])

               }    
               }).catch((e) => {
                    console.log(e)
               }) 
          }  
       console.log(recipes)
  }
  return (
    <div className='!tw-bg-gray-900'>
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
                                <CRow lg={6}>
                                    <h3 className='h3 tw-uppercase header-style !tw-text-white' style={{ textAlign:"center" }}>Create New Recipe </h3>
                                </CRow>
                                <CRow className="justify-content-center !tw-mt-7">
                                    <CCol lg={12}>
                                        <CCard className="!tw-bg-gray-600 tw-rounded-lg">
                                            <CCardHeader>
                                              <CRow>
                                                  <CCol lg={6}>
                                                    <CRow>
                                                        <CCol lg={4}>
                                                            <h5 className='header-style h5 !tw-text-white' style={{ textAlign:"end",lineHeight:"1.8" }}>Recipe-Name:</h5>
                                                        </CCol>
                                                        <CCol lg={8}>
                                                          <CFormInput type='text' onChange={(e)=>{ setRecipeName(e.target.value) }} placeholder='Recipe Name'/>
                                                        </CCol>
                                                    </CRow>
                                                  </CCol>
                                                  <CCol lg={6}>
                                                    <CRow>
                                                      <CCol lg={4}>
                                                            <h5 className="header-style h5 !tw-text-white" style={{ textAlign:"end", lineHeight:"1.8" }}>Recipe-Price:</h5>
                                                        </CCol>
                                                        <CCol lg={8}>
                                                          <CFormInput type='number' onChange={(e) => { setRecipePrice(e.target.value) }} placeholder='price (birrs)'/>
                                                        </CCol>
                                                    </CRow>
                                                  </CCol>
                                              </CRow>
                                            </CCardHeader>
                                            <CCardBody>
                                                <>
                                                <CTable className='!tw-rounded-lg' striped>
                                                    <CTableHead>
                                                         <CTableRow>
                                                             <CTableHeaderCell className="!tw-text-gray-400 header-style"> # </CTableHeaderCell>
                                                             <CTableHeaderCell className='!tw-text-gray-400 header-style'> Ingredient </CTableHeaderCell>
                                                             <CTableHeaderCell className='!tw-text-gray-400 header-style'> Ammount </CTableHeaderCell>
                                                             <CTableHeaderCell className='!tw-text-gray-400 header-style'> Unit </CTableHeaderCell>
                                                             <CTableHeaderCell className='!tw-text-gray-400 header-style'> Action </CTableHeaderCell>
                                                         </CTableRow>
                                                    </CTableHead>
                                                    <CTableBody>
                                                        <>
                                                            {
                                                                 ingList.map((ing, idx) => {
                                                                         return(
                                                                          <CTableRow key={'row_' + idx}>
                                                                                <CTableDataCell  className="!tw-text-gray-400 paragraph-style">
                                                                                    {idx + 1}
                                                                               </CTableDataCell>
                                                                               <CTableDataCell  className="!tw-text-gray-400 paragraph-style">
                                                                                    {ing.ingredientID.name + " - " + ing.ingredientID.unitPrice + " birr"}
                                                                               </CTableDataCell>
                                                                               <CTableDataCell  className="!tw-text-gray-400 paragraph-style">
                                                                                     {ing.ammount}
                                                                               </CTableDataCell>
                                                                               <CTableDataCell className="!tw-text-gray-400 paragraph-style">
                                                                                     {ing.unit}
                                                                               </CTableDataCell>
                                                                               <CTableDataCell>
                                                                                   <Button className='btn btn-danger' onClick={() => { deleteButtonClicked(ing.ingredientID._id) }}> Delete </Button>
                                                                               </CTableDataCell>
                                                                           </CTableRow>);
                                                                 })
                                                            }
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
                                                                                                                   <p onClick={() => { changeIngredientName(result) }} key={"result_" + idx} className='hover:tw-cursor-crosshair'> { result.name } </p>
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
                                                                      <CFormInput type='number'  onChange={(e) => {setIngAmmount(e.target.value)}}  value={ingAmmount}  placeholder='ammount'/>
                                                                 </CCol>
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                 <CCol lg={8}>
                                                                      <CFormInput type='text'  onChange={(e) => {setIngUnit(e.target.value)}} value={ingUnit} placeholder='unit'/>
                                                                 </CCol>
                                                            </CTableDataCell>
                                                            <CTableDataCell>
                                                                  <Button className="btn btn-primary" onClick={() => { addIngredientToRecipes(); }}  style={{ }}> ADD </Button> 
                                                            </CTableDataCell>
                                                         </CTableRow>
                                                        </>
                                                    </CTableBody>
                                                </CTable>
                                                {/* <CRow className="justify-content-center">
                                                     <CCol lg={4}>
                                                          <CRow>
                                                              <Button className="btn btn-success"> CREATE </Button>
                                                          </CRow>
                                                     </CCol>
                                                </CRow> */}
                                                </>
                                            </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                                <CRow className="justify-content-center !tw-mt-10">
                                    <CCol lg={12}>
                                        <CCard className="!tw-bg-gray-600 tw-rounded-lg">
                                             <CCardHeader>
                                                 <CRow className='justify-content-center'>
                                                      <CCol lg={4}>
                                                      <h3 className='h3 tw-uppercase header-style !tw-text-white' style={{ textAlign:"center" }}> ADD PROCEDURE  </h3>
                                                      </CCol>
                                                 </CRow>
                                             </CCardHeader>
                                             <CCardBody>
                                                <>
                                                  <CTable className='!tw-rounded-lg' striped>
                                                        <CTableHead>
                                                            <CTableRow>
                                                                <CTableHeaderCell className="!tw-text-gray-400 header-style"> Steps </CTableHeaderCell>
                                                                <CTableHeaderCell className='!tw-text-gray-400 header-style'> Description </CTableHeaderCell>
                                                                <CTableHeaderCell className='!tw-text-gray-400 header-style'> Action </CTableHeaderCell>
                                                            </CTableRow>
                                                        </CTableHead>
                                                        <CTableBody> 
                                                              {
                                                                   procList.map((proc, idx) => {
                                                                         return(
                                                                             <CTableRow key={'row_' + idx}>
                                                                                    <CTableDataCell className='!tw-text-gray-400 paragraph-style'>
                                                                                         {idx + 1}
                                                                                    </CTableDataCell>
                                                                                    <CTableDataCell className='!tw-text-white'>
                                                                                         {proc}
                                                                                    </CTableDataCell>
                                                                                    <CTableDataCell>
                                                                                           <Button className='btn btn-danger' onClick={() => { removeProcedure(idx) }}> Delete </Button>
                                                                                    </CTableDataCell>
                                                                             </CTableRow>
                                                                         )
                                                                   })
                                                              }
                                                              <CTableRow>
                                                                    <CTableDataCell className='!tw-text-gray-400'>
                                                                            { procList.length + 1 }
                                                                    </CTableDataCell>
                                                                    <CTableDataCell className='!tw-text-gray-400'>
                                                                         <CCol lg={10}>
                                                                            <CFormInput type='text' value={proc}  onChange={(e) => { setProc(e.target.value) }} placeholder='description'/>
                                                                         </CCol>
                                                                    </CTableDataCell>
                                                                    <CTableDataCell>
                                                                          <Button className="btn btn-primary"  onClick={()=>{ addProcedureToRecipe() }} style={{ }}> ADD </Button> 
                                                                    </CTableDataCell>
                                                              </CTableRow>
                                                        </CTableBody>
                                                  </CTable>
                                                  </>
                                             </CCardBody>
                                        </CCard>
                                    </CCol>
                                </CRow>
                                <CRow className='justify-content-center !tw-mt-10'>
                                     <CCol lg={4}>
                                          <CRow className='justify-content-center'>
                                               <Button className="btn btn-primary" onClick={() => { uploadRecipe() }}  style={{ }}> Create </Button> 
                                          </CRow>
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

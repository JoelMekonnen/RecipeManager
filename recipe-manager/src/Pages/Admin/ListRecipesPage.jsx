import React from 'react'
import { AppHeader, AppSidebar, AppFoooter, Appcontent } from '../../Components/index'
import { useSelector, useDispatch } from 'react-redux'
import { CContainer, CRow } from '@coreui/react'
import { useEffect, useState } from 'react'



export default function ListRecipesPage() {
 

  return (
       <div className="!tw-bg-gray-900">
           <AppSidebar/>
           <div className="wrapper d-flex flex-column tw-bg-gray-900" style={{ marginTop:"0px" }}>
                <AppHeader className="tw-bg-gray-900 tw-border-none"/>
                <CContainer className="min-vh-100">
                      <div className="body flex-grow-1 px-3">
                           <CRow className="justify-content-center border-bottom-0">
                              
                           </CRow>
                      </div>
                </CContainer>
           </div>
       </div>
  )
}

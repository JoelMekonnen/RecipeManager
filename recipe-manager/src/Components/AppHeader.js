import React from 'react'
import { NavLink } from 'react-router-dom'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { useSelector, useDispatch } from 'react-redux'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'

import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
// import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  const userInfo = useSelector((state) => state.user)

  const logoutFunction = () => {
    localStorage.setItem("user-profile", null)
    localStorage.setItem("loggedIn", false)
    localStorage.setItem("user-token", "")
    window.location.replace("/Login")
  }

  return (
    <CHeader position="sticky" className="mb-4 !tw-bg-gray-800 !tw-text-white border-bottom-0">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon style={{ color:'white' }} icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          {/* <CIcon icon={logo} height={48} alt="Logo" /> */}
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto ">
          {/* <CNavItem>
            <CNavLink to="/dashboard" className='!tw-text-white' component={NavLink}>
              Dashboard
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className='!tw-text-white'>Users</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" className='!tw-text-white'>Settings</CNavLink>
          </CNavItem> */}
        </CHeaderNav>
        <CHeaderNav>
          <CNavItem>
            
            <CNavLink href="#" onClick={logoutFunction} className='!tw-text-white'>
            { userInfo.user.firstname + " " + userInfo.user.lastname } 
                <PowerSettingsNewIcon style={{ marginLeft:"30px" }}/>
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      {/* <CHeaderDivider /> */}
      <CContainer fluid>
        {/* <AppBreadcrumb /> */}
      </CContainer>
    </CHeader>
  )
}

export default AppHeader

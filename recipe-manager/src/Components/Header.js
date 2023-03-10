import {useEffect, useState} from 'react'
import React from "react"
import {menu, close} from '../assets'
import { Link } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';



function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const pages = ['Products', 'Pricing', 'Blog'];
    const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };
  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <AppBar position="static" sx={{  boxShadow:"none", backgroundColor:'#111827' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="#000"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))} */}
               <MenuItem>
                     <Link to="/">
                         <Typography textAlign="center" fontFamily="montserrat"  sx={{ my: 2,  display: 'block', marginRight:'20px'}}> Home </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/About">
                         <Typography textAlign="center" fontFamily="montserrat" sx={{ my: 2,  display: 'block',  marginRight:'20px'}}> About </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/Contact">
                         <Typography textAlign="center" fontFamily="montserrat" sx={{ my: 2,  display: 'block', marginRight:'20px'}}> Contact </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/Login">
                         <Typography textAlign="center" fontFamily="montserrat" sx={{ my: 2,  display: 'block', marginRight:'20px'}}> Login </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <button type="button" className="tw-text-gray-900 !tw-bg-yellow-700 tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-white dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Submit</button>
                </MenuItem>
              </Menu>
              <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                flexGrow: 1,
                fontFamily: 'Source Sans Pro',
                fontWeight: 700,
                color: '#00',
                textDecoration: 'none',
                ':hover': {
                  color: '#FFF'
              }
              }}
            >
              My-Recipe
            </Typography>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {/* {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))} */}
              <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                my: 2,
                mx: '20%',
                display: { xs: 'none', md: 'flex' },
                flexGrow: 1,
                fontFamily: 'Source Sans Pro',
                fontWeight: 700,
                color: '#FFF',
                textDecoration: 'none',
                width: '50%',
                ':hover': {
                    color: '#FFF'
                }
                
              }}
            >
              Recipe Manager
            </Typography>
               <MenuItem>
                     <Link to="/">
                         <Typography textAlign="center" fontFamily="montserrat"  sx={{ my: 2, color: 'white', display: 'block', marginRight:'20px', fontWeight: 'bold'
                }}> Home </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/About">
                         <Typography textAlign="center" fontFamily="montserrat" sx={{ my: 2, color: 'white', display: 'block',  marginRight:'20px',  fontWeight: 'bold'}}> About </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/Contact">
                         <Typography textAlign="center" fontFamily="montserrat" sx={{ my: 2, color: 'white', display: 'block', marginRight:'20px', fontWeight: 'bold',  ':hover': {
                    color: '#FFF'
                }}}> Contact </Typography>
                     </Link>
                </MenuItem>
                <MenuItem>
                     <Link to="/Login">
                          <button type="button" className="!tw-text-white !tw-mt-2 !tw-bg-transparent tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-gray-900 dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Login</button>
                     </Link>
                </MenuItem>
                <MenuItem >
                     <Link to="/Register">
                         <button type="button" className="tw-text-gray-900 !tw-mt-2 !tw-bg-green-400 tw-border tw-border-gray-300 focus:tw-outline-none hover:tw-bg-gray-100 focus:tw-ring-4 focus:tw-ring-gray-200 tw-font-medium tw-rounded-lg tw-text-sm tw-px-5 tw-py-2.5 tw-mr-2 tw-mb-2 dark:tw-bg-gray-800 dark:tw-text-gray-900 dark:tw-border-gray-600 dark:hover:tw-bg-gray-700 dark:hover:tw-border-gray-600 dark:focus:tw-ring-gray-700">Sign Up</button>
                     </Link>
                </MenuItem>
            </Box>

          </Toolbar>
        </Container>
      </AppBar>
    );
  }
  export default Header;

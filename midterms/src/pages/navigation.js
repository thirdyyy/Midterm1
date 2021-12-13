import * as React from 'react'
import {AppBar, Box, Toolbar, Link, Grid, styled, Modal, Button,InputBase} from '@mui/material';
import { alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';
import {ReactComponent as User} from "../assets/user-circle-regular.svg";
import { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const clientId = "35289938563-3aojaiotfcj7ra2s4m8645r60lrrhbu8.apps.googleusercontent.com";

const classes = {
  
  appBar: {
    backgroundColor: "#1e1f20",
    height: "76px",
   
  }, 
  logo: {
      fontSize: "24px",
  },
  
  toolBar: {
    padding: 2,
  },
  menuLink: {
    
    color:(theme) => theme.palette.common.white,
    "&:hover" :{
      color: "#26ce8d"
    },
    "&:active" :{
      color: "#26ce8d",
    },
    marginLeft: 5,
  },
  menuContainer:{

    fontSize: "14px",
  },
  


}


const style = {
  position: 'absolute',
  top: '160px',
  left: '80%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#131414 ',
  opacity: 0.7,
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  height: '38px',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '158px',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));


export default function Navigation() {

 
  const [showloginButton, setShowloginButton] = useState(true);
  const [showlogoutButton, setShowlogoutButton] = useState(false);
  const onLoginSuccess = (res) => {
    console.log("Login Success:", res.profileObj);
    setShowloginButton(false);
    setShowlogoutButton(true);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const onSignoutSuccess = () => {
    alert("You have been logged out successfully");
    console.clear();
    setShowloginButton(true);
    setShowlogoutButton(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box>
      <AppBar position="static" sx={classes.appBar}>
      <Toolbar sx={classes.toolBar}>
      <Grid   container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
        <Box sx={classes.logo}> 
        
        <Link href="#" sx={{color:"white", textDecoration: "none"}}>
          Student Review
          </Link>
        </Box>
     
      <Box sx={classes.menuContainer}>
        <Link href="/" sx={classes.menuLink} underline="none">
                Student List
        </Link>
        <Link href="/studentevaluation" sx={classes.menuLink} underline="none">
                Student Evaluation
        </Link>
        <Link href="#" sx={classes.menuLink} underline="none">
                Blog
        </Link>
        
        
      </Box>
   
 

    <Box >
      <Grid container
              direction="row"
              justifyContent="space-between"
              alignItems="center">
      <Button sx={classes.userButton} onClick={handleOpen}>
          <User style={{ height:"25",marginLeft: "20", float:"right", color:"white"}}/>
          
        </Button><Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>

        <div>
            { showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : null}

            { showlogoutButton ?
                <GoogleLogout
                    clientId={clientId}
                    buttonText="Sign Out"
                    onLogoutSuccess={onSignoutSuccess}
                >
                </GoogleLogout> : null
            }
        </div>
        </Box>
      </Modal>
        
   
      <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder=""
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          </Grid>
          </Box>
       
        </Grid>
      </Toolbar>
     </AppBar>
     
    </Box>
    
  )
}

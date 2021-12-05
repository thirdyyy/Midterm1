import React from "react";

import {
  Box,
  Grid,
  Stack,
  Button,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import {ReactComponent as Discord} from "../assets/discord-brands.svg";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Avatar from '@mui/material/Avatar';
import rommel from '../assets/rommel.png';
import Navigation from './navigation';
import jaycee from '../assets/jc.jpg';
import thirdy from '../assets/thirdy.jpeg';
import ep from '../assets/ep.jpg';
import {Helmet} from "react-helmet";



const classes = {
  appBar: {
    backgroundColor: (theme) => theme.palette.common.red,
  },
  logo: {
    height: 42,
    color: (theme) => theme.palette.common.white,
  },
  bg: {
    backgroundColor: "#131414",
    
  },
  
  footer: {
      color: "#313233",
  },

  footer1: {
      color: "#26ce8d"
  }
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function Main() {
  return (
    <Box sx={classes.bg}>
      <Helmet>
      <title>Student Review</title>
      <meta
      name="description"
      content="BULACAN STATE UNIVERSITY - STUDENT LIST"/>
      </Helmet>
      
      <Navigation/>
      <Grid
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
         
          marginLeft: '19.5%',
        }}
      >
          <br>
          </br>
          <br>
          </br>

    <Typography sx ={{color:'#FFFFFF'}}>Top Students</Typography>

        </Grid>
      <Grid
      direction= 'row'
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
          <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 2,
              width: 201,
              height: 111,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          
        >

            
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
             <Grid direction ='column' 
           >
               
               <Avatar src={rommel} alt="Rommel" />
               <Grid >
              <Typography sx={{color:'#FFFFFF',fontSize:13}}>Rommel</Typography>
              <Typography sx={{color:'#676a6e', fontSize:13}}>30 Reviews</Typography>
              <Stack direction="row" spacing={-1.5}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>
          
        </Stack>


              </Grid>
           </Grid>

          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 2,
              width: 201,
              height: 111,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          
        >

            
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >

          <Grid direction ='column' 
           >
               
               <Avatar src={jaycee} alt="jc" />
               <Grid >
              <Typography sx={{color:'#FFFFFF',fontSize:13}}>JC</Typography>
              <Typography sx={{color:'#676a6e', fontSize:13}}>30 Reviews</Typography>
              <Stack direction="row" spacing={-1.5}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>
          
        </Stack>
              </Grid>

           </Grid>

          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 2,
              width: 201,
              height: 111,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          
        >

            
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <Grid direction ='column' 
           >
               
               <Avatar src={thirdy} alt="thirdy" />
               <Typography sx={{color:'#FFFFFF',fontSize:13}}>Thirdy</Typography>
              <Typography sx={{color:'#676a6e', fontSize:13}}>30 Reviews</Typography>
              <Stack direction="row" spacing={-1.5}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>
          
        </Stack>
           </Grid>

          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 2,
              width: 201,
              height: 111,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
          
        >

            
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
            <Grid direction ='column' 
           >
               
               <Avatar src={ep} alt="ep" />
               <Typography sx={{color:'#FFFFFF',fontSize:13}}>Ep</Typography>
              <Typography sx={{color:'#676a6e', fontSize:13}}>30 Reviews</Typography>
              <Stack direction="row" spacing={-1.5}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="small" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="small" />
          </IconButton>
          
        </Stack>
           </Grid>

          </Paper>
        </Box>
      </Grid>

      <Grid
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",

        }}
      >
          <br>
          </br>
        <Typography sx={{ color: (theme) => theme.palette.common.white, 
        marginLeft: '56%' }}
        >
          Sort by:
        </Typography>
        
        <br>
          </br>

      </Grid>

          <Grid direction="row"
        sx={{
          display: "flex",
    
         
          marginLeft: '50%', marginBottom: '1%'
        }}>
            <Typography sx={{color: '#676a6e', fontSize: 14}}>Year & Section</Typography>
            <Typography sx={{color: '#676a6e', fontSize: 14, marginLeft: 13}}>Reviews</Typography>
            <Typography sx={{color: '#676a6e', fontSize: 14, marginLeft: 11.5}}>Rating</Typography>
            </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>1</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '2%', marginTop: '1.3%'}} src={rommel} alt="Rommel" />
               <Typography sx={{color: '#D1D4C9', marginTop: '2.1%', marginRight: '20.8%'}}>Rommel DeGuzman</Typography>
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>2</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '2%', marginTop: '1.3%'}} src={jaycee} alt="jc" />
               <Typography sx={{color: '#D1D4C9', marginTop: '2.1%', marginRight: '20.1%'}}>John Christian Lopez</Typography>
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>3</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '2%', marginTop: '1.3%'}} src={thirdy} alt="thirdy" />
               <Typography sx={{color: '#D1D4C9', marginTop: '2.1%', marginRight: '21.8%'}}>Ricardo Bulaong III</Typography>
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>4</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '2%', marginTop: '1.3%'}} src={ep} alt="ep" />
               <Typography sx={{color: '#D1D4C9', marginTop: '2.1%', marginRight: '28.1%'}}>Ep Estrada</Typography>
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>
      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>5</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '39%', marginTop: '1.3%'}} src={''} alt="Rommel" />
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>6</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '39%', marginTop: '1.3%'}} src={''} alt="Rommel" />
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>

      <Grid
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            "& > :not(style)": {
              m: 1,
              width: 906,
              height: 64,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
              
              justifyContent: "center",
              alignItems: "center",
            }}
            variant="outlined"
          >
           <Grid  direction ='row' sx={{
          display: "flex",
         

        }} 
           >
               
               <Typography sx={{color: '#676a6e', marginTop: '2.1%', marginLeft: '4%'}}>7</Typography>
               <Avatar sx={{marginLeft: '3.5%', marginRight: '39%', marginTop: '1.3%'}} src={''} alt="Rommel" />
               <Typography sx={{color: '#676a6e', marginTop: '2.1%'}}>BSIT4B</Typography>
               <Typography sx={{color: '#676a6e', marginLeft: '15.4%', marginTop: '2.1%', marginRight: '6%'}}>30</Typography>

               <Stack direction="row" spacing={-1.5} sx={{marginTop: '1%'}}>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="secondary" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>

          <IconButton color="blank" aria-label="assasasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          <IconButton color="blank" aria-label="assasas">
            <StarIcon fontSize="medium" />
          </IconButton>
          
        </Stack>

           </Grid>


          </Paper>
        </Box>
      </Grid>
      
        
          <Grid
      direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
          alignItems: "center",
        }}
      >
          <br>
          </br>
       
        <Stack direction="row" spacing={-.5}>
          <IconButton color="secondary" aria-label="twitter">
            <TwitterIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="facebook">
            <FacebookIcon fontSize="medium" />
          </IconButton>
          </Stack><br>
      </br>
      <Typography sx = {classes.footer}>Contact us:<span sx = {{color: "#26ce8d"}}> sasas</span></Typography> 
      <Typography sx = {classes.footer}>© 2021 Student Review. All Rights Reserved.</Typography>
      <Typography sx = {classes.footer1}>Terms of Services | Privacy Policy</Typography>
      <Stack direction="row" spacing={2}>
      <Button variant="contained" endIcon={<HelpOutlineIcon />}>
        Help
      </Button>
    </Stack>
      </Grid>
       
      
      
      
    </Box>
  );
}

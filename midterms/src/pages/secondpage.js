import React from "react";

import {
  Box,
  Avatar,
  Grid,
  Stack,
  Button,
  IconButton,
  Typography,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Paper from "@mui/material/Paper";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { ReactComponent as Rating } from "../assets/rating.svg";
import TextField from "@mui/material/TextField";

import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Navigation from "./navigation";
import avatar from "../assets/rommel.png";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";


import { Helmet } from "react-helmet";

const classes = {
  logo: {
    height: 42,
    color: (theme) => theme.palette.common.white,
  },
  bg: {
    backgroundColor: "#131414",
  },
  avatar: {},

  footer: {
    color: "#313233",
  },

  footer1: {
    color: "#26ce8d",
  },
  mainPaper: {
    backgroundColor: "#1e1f20",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  studPicture: {
    height: "146px",
    width: "146px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  nameSection: {
    color: "white",
    marginRight: "5px",
  },
  studLabel: {
    color: "white",
    fontSize: "12px",
    marginTop: "15px",

    fontWeight: "bold",
  },
  studLabel1: {
    color: "white",
    fontSize: "12px",
    marginTop: "15px",
    marginLeft: "30px",

    fontWeight: "bold",
  },
  info: {
    margin: "10px",
  },
  studInfo: {
    color: "white",
    fontSize: "12px",
    marginTop: "15px",
    marginRight: "15px",
  },
  grade: {
    margin: "5px",
    backgroundColor: "#26ce8d",
    padding: "5px 10px",
    borderRadius: "5px",
  },
  lowgrade: {
    margin: "5px",
    padding: "5px 10px",
    borderRadius: "5px",
    backgroundColor: "#e03e65",
  },
  rating: {
    color: "#161617",
    "&:hover": {
      color: "#26ce8d",
    },
  },
};

export default function SecondPage() {
  const [sort, setSort] = React.useState("");

  const handleChange = (event) => {
    setSort(event.target.value);
  };

  const [show, setShow] = React.useState(false);
  return (
    <Box sx={classes.bg}>
      <Helmet>
        <title>Student Review</title>
        <meta
          name="description"
          content="BULACAN STATE UNIVERSITY - STUDENT EVALUATION"
        />
      </Helmet>

      <Navigation />
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
              width: 926,
              height: 324,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper sx={classes.mainPaper} variant="outlined">
            <Grid
              container
              direction="row"
              justifyContent="space-evenly"
              alignItems="center"
            >
              <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="center"
              >
                <Box>
                  <Avatar
                    src={avatar}
                    alt="Student Picture"
                    variant="rounded"
                    sx={classes.studPicture}
                  />

                  <Stack direction="row" spacing={-4}>
                    <Button
                      color="primary"
                      aria-label="assasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="28px" />
                    </Button>

                    <Button
                      color="primary"
                      aria-label="assasasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="28px" />
                    </Button>
                    <Button
                      color="primary"
                      aria-label="assasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="28px" />
                    </Button>

                    <Button sx={classes.rating} aria-label="assasasas">
                      <Rating height="28px" />
                    </Button>
                    <Button sx={classes.rating} aria-label="assasas">
                      <Rating height="28px" />
                    </Button>
                  </Stack>
                </Box>

                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography sx={{ mr: 1, color: "white" }}>
                    3.0 Overall Rating{" "}
                  </Typography>
                  <Typography sx={{ color: "white" }}>2000 Reviews</Typography>
                </Grid>
              </Grid>
            </Grid>

            <Grid container>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography variant="h6" sx={classes.nameSection}>
                  De Guzman, Rommel M.{" "}
                </Typography>
                <Typography variant="h7" sx={classes.nameSection}>
                  BSIT 4B
                </Typography>
              </Grid>

              <Grid
                container
                display="flex"
                direction="row"
                alignItems="flex-start"
              >
                <Grid
                  items
                  xs={1}
                  sx={classes.studLabel}
                  container
                  direction="column"
                  alignItems="flex-start"
                >
                  <Typography variant="p" sx={classes.info}>
                    Gender:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Birthday:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Address:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Nickname:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Skills/Language:
                  </Typography>
                </Grid>
                <Grid
                  items
                  xs={5}
                  sx={classes.studInfo}
                  container
                  justifyContent="space-between"
                  direction="column"
                  alignItems="flex-end"
                >
                  <Typography variant="p" sx={classes.info}>
                    Male
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    08-28-2000
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Candaba, Pampanga
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Mels
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    React JS
                  </Typography>
                </Grid>
                <Grid
                  items
                  xs={2}
                  sx={classes.studLabel1}
                  container
                  direction="column"
                  alignItems="flex-start"
                >
                  <Typography variant="p" sx={classes.info}>
                    Teamwork:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Creativity:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Adaptability:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Leadership:
                  </Typography>
                  <Typography variant="p" sx={classes.info}>
                    Persuasion:
                  </Typography>
                </Grid>
                <Grid
                  items
                  xs={1}
                  sx={classes.studLabel1}
                  container
                  direction="column"
                  alignItems="flex-start"
                >
                  <Typography variant="p" sx={classes.grade}>
                    4.0
                  </Typography>
                  <Typography variant="p" sx={classes.grade}>
                    3.0
                  </Typography>
                  <Typography variant="p" sx={classes.lowgrade}>
                    1.0
                  </Typography>
                  <Typography variant="p" sx={classes.lowgrade}>
                    2.0
                  </Typography>
                  <Typography variant="p" sx={classes.grade}>
                    3.0
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      </Grid>

      <Grid
        direction="column"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <br></br>
        <Typography sx={{ color: (theme) => theme.palette.common.white }}>
          Add your rating
        </Typography>
        <Stack direction="row" spacing={-1.5}>
          <Button onClick={() => setShow(true)} sx={classes.rating}>
            <Rating />
          </Button>

          <Button onClick={() => setShow(true)} sx={classes.rating}>
            <Rating />
          </Button>
          <Button onClick={() => setShow(true)} sx={classes.rating}>
            <Rating />
          </Button>
          <Button onClick={() => setShow(true)} sx={classes.rating}>
            <Rating />
          </Button>
          <Button onClick={() => setShow(true)} sx={classes.rating}>
            <Rating />
          </Button>
        </Stack>
        <br></br>
        <div className="App">
          {show ? (
            <Box
              sx={{
                display: "flex",
                "& > :not(style)": {
                  m: 2,
                  width: 400,
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
                <Grid>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: 13,
                      marginLeft: "43%",
                      marginBottom: "5%",
                      marginTop: "10%",
                    }}
                  >
                    Rating
                  </Typography>
                  <Grid direction="row">
                   

                    <Stack direction="row" spacing={-1.5}>
                       <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        marginRight: "23.5%",
                        marginTop: "5%",
                      }}
                    >
                      Teamwork
                    </Typography>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                 
                    <Stack direction="row" spacing={-1.5}>
                       <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        marginRight: "25.3%",
                        marginTop: "5%",
                      }}
                    >
                      Creativity
                    </Typography>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  
                    <Stack direction="row" spacing={-1.5}>
                       <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        marginRight: "21.4%",
                        marginTop: "5%",
                      }}
                    >
                      Adaptability
                    </Typography>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  
                    <Stack direction="row" spacing={-1.5}>
                       <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        marginRight: "22%",
                        marginTop: "5%",
                      }}
                    >
                      Leadership
                    </Typography>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  
                    <Stack direction="row" spacing={-1.5}>
                       <Typography
                      sx={{
                        color: "#FFFFFF",
                        fontSize: 13,
                        marginRight: "20%",
                        marginTop: "5%",
                      }}
                    >
                      Persuassion
                    </Typography>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>

                      <IconButton color="blank" aria-label="assasasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                      <IconButton color="blank" aria-label="assasas">
                        <StarIcon fontSize="large" />
                      </IconButton>
                    </Stack>
                  </Grid>
                  <Typography
                    sx={{
                      color: "#FFFFFF",
                      fontSize: 13,
                      marginTop: "7%",
                      marginLeft: "29%",
                    }}
                  >
                    Share us your thoughts
                  </Typography>
                  <Grid sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                  <TextField
                    inputProps={{min: 0, style: {
                     backgroundColor: "#131414",
                     color: "#FFFFFF", 
                     height: 100,
                     width: 336,
                    marginTop: "4%",
                    borderRadius: 7,
                    borderColor: "#FFFFFF"}}} // the change is here
                    id="standard-multiline-static"
                    multiline
                    rows={4}
                    variant="standard"
                  />
                  
                    </Grid>
                    <Box sx={{justifyContent: "center", 
                      textAlign: "center"}}>
                      <Button sx={{backgroundColor: "#26ce8d", marginTop: "7%", marginBottom: "7%"}}>Submit</Button>
                    </Box>
                    
                </Grid>
              </Paper>
            </Box>
          ) : null}
          {}
        </div>
        <br></br>
      </Grid>
      <Box sx={{ minWidth: 200 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Typography sx={{ color: "white", ml: "50px", mr: "10px" }}>
            Sort by:
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>Date</MenuItem>
              <MenuItem value={2}>Rating</MenuItem>
              <MenuItem value={3}>Name</MenuItem>
            </Select>
          </FormControl>
          <Typography sx={{ color: "white", ml: "50px", mr: "10px" }}>
            Filter:{" "}
          </Typography>
          <FormControl sx={{ minWidth: 200 }}>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sort}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={1}>A-E</MenuItem>
              <MenuItem value={2}>F-U</MenuItem>
              <MenuItem value={3}>V-Z</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Box>
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
              width: 926,
              height: 124,
              borderRadius: 3,
              justifyContent: "center",
              alignItems: "center",
            },
          }}
        >
          <Paper
            sx={{
              backgroundColor: "#1e1f20",
            }}
            variant="outlined"
          >
            <Grid display="flex">
              <Grid>
                {" "}
                <Avatar sx={{ margin: "20px 15px 15px 20px" }} />
              </Grid>

              <Grid
                container
                direction="column"
                justifyContent="flex-start"
                alignItems="flex-start"
              >
                <Typography sx={{ color: "white", marginTop: "18px" }}>
                  johndoe@gmail.com
                </Typography>

                <Typography sx={{ color: "#adadad", fontSize: "10px" }}>
                  Posted 5 hours ago
                </Typography>
                <Grid>
                  <Stack direction="row" spacing={-5}>
                    <Button
                      color="primary"
                      aria-label="assasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="19px" />
                    </Button>

                    <Button
                      color="primary"
                      aria-label="assasasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="19px" />
                    </Button>
                    <Button
                      color="primary"
                      aria-label="assasas"
                      sx={{ color: "#26ce8d" }}
                    >
                      <Rating height="19px" />
                    </Button>

                    <Button sx={classes.rating} aria-label="assasasas">
                      <Rating height="19px" />
                    </Button>
                    <Button sx={classes.rating} aria-label="assasas">
                      <Rating height="19px" />
                    </Button>
                  </Stack>
                  <Typography sx={{ fontSize: "13px", color: "white" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </Typography>
                </Grid>
                <Grid></Grid>
              </Grid>
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
              width: 926,
              height: 124,
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
            <h1>Lorem Ipsum</h1>
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
              width: 926,
              height: 612,
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
            <h1>Put somewhing</h1>
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
              width: 926,
              height: 124,
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
            <h1>BUASHA</h1>
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
        <br></br>

        <Stack direction="row" spacing={-0.5}>
          <IconButton color="secondary" aria-label="twitter">
            <TwitterIcon fontSize="medium" />
          </IconButton>
          <IconButton color="secondary" aria-label="facebook">
            <FacebookIcon fontSize="medium" />
          </IconButton>
        </Stack>
        <br></br>
        <Typography sx={classes.footer}>
          Contact us:<span sx={{ color: "#26ce8d" }}> sasas</span>
        </Typography>
        <Typography sx={classes.footer}>
          © 2021 Student Review. All Rights Reserved.
        </Typography>
        <Typography sx={classes.footer1}>
          Terms of Services | Privacy Policy
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" endIcon={<HelpOutlineIcon />}>
            Help
          </Button>
        </Stack>
      </Grid>
    </Box>
  );
}

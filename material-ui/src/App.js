import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { ButtonGroup, FormControlLabel, Typography } from '@material-ui/core';
import DelIcon from "@material-ui/icons/Delete";
import Checkbox from '@material-ui/core/Checkbox';
import Textfield from '@material-ui/core/TextField';
import {makeStyles, ThemeProvider, createMuiTheme} from '@material-ui/core/styles';
//import {orange, green} from '@material-ui/core/colors'
import "fontsource-roboto";
import Typo from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
//import AppBar from '@material-ui/core/AppBar';
//import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/core/Menu';
//import ToolBar from '@material-ui/core/Toolbar';

//makestyle
const useStyle = makeStyles ({
  root: {
    background:'linear-grdient(45deg, #333, #999)',
    border:0,
    borderRadius: 15,
    color:'white',
    padding: '0 30px'
  }
})

//themeprovider: making your own theme
const theme = createMuiTheme ({
typography:{
  h3:{
    fontSize: 24,
    marginBottom:0,
  }
}
/*,
  palette: {
    primary:{
      main: orange[500],
    },
    secondary: {
      main: green[700],
    }
  }
  */
})

//styling your own button
function ButtonStyled() {
  const classes = useStyle();
  return <Button className={classes.root}>Text-Styled Button</Button>;
}

function App() {

  const [checked,setChecked] = React.useState(true);


  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <div className="App">
          <header className="App-header">
            /*<AppBar>
              <ToolBar>
                <IconButton>
                  <MenuIcon/>
                </IconButton>
                <Typography variant ="h6">
                 Shambhavi ki duniya
                </Typography>
                <Button variant = "container" color = "primary">
                  Login
                </Button>
              </ToolBar>
            </AppBar>*/
            <Typo variant="h3" component="div">
              Welcome to Shambhavi's world!
            </Typo>
            <Typo variant="h5">
              In today's episode we're learning Material-UI!
            </Typo>
            <Textfield variant="outlined" color="secondary" type="date" />
            <br></br>
            <Textfield
              variant="outlined"
              color="secondary"
              type="time"
              label="time"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  icon={<DelIcon />}
                  checkedIcon={<SaveIcon />}
                  onChange={(e) => setChecked(e.target.checked)}
                  color="primary"
                  inputProps={{
                    "aria-label": "secondary checkbox",
                  }}
                />
              }
              label="Testing"
            />

            <ButtonStyled />
            <Grid container spacing={4} justify="center">
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Paper style={{ height: 75, width: "100%" }} />
              </Grid>
            </Grid>
            <ButtonGroup variant="contained" size="large">
              <Button
                href="#"
                endIcon={<SaveIcon />}
                color="primary"
                style={{
                  fontSize: 24,
                }}
              >
                Save
              </Button>
              <Button
                href="#"
                endIcon={<DelIcon />}
                color="secondary"
                style={{
                  fontSize: 24,
                }}
              >
                Discard
              </Button>
            </ButtonGroup>
            <img src={logo} className="App-logo" alt="logo" />
          </header>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;

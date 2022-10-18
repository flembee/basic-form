import React from 'react';
import { useHistory } from "react-router-dom";

import { AppBar, Button, CssBaseline, Toolbar, Typography, Avatar } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import ViewListIcon from '@material-ui/icons/ViewList';

import authService from '../services/authService';


const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(1),
    },
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Login(props){
    const classes = useStyles();
    let history = useHistory();
    const [isLogined , setIsLogined] = React.useState(false);
    const { from } = props.location.state || { from: { pathname: '/' } }
    
    React.useEffect(()=>{
        setIsLogined(authService.isAuthenticated())
    }, [])

    const loginAsGuest = ()=>{
        authService.loginAsGuest()
        history.push(from.pathname);
    }
    
    const logout = ()=>{
        authService.logout();
        setIsLogined(false);
      }


    return(
      <div>
        <CssBaseline />
          <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
            <AppBar position="relative" style={{backgroundColor: 'teal'}}>
              <Toolbar>
                <ViewListIcon className={classes.icon} onClick={()=>{history.push('/')}} />
                  <Typography variant="h6" color="inherit" noWrap className={classes.title}>
                    Basic Forms
                  </Typography>
              </Toolbar>
            </AppBar>
          </div><br></br>
          <main>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <br></br>
            <br></br>
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
              <div>
                {  isLogined ? 
                  (
                    <div>
                      <p>Already logged in. Want to logout?</p>
                      <button onClick={logout}>Logout </button>
                    </div>
                  ) : 
                  (
                    <Button
                      onClick={loginAsGuest}
                      variant="contained"
                      style={{textTransform: "none"}}
                      startIcon={<Avatar  src={"https://static.thenounproject.com/png/3244607-200.png"}/>  } >
                      Login as Guest(Anonymous)
                    </Button>
                  )
                }
              </div>
            </div>  
          </main>
        </div>
      )
}

export default Login;
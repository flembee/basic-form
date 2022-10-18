import React from 'react';

import { useHistory } from "react-router-dom";

import { AppBar, Button, Card, CardContent, CardMedia, CssBaseline,
         Grid, Toolbar, Typography, Container, Link, Paper, Hidden, CardActionArea } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ViewListIcon from '@material-ui/icons/ViewList';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      <Link color="inherit" href="https://www.flembee.com">
        Flembee
      </Link>
      { ' © '}
      <Link color="inherit" href="https://github.com/flembee">
        GitHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(1),
  },
  card: {
    display: 'flex',
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  
  footer: {
    backgroundColor: '#DAE0E2',
    padding: theme.spacing(2),
    position: 'relative',
    bottom: 0,
    right: 0,
    left: 0
  },
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://media.istockphoto.com/photos/digital-screen-background-color-screen-monitor-or-tv-with-glitch-and-picture-id1371967715?b=1&k=20&m=1371967715&s=170667a&w=0&h=sMdLrOdRVUGnqZHqXNmyv1-2IIBk2dKtj30qWQ-4cwE=)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttons : {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  buttongg: {
    backgroundColor: 'teal'
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

export function LandingPage () {
  const classes = useStyles();
  let history = useHistory();

  function loginClick(){
    history.push('/login')
  }

  return (
    <div>
      <CssBaseline />
      <div style={{display: 'flex', flexGrow: 1, textAlign: 'start'}}>
        <AppBar position="relative" style={{backgroundColor: 'teal'}}>
          <Toolbar>
            <ViewListIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap className={classes.title}>
              Basic Forms
            </Typography>
            <Button color="inherit" onClick={loginClick}>Login</Button>
          
          </Toolbar>
        </AppBar>
      </div>

      <main style={{textAlign: 'start'}}>
        <div>
          <Container>
            <br></br>
            <br></br>
            <br></br>
          <Paper className={classes.mainFeaturedPost} >
            {<img style={{ display: 'none' }} src="https://media.istockphoto.com/photos/digital-screen-background-color-screen-monitor-or-tv-with-glitch-and-picture-id1371967715?b=1&k=20&m=1371967715&s=170667a&w=0&h=sMdLrOdRVUGnqZHqXNmyv1-2IIBk2dKtj30qWQ-4cwE=" alt="gg" />}
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>
                <div className={classes.mainFeaturedPostContent}>
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Basic Forms
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    Basic open source form with some additional features. Developed with React JS using Material UI for the front-end, NodeJS and MongoDB for the back-end. 
                    The UI is inspired by Google forms.
                  </Typography>
                  <div className={classes.buttons}>
                    <Button variant="contained" color="primary" className={classes.buttongg} onClick={loginClick}>
                      Signup Now
                    </Button>
                    <Button variant="contained" color="primary" className={classes.buttongg} onClick={loginClick}>
                      Login
                    </Button>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Paper>
           <br></br>
           <br></br>
           <br></br>
           

           <div>
           <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                        Forms with style
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                          Style
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Create your own and unique form, choose your favorite question format. And you can store images for future.
                        </Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://wallpaper.dog/large/20506218.jpg" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
              <Grid item xs={12} md={6}>
                <CardActionArea component="a" href="/">
                  <Card className={classes.card}>
                    <div className={classes.cardDetails}>
                      <CardContent>
                        <Typography component="h2" variant="h5">
                         
                          Take a survey
                        </Typography>
                        <Typography variant="subtitle1"  style={{color: 'teal'}}>
                        Submit
                        </Typography>
                        <Typography variant="subtitle1" paragraph>
                        Responses to your surveys are neatly and automatically collected in Forms, with real time response and you can share a link.</Typography>
                       
                      </CardContent>
                    </div>
                    <Hidden xsDown>
                      <CardMedia className={classes.cardMedia} image="https://wallpapercave.com/wp/wp3001176.jpg" title="" />
                    </Hidden>
                  </Card>
                </CardActionArea>
              </Grid>
            </Grid>
           </div>
          </Container>

          <br></br>
          <br></br>
          <br></br>
          <br></br>
        </div>
      </main>
      
      
      <footer className={classes.footer} style={{}}>
        <Typography variant="h6" align="center" gutterBottom>
          Basic Forms <small>(Basic open source form with some additional features)</small>
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         No Copyright issue. This project is <Link color="inherit" href="https://github.com/flembee/basic-forms">open source</Link>{'. '}
         Feel free to use the form components for your project.
        </Typography>
        <Copyright />
      </footer>
    </div>
  );
}
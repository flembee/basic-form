import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

import { Grid, Paper, Typography, Tabs, Tab, Box, AppBar, Toolbar,
         Button, Dialog, DialogActions, DialogContent, DialogContentText,
         DialogTitle, Snackbar, IconButton} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SendIcon from '@material-ui/icons/Send';
import FilterNoneIcon from '@material-ui/icons/FilterNone';
import CloseIcon from '@material-ui/icons/Close';
import ViewListIcon from '@material-ui/icons/ViewList';

import { QuestionsTab, ResponseTab } from '../';

import { getCurrentUser, getForm } from '../../services';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbar: {
      minHeight: 128,
      alignItems: 'flex-start',
      paddingTop: theme.spacing(1),
    },
    title: {
      flexGrow: 1,
      alignSelf: 'flex-end',
      justifySelf: 'center'
    },
    paper: {
      padding: theme.spacing(2),
      color: theme.palette.text.secondary,
      display: 'flex',
      alignContent: 'space-between',
      alignItems: 'center'
  }
    
  }));

export function EditForm (props) {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = React.useState({})
  const [formID, setFormID] = React.useState("");

  const [formDeatils, setFormDetails] = React.useState({});
  const [openOfAlert, setOpenOfAlert] = React.useState(false);

  React.useEffect(()=>{
    setUser(getCurrentUser);  
}, [])

  const clipToClipboard = ()=>{
    navigator.clipboard.writeText(window.location.origin + "/s/" + formDeatils._id)
    handleClickOfAlert();
    handleClose();
  }

  const handleClickOfAlert = () => {
    setOpenOfAlert(true);
  };

  const handleCloseOfAlert = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenOfAlert(false);
  };


  function sendForm(){
    handleClickOpen(); 
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    React.useEffect(() => {
        var formId = props.match.params.formId
        if(formId !== undefined){
          setFormID(formId)
          getForm(formId)
          .then((data) => {    
              setFormDetails(data)       
             },
             error => {
             const resMessage =
                 (error.response &&
                 error.response.data &&
                 error.response.data.message) ||
                 error.message ||
                 error.toString();
                 console.log(resMessage);
             }
         );
        }
    },[props.match.params.formId]);

    return (
        <div>
          { formDeatils.createdBy === user.id ? (
            <div>
            <div className={classes.root}>
                <AppBar position="static" style={{backgroundColor: 'white'}} elevation={2}>
                    <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        aria-label="Rohit Saini's form"
                        style={{color: '#140078'}}
                        
                    >
                        <ViewListIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap style={{marginTop: '8.5px', color:'black'}}>
                        {formDeatils.name}
                    </Typography>                    

                    <Tabs
                    className={classes.title}
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                >
                    <Tab label="Questions" />
                    <Tab label="Responses" />
                </Tabs>
                    <IconButton aria-label="search" onClick={sendForm}>
                        <SendIcon />
                    </IconButton>
                    <IconButton aria-label="display more actions" edge="end">
                        <AccountCircleIcon />
                    </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <div>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
              
            >
              <DialogTitle id="alert-dialog-title">{"Copy and share link."}</DialogTitle>
              <DialogContent>
              <Paper className={classes.paper}>
                  <Grid container alignContent="space-between" alignItems="center">
                      <Grid item>
                          <Typography variant="body1">{window.location.origin + "/s/" + formDeatils._id}</Typography>
                          
                      </Grid>
                      <Grid item>
                          <IconButton className={classes.button} aria-label="Add" size="medium" onClick={clipToClipboard} ><FilterNoneIcon /></IconButton>
                      </Grid>
                  </Grid>
              </Paper>
                  
                <DialogContentText id="alert-dialog-description">
                  
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                   Cancel
                </Button>
                
              </DialogActions>
            </Dialog>
            <Snackbar
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              open={openOfAlert}
              autoHideDuration={3000}
              onClose={handleCloseOfAlert}
              message="Copied to clipboard"
              action={
                <React.Fragment>
                 
                  <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseOfAlert}>
                    <CloseIcon fontSize="small" />
                  </IconButton>
                </React.Fragment>
              }
            />
            </div>

        <div>
            <TabPanel value={value} index={0}>
                <QuestionsTab formData={formDeatils} />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <ResponseTab formData={formDeatils} formId={formID} />
            </TabPanel>
        </div>
        </div>
          ) : (
            <p>you're not the owner of the form</p>
          )}
        </div>
    );
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box>
            <div>{children}</div>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
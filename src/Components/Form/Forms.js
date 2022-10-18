import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Grid, Container, CssBaseline, CircularProgress } from '@material-ui/core';

import auth from '../../services/authService';
import formService from '../../services/formService';
import OneForm from './OneForm';

const useStyles = makeStyles((theme)=>
    ({
        root: {
          maxWidth: 345,
        },
        media: {
          height: 140,
        },
        cardGrid: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
          },
      })
);


function Forms(props) {
    const classes = useStyles();

    const [user, setUser] = React.useState({})
    const [forms, setForms] = React.useState([])
    const [loadingForms, setLoadingForms] = React.useState(true);

    React.useEffect(()=>{
        setUser(auth.getCurrentUser);  
    }, [])
    
    React.useEffect(()=>{
        if(props.userId === undefined){
        } else{
            formService.getForms(props.userId)
            .then((forms2) => { 
                setForms(forms2);
                setLoadingForms(false);
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
        
    }, [props.userId])

    return (
        <div>
            <div>
                <CssBaseline />
                {loadingForms ? (<CircularProgress />):""}
                <Container className={classes.cardGrid} maxWidth="lg">
                    <Grid container spacing={6}>
                    {forms.map((form, i)=>(
                        <OneForm formData={form} key={i}  />
                    ))}

                    </Grid>
                </Container>
            </div>
        </div>
    );
}

export default Forms;

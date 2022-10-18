import axios from 'axios';
const API_URL = "http://localhost:3050/api/form/";

const getForms = (userId) => (
    axios
        .get(API_URL + "getuserforms/" +userId)
        .then(response =>{
            return response.data;
        })
  );
  
  const createForm = (data) => (
    axios
        .post(API_URL + "create", data)
        .then(response =>{
            return response.data;
        })
  );
  
  const getForm = (formId) => (
    axios
        .get(API_URL + "form/"+formId)
        .then(response =>{
            return response.data;   
        })
  );
  
  const autoSave = (data) => (
    axios
    .put(API_URL + "/editform/", data)
    .then(response =>{
          return response.data;   
      })
  );
  
  const submitResponse = (data) => (
    axios
        .post(API_URL + "addresponse", data)
        .then(response =>{
            return response.data;
        })
  )
  
  const getResponse = (formId) => (
    axios
        .get(API_URL + "getresponse/" + formId)
        .then(response =>{
            return response.data;
        })
  )
    
  export {
    getForms,
    createForm,
    getForm,
    autoSave,
    submitResponse,
    getResponse,
  };

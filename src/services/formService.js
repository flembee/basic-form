import axios from 'axios';
const API_URL = "http://localhost:3050/api/form/";


export default {
    getForms(userId){
        return axios
        .get(API_URL + "getuserforms/" +userId)
        .then(response =>{
            return response.data;
        })
    },

    createForm(data){
        return axios
        .post(API_URL + "create", data)
        .then(response =>{
            return response.data;
        })
    },

    getForm(formId){
        return axios
        .get(API_URL + "form/"+formId)
        .then(response =>{
            return response.data;   
        })
    },

    autoSave(data){
        return axios
        .put(API_URL + "/editform/", data)
        .then(response =>{
              return response.data;   
          })
    },

    submitResponse(data){
        return axios
        .post(API_URL + "addresponse", data)
        .then(response =>{
            return response.data;
        })
    },

    getResponse(formId){
        return axios
        .get(API_URL + "getresponse/" + formId)
        .then(response =>{
            return response.data;
        })
        
    }

  };


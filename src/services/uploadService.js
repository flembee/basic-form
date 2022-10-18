const axios = require("axios");

export default {
    uploadImage(data){
        return axios
        .post("http://localhost:3050/", data, {
        }).then(res => {
            return res.data
        })
    }
}
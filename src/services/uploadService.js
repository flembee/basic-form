import axios from 'axios';

const uploadImage = (data) => (
    axios
        .post("http://localhost:3050/", data, {
        }).then(res => {
            return res.data
        })
  );
  
  export {
    uploadImage,
  };

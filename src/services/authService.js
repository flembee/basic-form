
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';
const API_URL = "http://localhost:5000/api/user/";

export default   {

    isAuthenticated() {
      const token = localStorage.getItem('userTicket')
        if (token) {
          return true
        } else {
          return false
        }
    },

    getGuestUser(){
        return {name: "Antonio Nardi", userId: "634de9c7fb0e39110f96f4fe", email: "hol@gmail.com"}
    },

    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    },

    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    },

    loginAsGuest(){
      var userData = {
        name: "Antonio Nardi", 
        id: "634de9c7fb0e39110f96f4fe", 
        email: "hol@gmail.com"
      }

      const accessToken = jwt.sign(userData, "thisisaguesttokenwithsomeshittystring8", {expiresIn: '24h'});
      localStorage.setItem("userTicket", JSON.stringify(accessToken));   
      return accessToken;   

    },

    logout() {
      localStorage.removeItem("userTicket");
    },

    getCurrentUser() {
       return jwtDecode(localStorage.getItem('userTicket'));
     },
  };
import jwtDecode from 'jwt-decode';
import jwt from 'jsonwebtoken';

const isAuthenticated = () => {
  const token = localStorage.getItem('userTicket')
    if (token) {
      return true
    } else {
      return false
    }
}

const getGuestUser = () => ({
  name: "Antonio Nardi", 
  userId: "634de9c7fb0e39110f96f4fe", 
  email: "hol@gmail.com"
});

const authenticate = (cb) => {
  isAuthenticated = true;
  setTimeout(cb, 100);
}

const signout = (cb) => {
  isAuthenticated = false;
  setTimeout(cb, 100);
}

const loginAsGuest = () => {
  var userData = {
    name: "Antonio Nardi", 
    id: "634de9c7fb0e39110f96f4fe", 
    email: "hol@gmail.com"
  }

  const accessToken = jwt.sign(userData, "thisisaguesttokenwithsomeshittystring8", {expiresIn: '24h'});
  localStorage.setItem("userTicket", JSON.stringify(accessToken));   
  return accessToken; 
}

const logout = () => {
  localStorage.removeItem("userTicket");
}

const getCurrentUser = () => (
  jwtDecode(localStorage.getItem('userTicket'))
)

export {
  isAuthenticated,
  getGuestUser,
  authenticate,
  signout,
  loginAsGuest,
  logout,
  getCurrentUser,
};
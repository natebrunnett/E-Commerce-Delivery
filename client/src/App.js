import './App.css';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login"
import Admin from "./components/Admin"
import Navbar from "./components/Navbar.js"
import Products from "./components/Products.js"
import Register from "./components/Register"
import Cart from "./components/Cart"
import * as jose from "jose";
import bulgogi from "./media/bulgogi.png"
import injeolmi from "./media/Injeolmi.png"
import sundubu from "./media/sundubu_jjigae.png"
//no css, just pure react




function App() {

const [isLoggedIn, setIsLoggedIn] = useState(false);
const [user, setUser] = useState(null)
const [token, setToken] = useState(JSON.parse(localStorage.getItem("token")));
const [cart, setCart] = useState([]);

useEffect(() => {
  const verify_token = async () => {
    try {
      if(!token){
        setIsLoggedIn(false)
        console.log("no token")
        console.log(token)
      } else {
        console.log("token found")
        axios.defaults.headers.common["Authorization"] = token;
        const response = await axios.post('http://localhost:3030/Login/verifyToken');
        console.log(response);
        return response.data.ok ? login(token) : logout();
      }
    }catch(error){
      console.log(error)
    }
  }
  verify_token();
}, [token])

let UserInfo = () => {
  return (
    <>
      {
        isLoggedIn === true && <> 
        <div className="UserInfo">
        <p><b>{user}</b></p>
        <button onClick={logout}>logout</button>
        </div> 
        </>
      }
    </>
  );
}

let checkToken = () => {
  console.log(token)
}

let logout = () => {
  localStorage.removeItem("token");
  setUser(null);
  setIsLoggedIn(false);
  alert("You have logged out");
}

let login = (token) => {
  let decodedToken = jose.decodeJwt(token);
  setUser(decodedToken.username);
  setIsLoggedIn(true);
  localStorage.setItem("token", JSON.stringify(token));
  alert('Welcome back!')
}


  let thisProducts = [
  { 
  image: [sundubu],
  name: "Sundubu Jjigae Tofu Stew",
  description: "Spicey soup with tofu, mushrooms, clams and vegetables",
  price: 1599, 
  quantity: 1
  },
  { 
  image: [injeolmi],
  name: "Injeolmi",
  description: "Brown sugar rice cakes. Dessert dish or appetizer! 6 pieces.",
  price: 799,
  quantity: 1
  },
  {
  image: [bulgogi],
  name: "Bulgogi Beef Dish",
  description: "Rib-eye beef 600 grams",
  price: 1699,
  quantity: 1
  }
  ];


let addToCart = (idx) =>
{
  let newItem = {}
  newItem = thisProducts[parseInt(idx.idx)];
  console.log(newItem);
  setCart([...cart, newItem])
  console.log(cart);
  //onclick
  //cart will be a state of objects
  //we can add the thisProduct at the right idx
}


  return (
   <Router>
      <UserInfo />
      <Navbar isLoggedIn={isLoggedIn}/>
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/Login" element={<Login login={login}/>} />
        <Route path="/Admin" element={<Admin />} />
        <Route path="/Categories" element={<Products addToCart={addToCart} thisProducts={thisProducts}/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Cart" element={<Cart cart={cart}/>} />
      </Routes>
    </Router>
  );
}

export default App;

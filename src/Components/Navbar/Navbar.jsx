import React, { useState } from "react";
import '../Navbar/Navbar.css'
import { Link , useNavigate } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { LOCAL_STORAGE_LOGGED_USRS_KEY } from "../../Utils/UsersList";
import { useSelector } from "react-redux";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const { isLoggedIn, user, setUser } = props;
  let navigate = useNavigate();
  const items = useSelector((state)=> state.cart.CartSlice)  
  // console.log(items)

  function LogOutUser() {
    setUser({});
    localStorage.setItem(LOCAL_STORAGE_LOGGED_USRS_KEY, JSON.stringify({}));
    navigate("/");
  }
  return (
    <div className="Navbar">
      <Link  to="/">
        <h2 className="muscle">
        <HiOutlineShoppingBag/>
        <u>Shopify</u>        
        </h2>
      </Link>
      <div className={`nav-items ${isOpen && "open"}`}>
        <Link to="/" onClick={() => setIsOpen(!isOpen)}>Home</Link>
        <Link to='/AddToCart' onClick={() => setIsOpen(!isOpen)}>Cart{' '}<b>{items.length}</b></Link>
        <Link to='/Contact_Us' onClick={() => setIsOpen(!isOpen)}><span>Contact</span> Us</Link>
        <Link to="/SignUp" onClick={() => setIsOpen(!isOpen)}>{isLoggedIn ? "Hello" : "Sign Up"}</Link>
          <Link to="/LogIn" onClick={() => setIsOpen(!isOpen)}>{isLoggedIn ? user.userName : ""}{isLoggedIn ? "" : "Login"}</Link>
          <Link onClick={LogOutUser}>{isLoggedIn ? "Logout" : ""}</Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
        >
        <div className="bar"></div>
      </div>
      
    </div>
  );
};

export default Navbar;
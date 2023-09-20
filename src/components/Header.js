// Named import using Curly Braces
import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
  const [btnName, setBtnName] = useState("Login");

// if no dependency array => useeffect is called on every render
//  if dependency array is empty = [] => useEffect is called on every initial render(just once)
//  if dependency array is  = [btnName] => useEffect is called on every time btnName is changed
  useEffect(() => {
    console.log("UseEffect Called.")
  },[])

  console.log("render header")
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} />
      <div className="nav-items">
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/grocery'>Grocery</Link></li>
          <li>Add Card</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnName === "Login"
                  ? setBtnName("Logout")
                  : setBtnName("Login");
              }}
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

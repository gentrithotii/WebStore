import { Link } from "react-router-dom";
import React, { useState } from "react";
import { render } from "react-dom";
import validator from "validator";

function Main() {
  const [] = useState("");
  const [message, setMessage] = useState("");

  const validateEmail = (e:any) => {
    var email = e.target.value;
    
    if (validator.isEmail(email)) {
      setMessage("");
    } else {
      setMessage("Please, enter valid name!");
    }
  };

  const validateName = (e:any) => {
      var name = e.target.value;

      if (validator.isAlpha(name)) {
        setMessage("");
      } else {
        setMessage("Please, enter valid name!");
      }
  };

  const validatePhone = (e:any) => {
    var phone = e.target.value;

    if (validator.isMobilePhone(phone)) {
      setMessage("");
    } else {
      setMessage("Please, enter valid telephone number!");
    }
};

const validateAddress = (e:any) => {
  var address = e.target.value;

  if (validator.isAlphanumeric(address)) {
    setMessage("");
  } else {
    setMessage("Please, enter valid telephone number!");
  }
};


  return (
    <>
      <div className="checkout-container">
        <div className="div-container">
        <form className="form">
        <label>First Name</label>
          <input  onChange={(e) => validateName(e)} required name="FirstName" type="text" placeholder="First Name"/>
          <span style={{ fontWeight: "bold", color: "red" }}> {message} </span>
          <label >Last Name</label>
          <input  onChange={(e) => validateName(e)} required name="LastName" type="text" placeholder="Last Name" />
          <span style={{ fontWeight: "bold", color: "red" }}> {message} </span>
          <label >Email</label>
          <input onChange={(e) => validateEmail(e)} required name="Email" type="text" placeholder="Email" />
          <span style={{ fontWeight: "bold", color: "red" }}> {message} </span>
          <label >Address</label>
          <input onChange={(e) => validateAddress(e)} required name="Address" type="text" placeholder="Address" />
          <span style={{ fontWeight: "bold", color: "red" }}> {message} </span>
          <label >Phone</label>
          <input  onChange={(e) => validatePhone(e)} required name="Phone" type="text" placeholder="Phone" />
          <span style={{ fontWeight: "bold", color: "red" }}> {message} </span>

          <br />
          <Link to="/Confirmation"><button type="submit" value="Submit">Submit</button></Link>
          <Link to="/Cart"><button type="button" value="Cancel">Cancel</button></Link>
        </form>
        </div>
      </div>
    </>
  );
}

export default Main;

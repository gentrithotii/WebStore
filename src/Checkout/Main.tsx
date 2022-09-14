import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { render } from "react-dom";
import validator from "validator";

function Main() {
  const [messageFName, setMessageFName] = useState("Please, enter valid name!");
  const [messageLName, setMessageLName] = useState("Please, enter valid name!");
  const [messageEmail, setMessageEmail] = useState(
    "please enter a valid email"
  );
  const [messageAddress, setMessageAddress] = useState(
    "Please, enter valid telephone number"
  );
  const [messagePhone, setMessagePhone] = useState(
    "Please, enter valid Adress"
  );
  const [disabled, setDisabled] = useState(true);

  const handleDisabled = () => {
    if (
      messageFName === "" &&
      messageLName === "" &&
      messageEmail === "" &&
      messageAddress === "" &&
      messagePhone === ""
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };

  const validateEmail = (e: any) => {
    var email = e.target.value;

    console.log("Email is required");
    if (email === "" && messageEmail === "") {
      setDisabled(false);
    } else {
      if (validator.isEmail(email)) {
        setMessageEmail("");
      } else {
        setMessageEmail("please enter a valid email");
      }
    }
  };

  const validateFName = (e: any) => {
    var name = e.target.value;
    console.log("First name is required");
    if (!validator.isEmpty(name)) {
      setMessageFName("");
    } else {
      setMessageFName("Please, enter valid name");
    }
  };

  const validateLName = (e: any) => {
    var name = e.target.value;

    if (!validator.isEmpty(name)) {
      setMessageLName("");
    } else {
      setMessageLName("Please, enter valid name");
    }
  };

  const validatePhone = (e: any) => {
    var phone = e.target.value;
    if (validator.isMobilePhone(phone)) {
      setMessagePhone("");
    } else {
      setMessagePhone("Please, enter valid telephone number");
    }
  };

  const validateAddress = (e: any) => {
    var address = e.target.value;
    if (!validator.isEmpty(address)) {
      setMessageAddress("");
    } else {
      setMessageAddress("Please, enter valid Adress");
    }
  };

  useEffect(() => {
    handleDisabled();
  });

  return (
    <>
      <div className="checkout-container">
        <div className="div-container">
          <form className="form">
            <label>First Name</label>
            <input
              onChange={(e) => validateFName(e)}
              required
              name="FirstName"
              type="text"
              placeholder="First Name"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {messageFName}{" "}
            </span>
            <label>Last Name</label>
            <input
              onChange={(e) => validateLName(e)}
              required
              name="LastName"
              type="text"
              placeholder="Last Name"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {messageLName}{" "}
            </span>
            <label>Email</label>
            <input
              onChange={(e) => validateEmail(e)}
              required
              name="Email"
              type="text"
              placeholder="Email"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {messageEmail}{" "}
            </span>
            <label>Address</label>
            <input
              onChange={(e) => validateAddress(e)}
              required
              name="Address"
              type="text"
              placeholder="Address"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {messageAddress}{" "}
            </span>
            <label>Phone</label>
            <input
              onChange={(e) => validatePhone(e)}
              required
              name="Phone"
              type="text"
              placeholder="Phone"
            />
            <span style={{ fontWeight: "bold", color: "red" }}>
              {" "}
              {messagePhone}{" "}
            </span>

            <br />
            <Link to="/Confirmation">
              <button disabled={!disabled} value="Submit">
                Order
              </button>
            </Link>
            <Link to="/Cart">
              <button type="button" value="Cancel">
                Cancel
              </button>
            </Link>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;

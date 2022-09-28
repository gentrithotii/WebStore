import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import validator from "validator";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

function Main() {
  const [messageFName, setMessageFName] = useState(" ");
  const [messageLName, setMessageLName] = useState(" ");
  const [messageEmail, setMessageEmail] = useState(" ");
  const [messageAddress, setMessageAddress] = useState(" ");
  const [messagePhone, setMessagePhone] = useState(" ");
  const [disabled, setDisabled] = useState(true);

  const { cartItems } = useShoppingCart();

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
    if (validator.isAlpha(name)) {
      setMessageFName("");
    } else {
      setMessageFName("Please, enter valid name");
    }
  };
  const validateLName = (e: any) => {
    var name = e.target.value;

    if (validator.isAlpha(name)) {
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
    if (validator.isAscii(address)) {
      setMessageAddress("");
    } else {
      setMessageAddress("Please, enter valid Adress");
    }
  };

  useEffect(() => {
    handleDisabled();
  });

  /* return (
    <>
      <div className="checkout-container">
        <div className="div-container">
          <form className="form">
            <label>First Name</label>
            <input
              
              required
              name="FirstName"
              type="text"
              placeholder="First Name"
            />
          
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
            <NavLink to="/Confirmation">
              <button
                onClick={() => cartItems.splice(0, cartItems.length)}
                disabled={!disabled}
                value="Submit"
              >
                Order
              </button>
            </NavLink>
            <NavLink to="/Cart">
              <button type="button" value="Cancel">
                Cancel
              </button>
            </NavLink>
          </form>
        </div>
      </div>
    </>
  ); */
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => validateFName(e)}
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
          />
          <span style={{ fontWeight: "bold", color: "red" }}>
            {" "}
            {messageFName}{" "}
          </span>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => validateLName(e)}
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
          <span style={{ fontWeight: "bold", color: "red" }}>
            {" "}
            {messageLName}{" "}
          </span>
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e) => validateAddress(e)}
            required
            id="address"
            name="address"
            label="Address line"
            fullWidth
            autoComplete="address"
            variant="standard"
          />
          <span style={{ fontWeight: "bold", color: "red" }}>
            {" "}
            {messageAddress}{" "}
          </span>
        </Grid>

        <Grid item xs={12}>
          <TextField
            onChange={(e) => validateEmail(e)}
            id="email"
            name="email"
            label="Email"
            fullWidth
            autoComplete="email"
            variant="standard"
          />
          <span style={{ fontWeight: "bold", color: "red" }}>
            {" "}
            {messageEmail}{" "}
          </span>
        </Grid>

        <Grid item xs={12} sm={6}>
          <TextField
            onChange={(e) => validatePhone(e)}
            required
            id="phone"
            name="phone"
            label="phone"
            fullWidth
            autoComplete="phone"
            variant="standard"
          />
          <span style={{ fontWeight: "bold", color: "red" }}>
            {" "}
            {messagePhone}{" "}
          </span>
        </Grid>
      </Grid>
      <NavLink to="/Confirmation">
        <button
          onClick={() => cartItems.splice(0, cartItems.length)}
          disabled={!disabled}
          value="Submit"
        >
          Order
        </button>
      </NavLink>
      <NavLink to="/Cart">
        <button type="button" value="Cancel">
          Cancel
        </button>
      </NavLink>
    </React.Fragment>
  );
}

export default Main;

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import validator from "validator";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

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
    if (RegExp("[a-zA-Z-]").test(name)) {
      setMessageFName("");
    } else {
      setMessageFName("Please, enter valid name");
    }
  };
  const validateLName = (e: any) => {
    var name = e.target.value;

    if (RegExp("[a-zA-Z]").test(name)) {
      setMessageLName("");
    } else {
      setMessageLName("Please, enter valid name");
    }
  };

  const validatePhone = (e: any) => {
    var phone = e.target.value;
    if (RegExp("").test(phone)) {
      setMessagePhone("");
    } else {
      setMessagePhone("Please, enter valid telephone number");
    }
  };

  const validateAddress = (e: any) => {
    var address = e.target.value;
    if (RegExp("[a-zA-Z]").test(address)) {
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
  );
}

export default Main;


export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Shipping address
      </Typography>
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
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="saveAddress" value="yes" />}
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
Footer
© 2022 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
material-ui/AddressForm.tsx at v5.10.7 · mui/material-ui

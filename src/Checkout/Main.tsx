import { useState, useEffect } from "react";
import validator from "validator";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { NavLink } from "react-router-dom";
import * as React from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { Box } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { height } from "@mui/system";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

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

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(1, "Cannot be empty")
      .label("First Name")
      .required("Required"),
    lastName: Yup.string()
      .min(1, "Cannot be empty")
      .label("Last Name")
      .required("Required"),
    email: Yup.string()
      .email("Invalid email address")
      .label("Email")
      .required("Required"),
    address: Yup.string()
      .min(1, "Cannot be empty")
      .label("Address")
      .required("Required"),
    phone: Yup.string()
      .min(1, "Cannot be empty")
      .label("Phone")
      .required("Required"),
  });

  return (
    <React.Fragment>
      <Box
        sx={{
          alignItems: "center",
          height: "100vh",
          background: "white",
          display: { xs: "block", md: "block" },
        }}
      >
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
              helperText={messageFName}
              error={Boolean(messageFName)}
            />
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
      </Box>
    </React.Fragment>
  );
}

export default Main;

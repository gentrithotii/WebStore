import { TextField } from "@mui/material";
import { useState } from "react";

function Main() {
  const [] = useState("");

  return (
    <>
      {/*  <h1>Checkout</h1>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="First Name"
          variant="filled"
        />
      </div>
      <div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Last Name"
          variant="filled"
        />
        <div>
          <TextField
            required
            id="filled-required"
            label="Required"
            defaultValue="Email"
            variant="filled"
          />
        </div>
        <TextField
          required
          id="filled-required"
          label="Required"
          defaultValue="Address"
          variant="filled"
        />
      </div>
      <div>
        <button>Submit</button>
        <button>Cancel</button>
      </div> */}

      <div className="wrapper">
        <br></br>
        <br></br>
        <br></br>
        <form>
          <input
            required
            name="FirstName"
            type="text"
            placeholder="First Name"
          />
          <input required name="LastName" type="text" placeholder="Last Name" />
          <input required name="Email" type="text" placeholder="Email" />
          <input required name="Address" type="text" placeholder="Address" />
          <input required name="Phone" type="text" placeholder="Phone" />

          <br />
          <button type="submit" value="Submit">
            Submit
          </button>
          <button type="button" value="Cancel">
            Cancel
          </button>
        </form>
      </div>
    </>
  );
}

export default Main;

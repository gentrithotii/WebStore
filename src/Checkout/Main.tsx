import { TextField } from "@mui/material";
import { useState } from "react";

function Main() {
  const [] = useState("");

  return (
    <>
      {/* <h1>Checkout</h1> */}
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
        
        </div>
    </>
  );
}

export default Main;

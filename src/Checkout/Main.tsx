import { TextField } from "@mui/material";
import { useState } from "react";

function Main() {
  const [] = useState("");

  return (
    <>
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

import { useState } from "react";
import { Link } from "react-router-dom";

function Main() {
  const [] = useState("");

  return (
    <>
      <div className="checkout-container">
        <div className="div-container">
        <form className="form">
        <label>First Name</label>
          <input required name="FirstName" type="text" placeholder="First Name"/>
          <label >Last Name</label>
          <input required name="LastName" type="text" placeholder="Last Name" />
          <label >Email</label>
          <input required name="Email" type="text" placeholder="Email" />
          <label >Address</label>
          <input required name="Address" type="text" placeholder="Address" />
          <label >Phone</label>
          <input required name="Phone" type="text" placeholder="Phone" />

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

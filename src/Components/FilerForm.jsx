import React, { useState } from "react";

const FilerForm = () => {
  return (
    <div className="form-wrapper">
      <div className="headings">
        <h1>Hello</h1>
        <h4>Hi</h4>
      </div>
      <form className="container">
        <label className="left-align-div"> Name</label>
        <input
          className="right-align-div, input-2"
          type="text"
          placeholder="Enter Name"
        />
        <label className="left-align-div">Phone Number</label>
        <input
          className="right-align-div, input-2"
          type="text"
          placeholder="Enter Phone Number"
        />
        <label className="left-align-div">Email Address</label>
        <input
          className="right-align-div, input-2"
          type="text"
          placeholder="Enter Email Address"
        />
        <label className="left-align-div">Address</label>
        <input
          className="right-align-div, input-2"
          type="text"
          placeholder="Enter Address"
        />
        <input className="btn-mail" type="button" value="Send" />
      </form>
    </div>
  );
};

export default FilerForm;

import React, { useState } from "react";
import "./Register.css";

function Register() {
  const [name, setname] = useState("");
  const [username, setusername] = useState("");
  const [mobile, setmobile] = useState("");
  const [email, setEmail] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);

  const [nameError, setNameError] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [mobileError, setMobileError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [acceptTermsError, setAcceptTermsError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let isValid = true;

    if (name === "") {
      setNameError("Field is required");
      isValid = false;
    } else {
      setNameError("");
    }

    if (username === "") {
      setUsernameError("Field is required");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (mobile === "" || !/^\d{10}$/.test(mobile)) {
      setMobileError("Field is required");
      isValid = false;
    } else {
      setMobileError("");
    }

    if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
      setEmailError("Field is required");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!acceptTerms) {
      setAcceptTermsError("You must accept the terms and conditions");
      isValid = false;
    } else {
      setAcceptTermsError("");
    }

    // Save data to local storage and clear form fields
    if (isValid) {
      const formData = {
        name,
        username,
        mobile,
        email,
      };
      localStorage.setItem("registrationData", JSON.stringify(formData));
      alert("Data saved to local storage!");

      // Clear form fields
      setname("");
      setusername("");
      setmobile("");
      setEmail("");
      setAcceptTerms(false);
    }
  };

  return (
    <div className="register">
      <div className="img-register">
        <img className="registerimg" src="/images/registerimg.png" alt="" />
        <h1 className="registerh1">
          Discover a new thing on <br /> super app
        </h1>
      </div>
      <div className="register-form">
        {/* super app  */}
        <div className="center">
          <h1 className="green">Super app</h1>
          <p>create your new account</p>
        </div>

        {/* handle submit */}
        <form onSubmit={handleSubmit}>
          {/* name input field */}
          <p>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setname(e.target.value)}
              style={{
                border: nameError ? "1px solid red" : "none",
              }}
            />{" "}
            <br />
            <span className="error">{nameError}</span>
          </p>
          <br />

          {/* username input field */}
          <p>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setusername(e.target.value)}
              style={{
                border: usernameError ? "1px solid red" : "none",
              }}
            />{" "}
            {""} <br />
            <span className="error">{usernameError}</span>
          </p>
          <br />

          {/* email input field */}
          <p>
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                border: emailError ? "1px solid red" : "",
              }}
            />{" "}
            <br />
            <span className="error">{emailError}</span>
          </p>
          <br />

          {/* mobile input field */}
          <p>
            <input
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
              style={{
                border: mobileError ? "1px solid red" : " ",
              }}
            />{" "}
            <br />
            <span className="error">{mobileError}</span>
          </p>

          {/* checkbox input field */}
          <p>
            <input
              id="checkbox"
              type="checkbox"
              checked={acceptTerms}
              onChange={(e) => setAcceptTerms(e.target.checked)}
            />{" "}
            <span className="checki">
              {" "}
              show my registeration data with superapp
            </span>
          </p>
          <span className="error check">{acceptTermsError}</span>
          <br />

          {/* sign up button  */}
          <input type="submit" value="SIGN UP" />

          {/* small text */}
          <p className="smalltxt">
            By clicking on Sign up, you agree to Superapp
            <span className="greensml"> Terms and Conditions of Use</span>
            <br /> <br />
            To learn about how Superapp collects, uses, shares, and protects
            your personal data, please read the Superapp
            <span className="greensml"> Privacy Policy</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;

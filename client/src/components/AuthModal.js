import React, { useState } from "react";
import "./authmodal.css";

const form = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  longitude: 0,
  latitude: 0,
  isSafe: true,
};

const AuthModal = ({ setShowModal, setUser, showLogin, navigate }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //errormessage useState initial value of []
  const [errors, setErrors] = useState([]);
  //password confimred useState initial value of null
  const [confirmPassword, setConfirmPassword] = useState(null);
  //loading useState initial value of false
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    longitude: 0,
    latitude: 0,
    isSafe: true,
  });

  function onChange(e) {
    //if showLogin modal is true
    if (showLogin) {
      //update formData with user inputs
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    } else {
      if (e.target.name === "email") {
        setEmail(e.target.value);
        console.log(e.target.value);
      } else {
        setPassword(e.target.value);
        console.log(e.target.value);
      }
    }
    //else username and password only
  }
  function handleClick() {
    setShowModal(false);
  }

  function handleSubmit(e) {
    //preventing page from refreshing
    e.preventDefault();

    if (showLogin && formData.password === confirmPassword) {
      //set errors to []
      setErrors([]);
      //set isloading to true
      setIsLoading(true);
      //create user with form Data in backend using fetch POST method
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }).then((r) => {
        //set isLoading to false since request made
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => {
            //set current user to signedup user
            setUser(user);
            //navigate to profile page
            navigate("/profile");
          });
        } else {
          r.json().then((err) => {
            //set errors message if request did go through
            setErrors(err.errors);
          });
        }
      });
      //reseting signup form inputs
      setFormData(form);
    } else if (!showLogin) {
      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: email, password: password }),
      }).then((r) => {
        if (r.ok) {
          r.json().then((user) => {
            setEmail(user);
            setUser(user);
            navigate("/dashboard");
          });
        }
      });
    } else {
      //if user did not put password and confirm password correctly then set errorr message
      setErrors("Please confirm your password");
    }
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">
            <div className="close-icon" onClick={handleClick}>
              ⓧ
            </div>
            {showLogin ? "CREATE ACCOUNT" : "LOG IN"}
          </h3>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              name="email"
              className="form-control mt-1"
              placeholder="Enter email"
              onChange={onChange}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control mt-1"
              placeholder="Enter password"
              onChange={onChange}
            />
          </div>

          {showLogin && (
            <div className="form-group mt-3">
              <label>Confirm Password</label>
              <input
                type="password"
                id="password-check"
                name="password-check"
                className="form-control mt-1"
                placeholder="Confirm password"
                required={true}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          )}
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-dark">
              {isLoading ? "Loading..." : "Submit"}
            </button>
          </div>
          <p className="forgot-password text-right mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
      <em>{errors}</em>
    </div>
  );
};

export default AuthModal;

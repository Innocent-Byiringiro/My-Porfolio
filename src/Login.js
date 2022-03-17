
import {useState, useEffect} from "react";
import React from 'react';
import './index.css';
function Login(){

  // manage the state of the fields
  
  const initialValues = {username: "", email: "", password: ""}
  const [formValues, setFormValues]= useState(initialValues);
  const [formErrors, setFormErrors]= useState({});
  const [isSubmit, setIsSubmit]= useState(false);

  const handleChange = (e) => {
    
    const{name, value} = e.target;
    setFormValues({ ...formValues, [name]: value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit ){
      console.log(formValues);
    }
  }, [formErrors])
  
  const validate = (values) => {
    const errors ={};
    const regex = /^[^\$@]+@[^\$@]+\.[^\$@]{2,}$/i;
    if(!values.username){
      errors.username = "username is required";
    }
    if (!values.email){
      errors.email = "email is required";
    }
    else if(!regex.test(values.email)){
      errors.email = "unaccepted email format";
    }
    if(!values.password){
      errors.password= "password is required";
    }
    else if(values.password.length <4){
      errors.password = "Please pass at leat 4 characters";
    }
    else if(values.password.length > 8){
      errors.password = "Password should not exceed 8 characters";
    }
    return errors;
  };
  // end of the state of the fields functions
    return(
        <div className="container">

          <form onSubmit={handleSubmit}>
            <h1>Login Form</h1>
            <div className="ui divider"></div>
            <div className="ui form">
              <div className="field">
                <label>Username</label>
                <input
                type="text"
                name="username"
                placeholder="username"
                value={formValues.username}
                onChange={handleChange}
                />
              </div>
              <p>{formErrors.username}</p>

              <div className="field">
                <label>Email</label>
                <input
                type="email"
                name="email"
                placeholder="email"
                value={formValues.email}
                onChange={handleChange}
                />
              </div>
              <p>{formErrors.email}</p>

              <div className="field"> 
                <label>Password</label>
                <input
                type="password"
                name="password"
                placeholder="password"
                value={formValues.password}
                onChange={handleChange}
                />
              </div>
              <p>{formErrors.password}</p>

              {/* //success message display */}
                {/* the holding area */}
              {Object.keys(formErrors).length === 0 && isSubmit ? (
                <div className="ui message success">Signed in Successfully</div>
              ) : (
                <pre>{JSON.stringify(formValues, undefined,2)}</pre>
              )}
              {/* // end of the holding area */}
              
              <button className="fluid ui button blue">Submit</button>
            </div>
          </form>
        </div>
    )
}

export default Login;
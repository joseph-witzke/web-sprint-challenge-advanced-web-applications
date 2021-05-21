import React, { useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router";


//Shape of state of form
const initialFormValues = {
  username: '',
  password: '',
};

const initialFormErrors = {
  username: '',
  password: '',
};


const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const { push } = useHistory();

  // useEffect(()=>{
  //   // make a post request to retrieve a token from the api
  //   // when you have handled the token, navigate to the BubblePage route
  // });

  const handleChange = (e) => {
    setFormValues({...formValues, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues === "") {
      setFormErrors(error)
    }else
    axios.post('http://localhost:5000/api/login', formValues)
      .then(res => {
        localStorage.setItem("token", res.data.payload);
        push('/bubbles');
      })
      .catch(err => {
        console.log(err.message)
      });
  };
  
  const error = "Username or Password not valid.";
  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
              <label>
                  <input 
                  data-testid="username"
                  type="text" 
                  value={formValues.username}
                  onChange={handleChange}
                  name="username"
                  placeholder="Username"
                  />
              </label>
          </div>
            <div className="inputs">
              <label>
                  <input 
                  data-testid="password"
                  type="password" 
                  value={formValues.password}
                  onChange={handleChange}
                  name="password"
                  placeholder="Password"
                  />
              </label>
          </div>
          <div>
            <button id="login-button">Login</button>
          </div>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
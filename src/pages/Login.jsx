import React, { useState } from 'react';
import { TextField, Button } from '@mui/material'
import './Auth.css'
import { Link, useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginStatus, setloginStatus] = useState("");

  const navigate = useNavigate();

  const login = () => {
    Axios.post('http://localhost:8080/api/loginuser', { email: email, password: password })
      .then((response) => {

        if (response.data.message) {
          const user_id = response.data.user_id ? response.data.user_id : ""
          localStorage.setItem('user_id', user_id);
          console.log("the data from localstorage : ",response.data.user_id )
          response.data.message === "Login successful" ? navigate("/main") : setloginStatus(response.data.message)
        } else {
          navigate("/home");
        }

        console.log(response);
      })
  }

  return (
    <div className='Auth-header Auth-column'>
      <Link to="/" className='Auth-goback'>&larr; &nbsp;Go back</Link>
      <form className='Auth-container Auth-column' style={{ alignItems: 'flex-start' }}>
        <h2>Sign In</h2>
        <p>Enter your details</p>
        <TextField name='email' label="Email"
          variant="outlined" fullWidth margin='normal' size='small'
          type='email' onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <TextField id="Auth-input2" name="password" label="Password"
          variant="outlined" fullWidth margin='normal' size='small'
          type='password' onChange={(e) => {
            setPassword(e.target.value);
          }} />
        <Button variant='contained'
          style={{ textTransform: 'none', marginBlock: '15px' }}
          fullWidth onClick={login}>Proceed</Button>
        <h4>Are you a new user?</h4>
        <Link to="/registration" style={{ width: '100%', margin: '0' }}>
          <Button variant='contained' color='success' style={{ textTransform: 'none', marginTop: '20px' }} fullWidth>Sign Up</Button>
        </Link>
        <p>{loginStatus}</p>
      </form>
    </div>
  )
}

export default Login
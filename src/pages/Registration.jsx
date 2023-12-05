import { Link, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';
import axios from 'axios'
import { TextField, Button, FormControl, RadioGroup, Radio, FormControlLabel, InputLabel, Select, MenuItem } from '@mui/material';
import './Auth.css'

const Registration = () => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");
    const [mobile, setMobileNo] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");

    const [errors, setErrors] = useState({});

    const navigate = useNavigate();

    const validateForm = () => {
        const errors = {};

        if (!userName.trim()) {
            errors.userName = 'Username is required';
        }

        if (!email.trim()) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
        }

        if (!password.trim()) {
            errors.password = 'Password is required';
        } else if (password.length < 6) {
            errors.password = 'Password must be at least 6 characters';
        }

        if (!mobile.trim()) {
            errors.mobile = 'Mobile number is required';
        } else if (!/^\d{10}$/.test(mobile)) {
            errors.mobile = 'Invalid mobile number';
        }

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const submitForm = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const data = { userName, email, password, mobile, gender, dob };
            console.log("Validated!!")
            axios.post("http://localhost:8080/api/createuser", data)
                .then((response) => {
                    if (response.data.success) {
                        navigate("/login");
                    }
                })
                .catch((error) => {
                    console.log(error);
                });

            // axios.post("http://localhost:8000/asr", audioFormData, {
            //     headers: {
            //         "Content-Type": "multipart/form-data",
            //         "accept": "application/json",
            //     },
            // })
            //     .then(response => {
            //         console.log("Received response:", response);
            //     })
            //     .catch(error => {
            //         console.error("Error uploading audio:", error);
            //     });
        }
    };





    return (
        <div className='Auth-header Auth-column'>

            <Link to="/" className='Auth-goback'>&larr; &nbsp;Go back</Link>

            <form method="POST" className='Auth-container Auth-column' style={{ alignItems: 'flex-start' }} onSubmit={submitForm}>

                <h2>Sign Up</h2>
                <p>Enter your details</p>

                <TextField
                    id="Auth-input0"
                    label="Username"
                    variant="outlined"
                    fullWidth
                    margin='normal'
                    size='small'
                    type='text'
                    onChange={(e) => { setUserName(e.target.value) }}
                />
                {errors.userName && <span className="error">{errors.userName}</span>}

                <FormControl component="fieldset" style={{ margin: '10px 0' }}>
                    <InputLabel id="gender-label" style={{ margin: '10px 5px' }}>Gender</InputLabel>
                    <RadioGroup
                        row
                        aria-label="gender"
                        name="gender"
                        value={gender}
                        onChange={(e) => setGender(e.target.value)}
                    >
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                    </RadioGroup>
                </FormControl>
                {errors.gender && <span className="error">{errors.gender}</span>}

                <TextField
                    id="date"
                    label="Date of Birth"
                    type="date"
                    defaultValue=""
                    InputLabelProps={{ shrink: true }}
                    onChange={(e) => setDob(e.target.value)}
                />
                <TextField id="Auth-input" label="Email"
                    variant="outlined" fullWidth margin='normal' size='small'
                    type='email' onChange={(e) => { setEmail(e.target.value) }} />

                <TextField id="Auth-input2" label="Password"
                    variant="outlined" fullWidth margin='normal' size='small'
                    type='password' onChange={(e) => { setPassword(e.target.value) }} />

                <TextField id="Auth-input3" label="Mobile Number"
                    variant="outlined" fullWidth margin='normal' size='small'
                    type="tel" onChange={(e) => { setMobileNo(e.target.value) }} />
                <Button
                    variant='contained'
                    style={{ textTransform: 'none', marginBlock: '15px' }}
                    fullWidth
                    type='submit'
                >
                    Proceed
                </Button>

                <h4>Already a user?</h4>

                <Link to="/login" style={{ width: '100%', margin: '0' }}>
                    <Button variant='contained' color='success' style={{ textTransform: 'none', marginTop: '1px' }} fullWidth>Sign In</Button>
                </Link>

            </form>
        </div>
    )
}

export default Registration
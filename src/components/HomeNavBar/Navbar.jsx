import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from '@mui/material'

function Navbar() {
    return (
        <div className='Navbar'>

            <div className='Navbar-row'>
                <div className='Navbar-logo'>
                    Word<span style={{ color: '#1565c0' }}>Smith</span>
                    &nbsp;
                </div>

                <div className='Navbar-linkscontainer'>

                </div>
            </div>

            <div>
                <Link to="/registration">
                    <Button variant='text' style={{ textTransform: 'none', borderRadius: '100px', color: 'white' }}>Sign Up</Button>
                </Link>
                <Link to="/login">
                    <Button variant='contained'
                        style={{
                            textTransform: 'none', width: '90px',
                            borderRadius: '100px', paddingBlock: '8px',
                            color: 'white'
                        }}>
                        Sign In
                    </Button>
                </Link>
            </div>

        </div>
    )
}

export default Navbar
import React from 'react'
import Navbar from '../components/HomeNavBar/Navbar'
import './Home.css'
import { Button, Paper, InputBa } from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import AuthImg from '../assets/My password-amico.png'
import WriteImg from '../assets/Novelist writing-rafiki.png'
const Home = () => {
    return (
        <div className='Home-header Home-column'>
            <Navbar />
            <div className='Home-page Home-row'>
                <div className="homepage1-container">
                    <div className='homepage1-container Home-column'>
                        <div style={{ width: '80%', textAlign: 'left' }}>
                            <div style={{ width: '40%', textAlign: 'left' }}>
                                <h1>Your Story Matters: Write, Share, Connect with <span style={{ color: '#1565c0' }}>WordSmith</span></h1>
                                <p style={{ color: '#fff' }}>We are thrilled to unveil a groundbreaking feature, inviting you to embark on a seamless and engaging journey through our innovative platform. Discover an immersive and user-friendly experience that goes beyond traditional limits, tailored to enhance your exploration and interaction on our blogging haven</p><br />

                                <div className='Home-row' style={{ justifyContent: 'flex-start' }} >
                                    <Button variant='contained' style={{ textTransform: 'none', width: '150px', height: '40px' }} >Get Started</Button>
                                    <Button variant="text" startIcon={<PlayCircleOutlineIcon />}
                                        style={{ margin: '10px', color: 'white', textTransform: 'none' }}>
                                        Watch Video
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='Home-page Home-column'>
                <h1>How it works?</h1>
                <div className='Home-row'>
                    <img src={AuthImg} width='35%'></img>
                    <div className='Homepage2-container Home-column'>
                        <h2>Authenticate yourself</h2>
                        <p>The first step to get started is to enter your details and identify yourself.</p>
                        <p className='Home-row'><h4 className='Home-step'>01</h4>New to our platform? Click on 'Sign Up' to get started.</p>
                        <p className='Home-row'><h4 className='Home-step'>02</h4>Fill in the necessary information during the sign-up process.</p>
                        <p className='Home-row'><h4 className='Home-step'>03</h4>Already a member? Log in to your account.</p>
                        <p>Still confused? Learn more about it.</p>
                        <Button variant='text'
                            style={{
                                textTransform: 'none', borderRadius: '100px', paddingBlock: '10px',
                                paddingInline: '18px', backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', marginTop: '10px', fontSize: '12px'
                            }}>
                            Learn More
                        </Button>
                    </div>
                </div>
            </div>

            <div className='Home-page Home-row'>
                <div className='Homepage2-container Home-column'>
                    <h2>Write and Share</h2>
                    <p>Discover the nearest hub for your creative expressions once you've completed the initial steps.</p>
                    <p className='Home-row'><h4 className='Home-step'>04</h4>Identify the closest content hub.</p>
                    <p className='Home-row'><h4 className='Home-step'>05</h4>Compose your articles.</p>
                    <p className='Home-row'><h4 className='Home-step'>06</h4>Publish your work and share it with the world.</p>
                    <p>Need further assistance? Delve into our comprehensive guide.</p>
                    <Button variant='text'
                        style={{
                            textTransform: 'none', borderRadius: '100px', paddingBlock: '10px',
                            paddingInline: '18px', backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', marginTop: '10px', fontSize: '12px'
                        }}>
                        Learn More
                    </Button>
                </div>
                <img src={WriteImg} width='32%'></img>
            </div>
        </div>
    )
}

export default Home
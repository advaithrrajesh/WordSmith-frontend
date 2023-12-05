import React from 'react'
import MainNavbar from '../components/MainNavBar/MainNavbar'
import Write from '../components/Write/Write'

const Main = () => {
    return (<>
        <MainNavbar />
        <div className="WriteContainer">
            <Write />
        </div>
    </>
    )
}

export default Main
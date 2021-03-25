import React from 'react'
import FollowerColumn from '../components/FollowersColumn'

function Home() {
    return (
        <div className='container'>          
                <FollowerColumn/>
                <div className='feed'>  <h1>Home</h1></div>
                <div className='suggested-box'>suggested</div>
        </div>
    )
}

export default Home

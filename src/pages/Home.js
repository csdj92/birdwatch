import React from 'react'
import FollowerColumn from '../components/FollowersColumn'

function Home() {
    let topFiveFollowing
    return (
        <div className='container'>          
                <FollowerColumn users={topFiveFollowing}/>
                <div className='feed'>  <h1>Home</h1></div>
                <div className='suggested-box'>suggested</div>
        </div>
    )
}

export default Home

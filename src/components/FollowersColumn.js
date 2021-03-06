import React from 'react'
import UsersCard from './UsersCard'

const FollowersColumn = (topFiveFollowing) => {
        const users = topFiveFollowing.users
    return (
        <div className='followerscol'>
            <div className='followers-section'>
                <div className="home"/>
                <h2 className='bold-red'>For You</h2>
            </div>

        <div className='followers-section'>
            <div className='following'/>
            <h2>Following</h2>
        </div>

        <hr/>

        <p>Your Top Accounts</p>
            {users && users.map(user =>(
                <UsersCard key={user.id} user={user}
                />
            ))}
            <hr/>
        </div>
    )
}

export default FollowersColumn

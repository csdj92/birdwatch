import React from 'react'


const UsersCard = ({user}) => {
    return (
        <div className='section-usercard'>
        <img className='user-profile' src={user.avatar} width={'100%'} alt="i"/>
        <div>
            <h3 className='bold'>{user.username} </h3>
                <p>{user.name}</p>
        </div>
            
        </div>
    )
}



export default UsersCard

import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <Link to='/'>
                <div className='logo'></div>
            </Link>

            <div className='upload-container'>
                <div className='section'>
                    <Link to='/upload'>
                        <div className='upload' />
                    </Link>
                    <img className='user-avatar' src='https://images.unsplash.com/photo-1582152629442-4a864303fb96?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80' alt='me'/>
                </div>
            </div>            
        </div>
    )
}

export default Header

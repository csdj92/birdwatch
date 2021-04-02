import React, {useState, useEffect} from 'react'
import FollowerColumn from '../components/FollowersColumn'
import axios from 'axios'
import Card from '../components/Card'
import SuggestedCard from '../components/SuggestedCard';

const Home = () => {
    let descUsers
    let topFiveFollowing
    const [users, setUsers] = useState(null)
    let topFiveNotFollowing
   

    const addData = async() => {
        await axios.post('/.netlify/functions/addData')
    }

        useEffect(() => {
            addData()
            fetchData()            
        }, [])

    const fetchData = async () =>{
        const results = await axios.get('/.netlify/functions/posts')
        setUsers(results.data)
    }

    if (users) {
      descUsers = users.sort((a,b) => a.id < b.id ? 1 : -1)

      const following = users.filter(user => user.is_followed)
      const descFollowing = following.sort((a,b) => a.likes < b.likes ? 1 : -1)
      topFiveFollowing = descFollowing.slice(0,4)

      const notFollowing = users.filter((user) => user.is_followed === false)
      const descNotFollowing = notFollowing.sort((a, b) => a.likes < b.likes ? 1 : -1)
      topFiveNotFollowing = descNotFollowing.slice(0, 5)
    }

   

    return (
        <>
        {descUsers && (
            <div className='container'>          
                <FollowerColumn users={topFiveFollowing}/>
                    <div className='feed'> 
                        <h1>Home</h1>
                        {descUsers.map((descUsers) =>
                            <Card
                                key={descUsers.id}
                                user={descUsers}
                                />
                            )}        
                    </div>
        
                <div className='suggested-box'>
                suggested
               
            <div className='break'/>
            {topFiveNotFollowing.map((notFollowingUser, index) => (
                <SuggestedCard 
                  key={index} user={notFollowingUser}
                  
		  	        />)
		  	      )}
            </div> 
            </div>
        )}
        </>
    )
}

export default Home

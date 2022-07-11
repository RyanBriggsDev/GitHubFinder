import React, { useContext } from 'react'
import Loading from '../layout/Loading'
import UserItem from './UserItem'
import GithubContext from '../../context/github/GithubContext'

function UserResults() {

    // imports from context
    const { users, loading } = useContext(GithubContext)

    if (!loading) {
        return (
            <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
                {users.map((user) => (
                    <UserItem key={user.id} user={user} />
            ))}
            </div>
          )        
    } else {
        return <Loading />
    }
}

export default UserResults

// ${process.env.REACT_APP_GITHUB_URL}
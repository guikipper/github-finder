import Search from '../components/Search'

import { useState } from 'react';
import { UserProps } from '../types/user'
import User from "../components/User"
import Error from '../components/Error'
import Loading from '../components/Loading'

function Home() {

    const [user, setUser] = useState<UserProps | null>(null); //esse user pode ser do tipo UserProps ou null
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const loadUser = async(userName: string) => {
        setError(false)
        setLoading(true)
        const res = await fetch(`https://api.github.com/users/${userName}`)
        const data = await res.json()
        if (res.status == 404) {
            setError(true)
            setLoading(false)
            setUser(null)
            return
        } 
        console.log(data)
        
        const {avatar_url, login, location, followers, following} = data
        const userData: UserProps = {
            avatar_url,
            login,
            location,
            followers,
            following,
        };
        setUser(userData)
        setLoading(false)
    }

    return (
        
        <>
            {loading ? (
                <Loading/>
            ): (
                <>
                    <Search loadUser={loadUser}/> {/* passando função loadUser acima */}
                    {user && (
                        <User {...user}/>
                    )}
                    {error && (
                        <Error/>
                    )}
                </>
               
            )}
        </>
    )
}

export default Home

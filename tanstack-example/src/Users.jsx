import { useQuery } from '@tanstack/react-query'
import React from 'react'

export default function Users() {
    const usersQuery = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const response = await fetch("https://jsonplaceholder.typicode.com/users");
            if(!response.ok) {
                throw new Error('Network Error!!!')
            } 
            return response.json();
        }
    });
    if(usersQuery.isLoading) {
        return <div>Loading....</div>
    }
    if(usersQuery.isError) {
        return <div>Boom :-( {usersQuery.error.message}</div>
    }
  return (
    <div>
        {usersQuery.data.map( user => <div key={user.id}>
                <h2>{user.email} {user.username}</h2>
        </div>)}
    </div>
  )
}

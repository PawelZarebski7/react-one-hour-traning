import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Users = () => {

  const USERS_URL = 'https://jsonplaceholder.typicode.com/users'

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
        try {
            const response = await axios.get(USERS_URL);
            setUsers(response.data)

        } catch (err) {
            console.error(err)
        }
    }

    fetchUsers()
  }, [])

  return (
    <div>
        <h2>Users List</h2>
        {
            users.map((user, index) => {
                return (
                    <div key={index}>
                        <span>{user.name}</span>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Users
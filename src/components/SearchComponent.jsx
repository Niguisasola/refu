import React, { useState, useEffect } from 'react'

const SearchComponent = () => {
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    const URL = 'https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&query=%22spain%22'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setUsers(data)
    }
    useEffect(() => {
        showData()
        console.log(users)
    })


    return (
        <>
            <table className='table table-striped table hover mt-5 shadow-lg'>
                <thead>
                    <t className='bc-violet'>
                        <th>NAME</th>
                        <th>USER NAME</th>

                    </t>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>

    )
}

export default SearchComponent

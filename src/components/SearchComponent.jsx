import React, { useState, useEffect } from 'react'

const SearchComponent = () => {
    const [restrooms, setRestrooms] = useState([])
    const [search, setSearch] = useState("")

    const URL = 'https://www.refugerestrooms.org/api/v1/restrooms/search?page=1&per_page=100&offset=0&query=%22spain%22'

    const showData = async () => {
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setRestrooms(data)
    }
    useEffect(() => {
        showData()
        console.log(restrooms)
    }, []);


    return (
        <>
            <div className='table table-striped hover mt-5 shadow-lg'>
                <div>
                    <ul className='bc-violet'>
                        <li>NAME</li>
                        <li>USER NAME</li>

                    </ul>
                </div>
                <div>
                    {restrooms.map((restroom) => (
                        <ul key={restroom.id}>
                            <li>{restroom.name}</li>
                            <li>{restroom.username}</li>
                        </ul>
                    ))}
                </div>
            </div>
        </>

    )
}

export default SearchComponent

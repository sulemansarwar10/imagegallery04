import React, { useState } from 'react'

function Searchbar(props) {
    const [value, setvalue] = useState("")
    const searchbtn = (e) => {
        e.preventDefault();
        props.setterm(value)
        console.log("search", value)
    }
    return (
        <div className='text-center'>
            <h1 className='text-3xl m-4 font-bold'>Search Images</h1>
            <input className='rounded-xl p-3 shadow-xl bg-blue-200 m-2' type='text' placeholder='search bar' onChange={(ev) => setvalue(ev.target.value)} />
            <button className='bg-green-400 hover:bg-green-500 rounded-xl m-4 py-1 px-3 text-lg' onClick={searchbtn}>Search</button>
        </div>
    )
}

export default Searchbar
import {useState} from 'react'

function SearchBar({onSearch}) {
    const [search, setSearch] = useState('')

    const setInput = (e) => {
        setSearch(e.target.value)
        
        onSearch( {search:e.target.value} )
        
    }


    return (
        <div>
            <input placeholder="Search through your database..." className="searchBar" value={search} onInput={setInput}></input>
        </div>
    )
}

export default SearchBar

// (e) => {
//     setSearch(e.target.value.toLowerCase())
//     console.log(search)
// }

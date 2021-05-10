import React from 'react'

// Will hook this up to an api call and search based on text 

const Search = () => {

    return (
        <div>
            <h5>Search For Somethings!</h5>

            <form>
                <input type="search" placeholder="search for something!" className="search__Bar" />
            </form>
        </div>
    )
}

export default Search

import React from 'react'

const SearchBar = ({city, setCity, getWeather, loading, handleKeyDown}) => {
  return (
    <div className='weather-search-container'>
      <div className='weather-search-field'>
        <span className='search-icon-marker'>📍</span>

        <input type='text' value={city} onChange={(e)=> setCity(e.target.value)} onKeyDown={handleKeyDown} placeholder='Enter city name (e.g., Tokyo, London)...' disabled={loading} />
        <button className='weather-search-btn' onClick={getWeather} disabled={loading}>{loading ? "Searching..." : "Search"}</button>

      </div>
        
    </div>
  )
}

export default SearchBar
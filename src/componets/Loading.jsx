import React from 'react'

const Loading = ({loading}) => {
  if(!loading) return null
  return (
    <div className='weather-loading-container'>
        <div className="weather-spinner"></div>
        <h2>Fetching latest radar updates...</h2>
    </div>
  )
}

export default Loading
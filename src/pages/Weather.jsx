import React, { useState } from 'react'
import SearchBar from '../componets/SearchBar'
import WeatherCard from '../componets/WeatherCard'
import Loading from '../componets/Loading'

const Weather = () => {
    const [city, setCity] = useState("")
    const [weather, setWeather] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
    

    async function getWeather(){
        if(city.trim() === "") return
        setLoading(true)
        setError("")
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data =await res.json();
            console.log(data)
            if(data.cod === 200){
                setWeather(data)
                setError("")
                setCity("")
            }
            else{
                setError(data.message)
                setWeather(null)
            }   
        }
        catch(err){
            setError("Something went wrong")
        }
        finally{
            setLoading(false)
        }
    }

    function handleKeyDown(e){
        if(e.key === "Enter"){
            getWeather()
        }
    }
  return (
    <div className='container weather-layout-wrapper'>
        <div className='page-header'>
            <h2>VORTEX WEATHER</h2>
            <p className="fav-count">Get real-time global weather insight</p>
        </div>

        <SearchBar city={city} setCity={setCity} getWeather={getWeather} loading={loading} handleKeyDown={handleKeyDown}/>

        <Loading loading={loading} />

        {error && (
            <div className='error-msg'>
                <h2>⚠️ {error.charAt(0).toUpperCase() + error.slice(1)}</h2>

            </div>
        )}

        {!loading && <WeatherCard weather={weather}/>}
    </div>
  )
}

export default Weather
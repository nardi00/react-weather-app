import React from 'react'
import './styles.css'

const CardExampleCard = ({weatherData}) => (
    <div className="container">
        <div className="child">
            <p className="current-location">Current location:</p>
            <p className="header">{weatherData.name}, {weatherData.sys.country}</p>

            <div className="flex">
                <p className="temp">{weatherData.main.temp.toPrecision(2)}&deg;C</p>
                <p className="description">{weatherData.weather[0].description}</p>
            </div>

            <p className="wind">Wind: {weatherData.wind.speed} km/h</p>
            <p className="humidity">Humidity: {weatherData.main.humidity}%</p>

        </div> 
    </div>
)


export default CardExampleCard
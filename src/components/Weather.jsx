import React from 'react'

const Weather = props => {
	if (props.weatherData.city !== '' && props.weatherData.country !== '') {
		return (
			<div>
				<p className="title-container__subtitle">
					Weather is the state of the atmosphere, describing for example the degree to
					which it is hot or cold, wet or dry, calm or stormy, clear or cloudy. Most
					weather phenomena occur in the lowest level of the atmosphere, the troposphere,
					just below the stratosphere. Weather refers to day-to-day temperature and
					precipitation activity, whereas climate is the term for the averaging of
					atmospheric conditions over longer periods of time. When used without
					qualification, "weather" is generally understood to mean the weather of Earth
				</p>
				<h3 className="title-container__subtitle"> Your location is: </h3>
				<ul>
					<li>Temperature: {props.weatherData.temperature} ℃</li>
					<li>City: {props.weatherData.city}</li>
					<li>Country: {props.weatherData.country}</li>
					<li>Humidity: {props.weatherData.humidity}%</li>
					<li>Condition: {props.weatherData.description}</li>
				</ul>
			</div>
		)
	}

	if (props.weatherData.error !== '') {
		return <h3 className="title-container__subtitle">{props.weatherData.error.message}</h3>
	}

	return <h3 className="title-container__subtitle">Seacrh your location!</h3>
}

export default Weather

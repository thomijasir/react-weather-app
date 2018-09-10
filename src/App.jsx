import React, { Component } from 'react'
import Title from './components/Title'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css'

const API_KEY_WEATHER = '0a487b5c09156cb5eef4859ce0300ef2'

class App extends Component {
	state = {
		temperature: '',
		country: '',
		city: '',
		humidity: '',
		description: '',
		error: '',
	}

	getWeather = async e => {
		e.preventDefault()
		const cityValue = e.target.elements.city.value.toLowerCase()
		const countryValue = e.target.elements.country.value.toLowerCase()
		const api_string = `http://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${API_KEY_WEATHER}&units=metric`

		try {
			const api_call = await fetch(api_string)
			const data = await api_call.json()
			if (typeof data.sys !== 'undefined') {
				this.setState({
					temperature: data.main.temp,
					country: data.sys.country,
					city: data.name,
					humidity: data.main.humidity,
					description: data.weather[0].description,
					error: '',
				})
			} else {
				this.setState({
					temperature: '',
					country: '',
					city: '',
					humidity: '',
					description: '',
					error: {
						status: data.cod,
						message: data.message,
					},
				})
			}
		} catch (error) {
			alert('koplak!')
			console.log('failure fetch: ', error)
		}
		console.log('Show data: ', this.state)
	}

	render() {
		return (
			<React.Fragment>
				<div className="wrapper">
					<div className="main">
						<div className="container-fluid">
							<div className="row">
								<div className="col-xs-5 title-container">
									<Title />
								</div>
								<div className="col-xs-7 form-container">
									<Form getWeather={this.getWeather} />
									<Weather weatherData={this.state} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		)
	}
}

export default App

import React from 'react'

const Form = props => {
	return (
		<div>
			<form onSubmit={props.getWeather}>
				<input type="text" name="city" placeholder="City.." />
				<input type="text" name="country" placeholder="Country.." />
				<button>Get Waather</button>
			</form>
		</div>
	)
}

export default Form
